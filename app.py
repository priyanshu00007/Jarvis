from flask import Flask, request, jsonify
from meta_ai_api import MetaAI

app = Flask(__name__)

class AIAssistant:
    def __init__(self):
        self.ai = MetaAI()
        self.conversation_history = []  # Track conversation history

    def message(self, prompt, new_conversation=False):
        if new_conversation:
            self.conversation_history = []
        response = self.ai.prompt(message=prompt)
        self.conversation_history.append(response)
        return response

    def get_weather(self, location):
        prompt = f"What is the weather in {location} today?"
        return self.message(prompt)

    def get_sources(self, response):
        sources = response.get("sources", [])
        if sources:
            return [source["link"] for source in sources]
        return None

    def get_image(self, prompt, fb_email=None, fb_password=None):
        if fb_email and fb_password:
            ai = MetaAI(fb_email=fb_email, fb_password=fb_password)
            response = ai.prompt(message=prompt)
            return response.get("media", [])
        else:
            print("Image generation requires Facebook authentication.")
            return None

    def follow_conversation(self, prompt):
        return self.message(prompt)

assistant = AIAssistant()

@app.route('/message', methods=['POST'])
def message():
    prompt = request.json['prompt']
    new_conversation = request.json.get('new_conversation', False)
    response = assistant.message(prompt, new_conversation)
    return jsonify(response)

@app.route('/weather', methods=['POST'])
def weather():
    location = request.json['location']
    response = assistant.get_weather(location)
    sources = assistant.get_sources(response)
    return jsonify({'message': response['message'], 'sources': sources})

@app.route('/image', methods=['POST'])
def image():
    prompt = request.json['prompt']
    fb_email = request.json.get('fb_email')
    fb_password = request.json.get('fb_password')
    images = assistant.get_image(prompt, fb_email, fb_password)
    return jsonify({'images': images})

if __name__ == '__main__':
    app.run(debug=True)