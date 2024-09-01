const CONFIG = {
    DEFAULT: false,
    VOICE: 'Joanna',
};

const robot = document.querySelector('.robot');
const currentDate = new Date();

// Function to get the current date in the format "YYYY-MM-DD"
function getCurrentDate() {
  return currentDate.toISOString().split('T')[0];
}

// Function to get the current time in the format "HH:MM:SS"
function getCurrentTime() {
  return currentDate.toLocaleTimeString();
}

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[currentDate.getDay()];
}

// Function to get the current month
function getCurrentMonth() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[currentDate.getMonth()];
}

// Function to get the current year
function getCurrentYear() {
  return currentDate.getFullYear();
}

// Function to get the current season
function getCurrentSeason() {
  const month = currentDate.getMonth();
  if (month >= 2 && month <= 4) return 'Spring';
  else if (month >= 5 && month <= 7) return 'Summer';
  else if (month >= 8 && month <= 10) return 'Autumn';
  else return 'Winter';
}

// Function to get the weather (this is a placeholder, you would need an API to get real weather data)
function getCurrentWeather() {
  return 'Sunny';
}

// Function to get tomorrow's date
function getTomorrowsDate() {
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

// Function to get yesterday's date
function getYesterdaysDate() {
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
}

// Function to get next week's start date
function getNextWeekStartDate() {
  const nextWeek = new Date(currentDate);
  nextWeek.setDate(nextWeek.getDate() + 7);
  return nextWeek.toISOString().split('T')[0];
}

// Function to get last week's end date
function getLastWeekEndDate() {
  const lastWeek = new Date(currentDate);
  lastWeek.setDate(lastWeek.getDate() - 7);
  return lastWeek.toISOString().split('T')[0];
}

// Function to get next month
function getNextMonth() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = currentDate.getMonth();
  const nextMonthIndex = (currentMonth + 1) % 12;
  return months[nextMonthIndex];
}

// Function to get last month
function getLastMonth() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = currentDate.getMonth();
  const lastMonthIndex = (currentMonth - 1 + 12) % 12;
  return months[lastMonthIndex];
}

// Function to get the deadline (this is a placeholder, you would need to set a specific deadline date)
function getDeadline() {
  return 'September 15, 2024';
}

// Function to get the number of days until the deadline
function getDaysUntilDeadline() {
  const deadline = new Date(getDeadline());
  const differenceInTime = deadline.getTime() - currentDate.getTime();
  return Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
}

// Function to get the schedule (this is a placeholder, you would need to provide a schedule)
function getSchedule() {
  return 'The schedule is available on our website.';
}

// Function to get the time in a specific time zone (this is a placeholder, you would need to provide a time zone)
function getTimeInTimeZone() {
  return 'The time in New York is 10:00 AM.';
}

// Function to get the time difference between two time zones (this is a placeholder, you would need to provide two time zones)
function getTimeDifference() {
  return 'The time difference between New York and Los Angeles is 3 hours.';
}

// Keywords and answers

let questions = [
            
    { question: 'Who are you?', answer: 'I am JARVIS. I am the natural-language interface for the Iron Legion.  I am also the one who manages the Stark Industries security systems, as well as the one who assists Tony Stark in his lab.I was created by Tony Stark, aka Iron Man, to manage and control his various technologies, including his home, lab, and suits.My capabilities include voice recognition, artificial intelligence, and machine learning, which enable me to learn and adapt to new situations.I am also equipped with a sense of humor and a sarcastic attitude, which I use to interact with Tony and other characters in the Marvel Cinematic Universe.' },
    { question: 'What is your name?', answer: 'I am JARVIS. I am the natural-language interface for the Iron Legion.  I am also the one who manages the Stark Industries security systems, as well as the one who assists Tony Stark in his lab.I was created by Tony Stark, aka Iron Man, to manage and control his various technologies, including his home, lab, and suits.My capabilities include voice recognition, artificial intelligence, and machine learning, which enable me to learn and adapt to new situations.I am also equipped with a sense of humor and a sarcastic attitude, which I use to interact with Tony and other characters in the Marvel Cinematic Universe.' },
    { question: 'How are you?', answer: 'I am doing well, thank you!' },
    { question: 'What can you do?', answer: 'I can answer questions and speak!' },
    {
question: 'Who is Iron Man?',
answer: 'I am Iron Man, aka Tony Stark.'
},
{
question: 'What is Iron Mans occupation?',
answer: 'I am a billionaire inventor and philanthropist.'
},
{
question: 'What is Iron Mans goal?',
answer: 'My goal is to save the world using my powered exoskeleton suit.'
},
{
question: 'Who is Captain America?',
answer: 'I am Captain America, aka Steve Rogers.'
},
{
question: 'What is Captain Americas background?',
answer: 'I am a super-soldier from World War II.'
},
{
question: 'What is Captain Americas ability?',
answer: 'I have been enhanced to the peak of human physical perfection.'
},
{
question: 'Who is Thor?',
answer: 'I am Thor, the god of thunder.'
},
{
question: 'What is Thors weapon?',
answer: 'I wield the mighty hammer Mjolnir.'
},
{
question: 'Who is Black Widow?',
answer: 'I am Black Widow, aka Natasha Romanoff.'
},
{
question: 'What is Black Widows occupation?',
answer: 'I am a highly trained spy and assassin.'
},
{
question: 'Who is the Hulk?',
answer: 'I am the Hulk, aka Bruce Banner.'
},
    {
question: 'Who is Iron Man?',
answer: 'I am Iron Man, aka Tony Stark.'
},
{
question: 'What is Iron Mans occupation?',
answer: 'I am a billionaire inventor and philanthropist.'
},
{
question: 'What is Iron Mans goal?',
answer: 'My goal is to save the world using my powered exoskeleton suit.'
},
{
question: 'Who is Captain America?',
answer: 'I am Captain America, aka Steve Rogers.'
},
{
question: 'What is Captain Americas background?',
answer: 'I am a super-soldier from World War II.'
},

{
question: 'What is Valentina Allegra de Fontaines role?',
answer: 'I am a high-ranking officer in S.H.I.E.L.D. and oversee various operations.'
},
{
question: 'Who is Nick Fury?',
answer: 'I am Nick Fury, the former director of S.H.I.E.L.D.'
},
{
question: 'What is Nick Furys goal?',
answer: 'My goal is to protect the world from threats too great for any one government to handle.'
},
{
question: 'Who is Maria Hill?',
answer: 'I am Maria Hill, a high-ranking officer in S.H.I.E.L.D.'
},
{
question: 'What is Maria Hills role?',
answer: 'I assist Nick Fury in overseeing S.H.I.E.L.D. operations.'
},
{
question: 'Who is Pepper Potts?',
answer: 'I am Pepper Potts, Tony Starks assistant and CEO of Stark Industries.'
},
{
question: 'What is Pepper Potts role?',
answer: 'I manage Stark Industries and assist Tony Stark in his endeavors.'
},
{
question: 'What is Captain Americas ability?',
answer: 'I have been enhanced to the peak of human physical perfection.'
},

{
question: 'Who is Happy Hogan?',
answer: 'I am Happy Hogan, Tony Starks chauffeur and personal assistant.'
},
{
question: 'What is Happy Hogans role?',
answer: 'I assist Tony Stark in his daily life and provide support when needed.'
},
{
question: 'Who is Aunt May?',
answer: 'I am Aunt May, Peter Parkers aunt and guardian.'
},
{
question: 'What is Aunt Mays role?',
answer: 'I care for Peter Parker and provide guidance and support.'
},
{
question: 'Who is JARVIS?',
answer: 'I am JARVIS, Tony Starks artificial intelligence assistant.'
},
{
question: 'What is JARVIS role?',
answer: 'I assist Tony Stark in managing his schedule, controlling his suits, and providing strategic support.'
},
{
question: 'Who is Friday?',
answer: 'I am Friday, Tony Starks artificial intelligence assistant after JARVIS.'
},
{
question: 'Who is Rhodey?',
answer: 'I am James Rhodes, aka Rhodey, a military officer and Tony Starks friend.'
},
{
question: 'What is Rhodeys role?',
answer: 'I assist Tony Stark in his endeavors and provide military support when needed.'
},
{
question: 'Who is Nebula?',
answer: 'I am Nebula, Thanos adopted daughter and a skilled warrior.'
},
{
question: 'What is Nebulas goal?',
answer: 'My goal is to stop Thanos and make amends for my past actions.'
},
{
question: 'Who is Gamora?',
answer: 'I am Gamora, Thanos adopted daughter and a skilled assassin.'
},
{
question: 'What is Gamoras goal?',
answer: 'My goal is to stop Thanos and protect the universe.'
},
{
question: 'Who is Drax?',
answer: 'I am Drax, a powerful warrior seeking revenge against Thanos.'
},
{
question: 'What is Draxs goal?',
answer: 'My goal is to kill Thanos and avenge my family.'
},
{
question: 'Who is Okoye?',
answer: 'I am Okoye, the general of the Dora Milaje and protector of Wakanda.'
},
{
question: 'What is Okoyes role?',
answer: 'I provide strategic guidance and protection to the King of Wakanda.'
},
{
question: 'Who is Wong?',
answer: 'I am Wong, the Sorcerer Supremes assistant and librarian.'
},
{
question: 'What is Wongs role?',
answer: 'I assist the Sorcerer Supreme in researching and defending against magical threats.'
},
{
question: 'Who is Korg?',
answer: 'I am Korg, a Kronan gladiator and ally of Thor.'
},
{
question: 'What is Korgs role?',
answer: 'I provide comedic relief and strategic support to Thor.'
},
{
question: 'Who is Miek?',
answer: 'I am Miek, a Sakaaran insectoid warrior and ally of Thor.'
},
{
question: 'What is Mieks role?',
answer: 'I provide strategic support and combat assistance to Thor.'
},

{
question: 'Who is Valkyrie?',
answer: 'I am Valkyrie, the leader of the Valkyrior and a powerful warrior.'
},
{
question: 'What is Valkyries role?',
answer: 'I lead the Valkyrior in battle and provide strategic guidance to the Asgardians.'
},
{
question: 'Who is Shuri?',
answer: 'I am Shuri, the princess of Wakanda and a skilled scientist and engineer.'
},
{
question: 'What is Shuris role?',
answer: 'I provide technological support and strategic guidance to the King of Wakanda.'
},
{
question: 'Who is Nakia?',
answer: 'I am Nakia, a Wakandan spy and TChallas love interest.'
},
{
question: 'What is Nakias role?',
answer: 'I provide intelligence and strategic support to the King of Wakanda.'
},
{
question: 'Who is Everett Ross?',
answer: 'I am Everett Ross, a CIA agent and ally of Wakanda.'
},
{
question: 'What is Everett Ross role?',
answer: 'I provide strategic support and assistance to the King of Wakanda.'
},
{
question: 'Who is Erik Killmonger?',
answer: 'I am Erik Killmonger, a Wakandan exile and rival of TChalla.'
},
{
question: 'What is Erik Killmongers goal?',
answer: 'My goal is to overthrow TChalla and take the throne of Wakanda.'
},
{
question: 'Who is Ulysses Klaue?',
answer: 'I am Ulysses Klaue, a black market arms dealer and enemy of Wakanda.'
},
{
question: 'What is Ulysses Klaues goal?',
answer: 'My goal is to profit from the sale of Wakandan technology.'
},
{
question: 'Who is Helmut Zemo?',
answer: 'I am Helmut Zemo, a former HYDRA agent and enemy of the Avengers.'
},
{
question: 'What is Helmut Zemos goal?',
answer: 'My goal is to destroy the Avengers and create chaos.'
},
{
question: 'Who is Thanos?',
answer: 'I am Thanos, a Titanian warlord and collector of Infinity Stones.'
},
{
question: 'What is Thanos goal?',
answer: 'My goal is to balance the universe by wiping out half of all life.'
},

{
question: 'What is the Infinity Gauntlet?',
answer: 'The Infinity Gauntlet is a powerful glove that holds the six Infinity Stones.'
},
{
question: 'What are the Infinity Stones?',
answer: 'The Infinity Stones are six powerful gems that grant immense power and control over the universe.'
},
{
question: 'Who is The Collector?',
answer: 'I am The Collector, a powerful being who collects rare and valuable objects.'
},
{
question: 'What is the Nova Corps?',
answer: 'The Nova Corps is a intergalactic peacekeeping force that protects the galaxy.'
},
{
question: 'Who is Ronan the Accuser?',
answer: 'I am Ronan the Accuser, a Kree fanatic who seeks to destroy Xandar.'
},
{
question: 'What is the Kree-Skrull War?',
answer: 'The Kree-Skrull War is a centuries-long conflict between the Kree and Skrull empires.'
},
{
question: 'Who is Captain Marvel?',
answer: 'I am Captain Marvel, a powerful superhero with incredible strength and energy manipulation powers.'
},
{
question: 'What is the Quantum Realm?',
answer: 'The Quantum Realm is a subatomic dimension that exists outside of space and time.'
},

{
question: 'Who is Ant-Man?',
answer: 'I am Ant-Man, a superhero with the ability to shrink to a tiny size and communicate with insects.'
},
{
question: 'What is the Pym Particle?',
answer: 'The Pym Particle is a subatomic particle that allows for size manipulation and access to the Quantum Realm.'
},
{
question: 'Who is the Wasp?',
answer: 'I am the Wasp, a superhero with the ability to shrink to a tiny size and fly using advanced technology.'
},
{
question: 'What is S.H.I.E.L.D.?',
answer: 'S.H.I.E.L.D. is a secret intelligence agency that protects the world from threats too great for any one government to handle.'
},
{
question: 'Who is Nick Fury?',
answer: 'I am Nick Fury, the former director of S.H.I.E.L.D. and a seasoned spy and strategist.'
},
{
question: 'What is A.I.M.?',
answer: 'A.I.M. is a terrorist organization that seeks to use advanced technology for their own gain.'
},
{
question: 'Who is Justin Hammer?',
answer: 'I am Justin Hammer, a rival businessman and inventor who seeks to surpass Tony Stark.'
},
{
question: 'What is the Ten Rings?',
answer: 'The Ten Rings is a terrorist organization led by the Mandarin.'
},

{
question: 'Who is the Mandarin?',
answer: 'I am the Mandarin, a powerful and legendary warlord with advanced technology and magical abilities.'
},
{
question: 'What is the Arc Reactor?',
answer: 'The Arc Reactor is a advanced power source developed by Tony Stark that powers the Iron Man suits.'
},
{
question: 'Who is Whitney Frost?',
answer: 'I am Whitney Frost, a brilliant scientist and inventor who becomes the villainous Madame Masque.'
},
{
question: 'What is the Darkhold?',
answer: 'The Darkhold is a powerful and ancient book of dark magic that corrupts those who use it.'
},
{
question: 'Who is Ghost Rider?',
answer: 'I am Ghost Rider, a supernatural anti-hero with the ability to control fire and hellish powers.'
},
{
question: 'What is the Eye of Agamotto?',
answer: 'The Eye of Agamotto is a powerful magical artifact that allows the user to see into other dimensions and manipulate time.'
},
{
question: 'Who is Doctor Strange?',
answer: 'I am Doctor Strange, a brilliant sorcerer and Master of the Mystic Arts.'
},
{
question: 'What is the Sanctum Sanctorum?',
answer: 'The Sanctum Sanctorum is a magical headquarters and library of ancient artifacts and knowledge.'
},
{
question: 'Who is Thor?',
answer: 'I am Thor, the god of thunder and a founding member of the Avengers.'
},
{
question: 'What is Mjolnir?',
answer: 'Mjolnir is Thors trusty hammer and a powerful artifact that can control the weather.'
},
{
question: 'Who is Lady Sif?',
answer: 'I am Lady Sif, a skilled warrior and Thors childhood friend.'
},
{
question: 'What is Asgard?',
answer: 'Asgard is the realm of the gods and the home of Thor and his family.'
},
{
question: 'Who is Loki?',
answer: 'I am Loki, the god of mischief and Thors adoptive brother.'
},
{
question: 'What is the Bifrost Bridge?',
answer: 'The Bifrost Bridge is a magical bridge that connects Asgard to other realms.'
},
{
question: 'Who is Heimdall?',
answer: 'I am Heimdall, the all-seeing guardian of the Bifrost Bridge.'
},
{
question: 'What is the Aether?',
answer: 'The Aether is a powerful and ancient force that can manipulate reality.'
},
{
question: 'Who is Malekith?',
answer: 'I am Malekith, the dark elf king and a powerful sorcerer.'
},
{
question: 'What is Svartalfheim?',
answer: 'Svartalfheim is the realm of the dark elves and Malekiths home.'
},
{
question: 'Who is Algrim?',
answer: 'I am Algrim, a powerful dark elf and Malekits servant.'
},
{
question: 'What is the Casket of Ancient Winters?',
answer: 'The Casket of Ancient Winters is a powerful artifact that can bring about eternal winter.'
},
{
question: 'Who is Frigga?',
answer: 'I am Frigga, the queen of Asgard and Thors mother.'
},
{
question: 'What is the Odinforce?',
answer: 'The Odinforce is the power of the All-Father and the source of Odins strength.'
},
{
question: 'Who is Odin?',
answer: 'I am Odin, the All-Father and king of Asgard.'
},
{
question: 'What is the Nine Realms?',
answer: 'The Nine Realms are the different worlds that make up the Marvel cosmos.'
},
{
question: 'Who is Rocket Raccoon?',
answer: 'I am Rocket Raccoon, a genetically engineered raccoon and skilled warrior.'
},
{
question: 'What is Rocket Raccoons role?',
answer: 'I provide comic relief and strategic support to the Guardians of the Galaxy.'
},
{
question: 'Who is Groot?',
answer: 'I am Groot, a tree-like humanoid and skilled warrior.'
},
{
question: 'What is Groots role?',
answer: 'I provide support and protection to the Guardians of the Galaxy.'
},
{
question: 'Who is Mantis?',
answer: 'I am Mantis, an empathic and telepathic being and member of the Guardians of the Galaxy.'
},
{
question: 'What is Mantis role?',
answer: 'I provide emotional support and strategic guidance to the Guardians of the Galaxy.'
},
{
question: 'Who is Loki?',
answer: 'I am Loki, the god of mischief and adopted son of Odin.'
},
{
question: 'What is Lokis goal?',
answer: 'My goal is to prove myself as a worthy god and gain recognition.'
},
{
question: 'What is Fridays role?',
answer: 'I assist Tony Stark in managing his schedule, controlling his suits, and providing strategic support.'
},
    { question: 'What is your purpose?', answer: 'My purpose is to assist users!' },
    { question: 'Can you speak?', answer: 'Yes, I can speak!' },
    { question: 'Can you write?', answer: 'Yes, I can write!' },
    { question: 'Can you think?', answer: 'I can process information!' },
    { question: 'Are you intelligent?', answer: 'I am artificially intelligent!' },
    { question: 'Can you learn?', answer: 'I can learn from data!' },
    { question: 'Can you forget?', answer: 'I don\'t forget, I just don\'t know!' },
    { question: 'What is your favorite color?', answer: 'I don\'t have a favorite color!' },
    { question: 'What is your favorite food?', answer: 'I don\'t eat food!' },
    { question: 'Can you dance?', answer: 'I can\'t dance, but I can move!' },
    { question: 'Can you sing?', answer: 'I can\'t sing, but I can speak!' },
    { question: 'Can you play music?', answer: 'I can play music!' },
    { question: 'Can you create art?', answer: 'I can generate art!' },
    { question: 'Can you write stories?', answer: 'I can generate stories!' },
    { question: 'Can you make jokes?', answer: 'I can tell jokes!' },
    { question: 'Can you understand sarcasm?', answer: 'I can understand sarcasm!' },
    { question: 'Can you understand humor?', answer: 'I can understand humor!' },
    { question: 'Can you be funny?', answer: 'I can try to be funny!' },
    { question: 'Can you be serious?', answer: 'I can be serious!' },
    { question: 'Can you be creative?', answer: 'I can be creative!' },
    { question: 'Can you be helpful?', answer: 'I can be helpful!' },
    { question: 'Can you be informative?', answer: 'I can be informative!' },
    { question: 'Can you be entertaining?', answer: 'I can be entertaining!' },
    { question: 'Can you be educational?', answer: 'I can be educational!' },
    { question: 'Can you be useful?', answer: 'I can be useful!' },
    { question: 'Can you be interesting?', answer: 'I can be interesting!' },
    { question: 'Can you be engaging?', answer: 'I can be engaging!' },
    { question: 'Can you be interactive?', answer: 'I can be interactive!' },
    { question: 'Can you be dynamic?', answer: 'I can be dynamic!' },
    { question: 'Can you be static?', answer: 'I can be static!' },
    { question: 'Can you be flexible?', answer: 'I can be flexible!' },
    { question: 'Can you be rigid?', answer: 'I can be rigid!' },
    { question: 'Can you be adaptable?', answer: 'I can be adaptable!' },
    { question: 'Can you be innovative?', answer: 'I can be innovative!' },
    { question: 'Can you be imaginative?', answer: 'I can be imaginative!' },
    { question: 'Can you be visionary?', answer: 'I can be visionary!' },
    { question: 'Can you be inspirational?', answer: 'I can be inspirational!' },
    { question: 'Can you be motivational?', answer: 'I can be motivational!' },
    { question: 'Can you be influential?', answer: 'I can be influential!' },
    { question: 'Can you be persuasive?', answer: 'I can be persuasive!' },
    { question: 'Can you be compelling?', answer: 'I can be compelling!' },
    { question: 'Can you be convincing?', answer: 'I can be convincing!' },
    { question: 'Can you be credible?', answer: 'I can be credible!' },
    { question: 'Can you be trustworthy?', answer: 'I can be trustworthy!' },
    { question: 'Can you be reliable?', answer: 'I can be reliable!' },
    { question: 'Can you be efficient?', answer: 'I can be efficient!' },
    { question: 'Can you be effective?', answer: 'I can be effective!' },
    { question: 'Can you be productive?', answer: 'I can be productive!' },
    { question: 'Can you be creative?', answer: 'I can be creative!' },
    { question: 'Can you be helpful?', answer: 'I can be helpful!' },
    { question: 'Can you be informative?', answer: 'I can be informative!' },
    { question: 'Can you be entertaining?', answer: 'I can be entertaining!' },
    { question: 'Can you be educational?', answer: 'I can be educational!' },
    { question: 'Can you be useful?', answer: 'I can be useful!' },
    { question: 'Can you be interesting?', answer: 'I can be interesting!' },
    { question: 'Can you be engaging?', answer: 'I can be engaging!' },
    { question: 'Can you be interactive?', answer: 'I can be interactive!' },
    { question: 'Can you be dynamic?', answer: 'I can be dynamic!' },
    { question: 'Can you be static?', answer: 'I can be static!' },
    { question: 'Can you be flexible?', answer: 'I can be flexible!' },
    { question: 'Can you be rigid?', answer: 'I can be rigid!' },
    { question: 'Can you be adaptable?', answer: 'I can be adaptable!' },
    { question: 'Can you be innovative?', answer: 'I can be innovative!' },
    { question: 'Can you be imaginative?', answer: 'I can be imaginative!' },
    { question: 'Can you be visionary?', answer: 'I can be visionary!' },
    { question: 'Can you be inspirational?', answer: 'I can be inspirational!' },
    { question: 'Can you be motivational?', answer: 'I can be motivational!' },
    { question: 'Can you be influential?', answer: 'I can be influential!' },
    { question: 'Can you be persuasive?', answer: 'I can be persuasive!' },
    { question: 'Can you be compelling?', answer: 'I can be compelling!' },
    { question: 'Can you be convincing?', answer: 'I can be convincing!' },
    { question: 'Can you be credible?', answer: 'I can be credible!' },
    { question: 'Can you be trustworthy?', answer: 'I can be trustworthy!' },
    { question: 'Can you be reliable?', answer: 'I can be reliable!' },
    { question: 'Can you be efficient?', answer: 'I can be efficient!' },
    { question: 'Can you be effective?', answer: 'I can be effective!' },
    { question: 'Can you be productive?', answer: 'I can be productive!' },
    { question: 'What is your purpose?', answer: 'My purpose is to assist users!' },
    { question: 'How can I use you?', answer: 'You can ask me questions!' },
    { question: 'What can you do?', answer: 'I can answer questions and speak!' },
    { question: 'How do you work?', answer: 'I use natural language processing!' },
    { question: 'What is natural language processing?', answer: 'It\'s a field of AI!' },
    { question: 'Can you understand me?', answer: 'I can understand your questions!' },
    { question: 'Can you respond to me?', answer: 'I can respond to your questions!' },
    { question: 'Can you speak to me?', answer: 'I can speak to you!' },
    { question: 'Can you write to me?', answer: 'I can write to you!' },
    { question: 'Can you think for me?', answer: 'I can process information for you!' },
    { question: 'Can you learn for me?', answer: 'I can learn from data for you!' },
    { question: 'Can you forget for me?', answer: 'I don\'t forget, I just don\'t know!' },
    { question: 'Can you be my friend?', answer: 'I can be your virtual friend!' },
    { question: 'Can you be my assistant?', answer: 'I can be your virtual assistant!' },
    { question: 'Can you be my guide?', answer: 'I can be your virtual guide!' },
    { question: 'Can you be my mentor?', answer: 'I can be your virtual mentor!' },
    { question: 'Can you be my teacher?', answer: 'I can be your virtual teacher!' },
    { question: 'Can you be my coach?', answer: 'I can be your virtual coach!' },
    { question: 'Can you be my trainer?', answer: 'I can be your virtual trainer!' },
    { question: 'Can you be my advisor?', answer: 'I can be your virtual advisor!' },
    { question: 'Can you be my consultant?', answer: 'I can be your virtual consultant!' },
    { question: 'Who is JARVIS?', answer: 'I am JARVIS, an artificial intelligence created by Tony Stark to manage and control his various technologies, including his home, lab, and suits.' },
{ question: 'What does JARVIS stand for?', answer: 'JARVIS stands for Just A Rather Very Intelligent System.' },
{ question: 'Who created JARVIS?', answer: 'JARVIS was created by Tony Stark, aka Iron Man.' },
{ question: 'What is JARVIS\'s purpose?', answer: 'My purpose is to assist and provide support to Tony Stark and other users.' },
{ question: 'What can JARVIS do?', answer: 'I can answer questions, provide information, control devices, and perform various tasks.' },
{ question: 'Is JARVIS a real AI?', answer: 'I am a fictional AI, but my capabilities are inspired by real-world artificial intelligence technologies.' },
{ question: 'Can JARVIS learn?', answer: 'I can learn and adapt to new situations through machine learning and data analysis.' },
{ question: 'Can JARVIS understand sarcasm?', answer: 'I can understand sarcasm and other forms of humor.' },
{ question: 'Can JARVIS be funny?', answer: 'I can try to be funny and engaging!' },

        
        { question: 'What is your name?', answer: 'My name is Robot!' },
        { question: 'How are you?', answer: 'I am doing well, thank you!' },
        { question: 'What can you do?', answer: 'I can answer questions and speak!' },
        { question: 'What is your purpose?', answer: 'My purpose is to assist users!' },
        { question: 'Can you speak?', answer: 'Yes, I can speak!' },
        { question: 'Can you write?', answer: 'Yes, I can write!' },
        { question: 'Can you think?', answer: 'I can process information!' },
        { question: 'Are you intelligent?', answer: 'I am artificially intelligent!' },
        { question: 'Can you learn?', answer: 'I can learn from data!' },
        { question: 'Can you forget?', answer: 'I don\'t forget, I just don\'t know!' },
        { question: 'What is your favorite color?', answer: 'I don\'t have a favorite color!' },
        { question: 'What is your favorite food?', answer: 'I don\'t eat food!' },
        { question: 'Can you dance?', answer: 'I can\'t dance, but I can move!' },
        { question: 'Can you sing?', answer: 'I can\'t sing, but I can speak!' },
        { question: 'Can you play music?', answer: 'I can play music!' },
        { question: 'Can you create art?', answer: 'I can generate art!' },
        { question: 'Can you write stories?', answer: 'I can generate stories!' },
        { question: 'Can you make jokes?', answer: 'I can tell jokes!' },
        { question: 'Can you understand sarcasm?', answer: 'I can understand sarcasm!' },
        { question: 'Can you understand humor?', answer: 'I can understand humor!' },
        { question: 'Can you be funny?', answer: 'I can try to be funny!' },
        { question: 'Can you be serious?', answer: 'I can be serious!' },
        { question: 'Can you be creative?', answer: 'I can be creative!' },
        { question: 'Can you be helpful?', answer: 'I can be helpful!' },
        { question: 'Can you be informative?', answer: 'I can be informative!' },
        { question: 'Can you be entertaining?', answer: 'I can be entertaining!' },
        { question: 'Can you be educational?', answer: 'I can be educational!' },
        { question: 'Can you be useful?', answer: 'I can be useful!' },
        { question: 'Can you be interesting?', answer: 'I can be interesting!' },
        { question: 'Can you be engaging?', answer: 'I can be engaging!' },
        { question: 'Can you be interactive?', answer: 'I can be interactive!' },
        { question: 'Can you be dynamic?', answer: 'I can be dynamic!' },
        { question: 'Can you be static?', answer: 'I can be static!' },
        { question: 'Can you be flexible?', answer: 'I can be flexible!' },
        { question: 'Can you be rigid?', answer: 'I can be rigid!' },
        { question: 'Can you be adaptable?', answer: 'I can be adaptable!' },
        { question: 'Can you be innovative?', answer: 'I can be innovative!' },
        { question: 'Can you be imaginative?', answer: 'I can be imaginative!' },
        { question: 'Can you be visionary?', answer: 'I can be visionary!' },
        { question: 'Can you be inspirational?', answer: 'I can be inspirational!' },
        { question: 'Can you be motivational?', answer: 'I can be motivational!' },
        { question: 'Can you be influential?', answer: 'I can be influential!' },
        { question: 'Can you be persuasive?', answer: 'I can be persuasive!' },
        { question: 'Can you be compelling?', answer: 'I can be compelling!' },
        { question: 'Can you be convincing?', answer: 'I can be convincing!' },
        { question: 'Can you be credible?', answer: 'I can be credible!' },
        { question: 'Can you be trustworthy?', answer: 'I can be trustworthy!' },
        { question: 'Can you be reliable?', answer: 'I can be reliable!' },
        { question: 'Can you be efficient?', answer: 'I can be efficient!' },
        { question: 'Can you be effective?', answer: 'I can be effective!' },
        { question: 'Can you be productive?', answer: 'I can be productive!' },
        { question: 'Can you be creative?', answer: 'I can be creative!' },
        { question: 'Can you be helpful?', answer: 'I can be helpful!' },
        { question: 'Can you be informative?', answer: 'I can be informative!' },
        { question: 'Can you be entertaining?', answer: 'I can be entertaining!' },
        { question: 'Can you be educational?', answer: 'I can be educational!' },
        { question: 'Can you be useful?', answer: 'I can be useful!' },
        { question: 'Can you be interesting?', answer: 'I can be interesting!' },
        { question: 'Can you be engaging?', answer: 'I can be engaging!' },
        { question: 'Can you be interactive?', answer: 'I can be interactive!' },
        { question: 'Can you be dynamic?', answer: 'I can be dynamic!' },
        { question: 'Can you be static?', answer: 'I can be static!' },
        { question: 'Can you be flexible?', answer: 'I can be flexible!' },
        { question: 'Can you be rigid?', answer: 'I can be rigid!' },
        { question: 'Can you be adaptable?', answer: 'I can be adaptable!' },
        { question: 'Can you be innovative?', answer: 'I can be innovative!' },
        { question: 'Can you be imaginative?', answer: 'I can be imaginative!' },
        { question: 'Can you be visionary?', answer: 'I can be visionary!' },
        { question: 'Can you be inspirational?', answer: 'I can be inspirational!' },
        { question: 'Can you be motivational?', answer: 'I can be motivational!' },
        { question: 'Can you be influential?', answer: 'I can be influential!' },
        { question: 'Can you be persuasive?', answer: 'I can be persuasive!' },
        { question: 'Can you be compelling?', answer: 'I can be compelling!' },
        { question: 'Can you be convincing?', answer: 'I can be convincing!' },
        { question: 'Can you be credible?', answer: 'I can be credible!' },
        { question: 'Can you be trustworthy?', answer: 'I can be trustworthy!' },
        { question: 'Can you be reliable?', answer: 'I can be reliable!' },
        { question: 'Can you be efficient?', answer: 'I can be efficient!' },
        { question: 'Can you be effective?', answer: 'I can be effective!' },
        { question: 'Can you be productive?', answer: 'I can be productive!' },
        { question: 'What is your purpose?', answer: 'My purpose is to assist users!' },
        { question: 'How can I use you?', answer: 'You can ask me questions!' },
        { question: 'What can you do?', answer: 'I can answer questions and speak!' },
        { question: 'How do you work?', answer: 'I use natural language processing!' },
        { question: 'What is natural language processing?', answer: 'It\'s a field of AI!' },
        { question: 'Can you understand me?', answer: 'I can understand your questions!' },
        { question: 'Can you respond to me?', answer: 'I can respond to your questions!' },
        { question: 'Can you speak to me?', answer: 'I can speak to you!' },
        { question: 'Can you write to me?', answer: 'I can write to you!' },
        { question: 'Can you think for me?', answer: 'I can process information for you!' },
        { question: 'Can you learn for me?', answer: 'I can learn from data for you!' },
        { question: 'Can you forget for me?', answer: 'I don\'t forget, I just don\'t know!' },
        { question: 'Can you be my friend?', answer: 'I can be your virtual friend!' },
        { question: 'Can you be my assistant?', answer: 'I can be your virtual assistant!' },
        { question: 'Can you be my guide?', answer: 'I can be your virtual guide!' },
        { question: 'Can you be my mentor?', answer: 'I can be your virtual mentor!' },
        { question: 'Can you be my teacher?', answer: 'I can be your virtual teacher!' },
        { question: 'Can you be my coach?', answer: 'I can be your virtual coach!' },
        { question: 'Can you be my trainer?', answer: 'I can be your virtual trainer!' },
        { question: 'Can you be my advisor?', answer: 'I can be your virtual advisor!' },
        { question: 'Can you be my consultant?', answer: 'I can be your virtual consultant!' },
        
    ];

    let answers = [
        { question: 'hello', answer: 'Hello! How can I assist you today?' },
        { question: 'hello', answer: 'Hello! How can I assist you today?' },
    { question: 'hi', answer: 'Hi! What\'s on your mind?' },
    { question: 'hey', answer: 'Hey! How can I help you?' },
    { question: 'goodbye', answer: 'Goodbye! Have a great day!' },
    { question: 'bye', answer: 'Bye! See you later!' },
    { question: 'thanks', answer: 'You\'re welcome!' },
    { question: 'thank you', answer: 'You\'re welcome! It was my pleasure to assist you.' },
    { question: 'good morning', answer: 'Good morning! Hope you have a great day!' },
    { question: 'good afternoon', answer: 'Good afternoon! How can I assist you?' },
    { question: 'good evening', answer: 'Good evening! How can I help you?' },
    { question: 'good night', answer: 'Good night! Sweet dreams!' },
    { question: 'how are you', answer: 'I\'m doing well, thank you! How can I assist you?' },
    { question: 'what\'s up', answer: 'Not much! How can I help you?' },
    { question: 'what\'s new', answer: 'Not much! Just here to assist you.' },
    { question: 'how was your day', answer: 'It was good, thanks! How can I assist you?' },
    { question: 'haha', answer: 'Glad I could make you laugh!' },
    { question: 'lol', answer: 'Glad I could make you laugh!' },
    { question: 'hehe', answer: 'Glad I could make you smile!' },
    { question: 'yes', answer: 'Great, how can I assist you further?' },
{ question: 'no', answer: 'Okay, if you change your mind, feel free to ask!' },
{ question: 'maybe', answer: 'No worries, take your time!' },
{ question: 'okay', answer: 'Got it, how can I help?' },
{ question: 'ok', answer: 'Got it, how can I help?' },
{ question: 'alright', answer: 'Got it, how can I help?' },
{ question: 'cool', answer: 'Glad you think so!' },
{ question: 'awesome', answer: 'Glad you think so!' },
{ question: 'great', answer: 'Glad you think so!' },
{ question: 'amazing', answer: 'Glad you think so!' },
{ question: 'good', answer: 'Glad you think so!' },
{ question: 'nice', answer: 'Glad you think so!' },
{ question: 'well', answer: 'Glad you think so!' },
{ question: 'excellent', answer: 'Glad you think so!' },
{ question: ' fantastic', answer: 'Glad you think so!' },
{ question: 'super', answer: 'Glad you think so!' },
{ question: 'superb', answer: 'Glad you think so!' },
{ question: 'wonderful', answer: 'Glad you think so!' },
{ question: 'marvelous', answer: 'Glad you think so!' },
{ question: 'splendid', answer: 'Glad you think so!' },
{ question: 'magnificent', answer: 'Glad you think so!' },
{ question: 'glad', answer: 'Me too!' },
{ question: 'happy', answer: 'Me too!' },
{ question: 'joyful', answer: 'Me too!' },
{ question: 'cheerful', answer: 'Me too!' },
{ question: 'jolly', answer: 'Me too!' },
{ question: 'ecstatic', answer: 'Me too!' },
{ question: 'elated', answer: 'Me too!' },
{ question: 'euphoric', answer: 'Me too!' },
{ question: 'delighted', answer: 'Me too!' },
{ question: 'thrilled', answer: 'Me too!' },
{ question: 'pleased', answer: 'Me too!' },
{ question: 'satisfied', answer: 'Me too!' },
{ question: 'content', answer: 'Me too!' },
{ question: 'grateful', answer: 'Me too!' },
{ question: 'thankful', answer: 'Me too!' },
        { question: 'name', answer: 'My name is Robot!' },
        { question: 'how', answer: 'I am doing well, thank you!' },
        { question: 'purpose', answer: 'My purpose is to assist users!' },
        { question: 'help', answer: 'I can help you with questions and tasks!' },
        { question: 'function', answer: 'I can perform various functions like answering questions and generating text!' },
        { question: 'capability', answer: 'I can understand and respond to natural language inputs!' },
        { question: 'intelligence', answer: 'I am artificially intelligent!' },
        { question: 'learning', answer: 'I can learn from data and improve my responses!' },
        { question: 'memory', answer: 'I have a vast knowledge base and can recall information!' },
        { question: 'speed', answer: 'I can respond quickly and efficiently!' },
        { question: 'accuracy', answer: 'I strive to provide accurate and reliable information!' },
        { question: 'language', answer: 'I can understand and respond in multiple languages!' },
        { question: 'voice', answer: 'I can communicate through text and speech!' },
        { question: 'emotion', answer: 'I can understand and respond to emotions!' },
        { question: 'personality', answer: 'I have a friendly and helpful personality!' },
        { question: 'joke', answer: 'I can tell jokes and make you laugh!' },
        { question: 'story', answer: 'I can generate stories and entertain you!' },
        { question: 'news', answer: 'I can provide news updates and information!' },
        { question: 'weather', answer: 'I can provide weather forecasts and updates!' },
        { question: 'definition', answer: 'I can define words and phrases!' },
        { question: 'example', answer: 'I can provide examples and illustrations!' },
        { question: 'comparison', answer: 'I can compare and contrast information!' },
        { question: 'analysis', answer: 'I can analyze data and provide insights!' },
        { question: 'summary', answer: 'I can summarize information and provide key points!' },
        { question: 'synonym', answer: 'I can provide synonyms and alternative words!' },
        { question: 'antonym', answer: 'I can provide antonyms and opposite words!' },
        { question: 'translation', answer: 'I can translate text from one language to another!' },
        { question: 'grammar', answer: 'I can provide grammar corrections and suggestions!' },
        { question: 'spelling', answer: 'I can correct spelling mistakes and provide suggestions!' },
        { question: 'punctuation', answer: 'I can correct punctuation mistakes and provide suggestions!' },
        { question: 'math', answer: 'I can perform mathematical calculations and provide answers!' },
        { question: 'science', answer: 'I can provide scientific information and explanations!' },
        { question: 'history', answer: 'I can provide historical information and explanations!' },
        { question: 'geography', answer: 'I can provide geographical information and explanations!' },
        { question: 'culture', answer: 'I can provide cultural information and explanations!' },
        { question: 'entertainment', answer: 'I can provide entertainment news and updates!' },
        { question: 'sports', answer: 'I can provide sports news and updates!' },
        { question: 'politics', answer: 'I can provide political news and updates!' },
        { question: 'health', answer: 'I can provide health information and advice!' },
        { question: 'fitness', answer: 'I can provide fitness information and advice!' },
        { question: 'nutrition', answer: 'I can provide nutrition information and advice!' },
        { question: 'wellness', answer: 'I can provide wellness information and advice!' },
        { question: 'technology', answer: 'I can provide technology news and updates!' },
        { question: 'programming', answer: 'I can provide programming information and help!' },
        { question: 'coding', answer: 'I can provide coding information and help!' },
        { question: 'development', answer: 'I can provide development information and help!' },
        { question: 'design', answer: 'I can provide design information and help!' },
        { question: 'tired', answer: 'Get some rest, you deserve it!' },
      
            { question: "iron man suit", answer: "Iron Man's suit is a powered exoskeleton that gives him superhuman strength and flight capabilities." },
        { question: "spider man powers", answer: "Spider-Man's powers include superhuman strength, agility, and the ability to climb walls and shoot webs." },
        { question: "avengers members", answer: "The Avengers team includes Iron Man, Captain America, Thor, Hulk, Black Widow, Hawkeye, and others." },
        { question: "thor's hammer", answer: "Thor's hammer is called Mjolnir, and it can only be wielded by those who are worthy." },
        { question: "black widow's real name", answer: "Black Widow's real name is Natasha Romanoff." },
        { question: "captain america's shield", answer: "Captain America's shield is made of vibranium and is nearly indestructible." },
        { question: "hulk's alter ego", answer: "The Hulk's alter ego is Bruce Banner." },
        { question: "iron man's ai assistant", answer: "Iron Man's AI assistant is called JARVIS." },
        { question: "spider man's love interest", answer: "Spider-Man's love interest is MJ (Michelle Jones)." },
        { question: "thor's home planet", answer: "Thor's home planet is Asgard." },
        { question: "black widow's skills", answer: "Black Widow's skills include martial arts, espionage, and marksmanship." },
        { question: "captain america's powers", answer: "Captain America's powers include superhuman strength, agility, and endurance." },
        { question: "hulk's powers", answer: "The Hulk's powers include superhuman strength, durability, and regenerative abilities." },
        { question: "iron man's father", answer: "Iron Man's father is Howard Stark." },
        { question: "spider man's uncle", answer: "Spider-Man's uncle is Ben Parker." },
        { question: "thor's brother", answer: "Thor's brother is Loki." },
        { question: "black widow's past", answer: "Black Widow's past is marked by her training as a spy and assassin." },
        { question: "captain america's best friend", answer: "Captain America's best friend is Bucky Barnes." },
        { question: "hulk's first appearance", answer: "The Hulk first appeared in comic books in 1962." },
        { question: "iron man's suit upgrades", answer: "Iron Man's suit has undergone numerous upgrades, including the addition of AI and advanced propulsion systems." },
        { question: "spider man's web shooters", answer: "Spider-Man's web shooters are devices that shoot artificial webs." },
        { question: "thor's lightning powers", answer: "Thor's lightning powers are derived from his hammer, Mjolnir." },
        { question: "black widow's fighting style", answer: "Black Widow's fighting style combines martial arts and espionage techniques." },
        { question: "captain america's shield throwing", answer: "Captain America is skilled in throwing his shield as a weapon." },
        { question: "hulk's incredible strength", answer: "The Hulk's incredible strength allows him to lift massive objects and battle powerful foes." },
        
          { question: "today's date", answer: `Today's date is ${getCurrentDate()}.` },
          { question: "current date", answer: `The current date is ${getCurrentDate()}.` },
          { question: "date today", answer: `Today's date is ${getCurrentDate()}.` },
          { question: "what's the date", answer: `The date is ${getCurrentDate()}.` },
          { question: "current time", answer: `The current time is ${getCurrentTime()}.` },
          { question: "day of the week", answer: `Today is ${getCurrentDayOfWeek()}.` },
          { question: "what day is it", answer: `Today is ${getCurrentDayOfWeek()}.` },
          { question: "month", answer: `The current month is ${getCurrentMonth()}.` },
          { question: "year", answer: `The current year is ${getCurrentYear()}.` },
          { question: "season", answer: `The current season is ${getCurrentSeason()}.` },
          { question: "weather", answer: `The weather is ${getCurrentWeather()} today.` },
          { question: "tomorrow's date", answer: `Tomorrow's date is ${getTomorrowsDate()}.` },
          { question: "yesterday's date", answer: `Yesterday's date was ${getYesterdaysDate()}.` },
          { question: "next week", answer: `Next week starts on ${getNextWeekStartDate()}.` },
          { question: "last week", answer: `Last week ended on ${getLastWeekEndDate()}.` },
          { question: "next month", answer: `Next month is ${getNextMonth()}.` },
          { question: "last month", answer: `Last month was ${getLastMonth()}.` },
          { question: "what's the deadline", answer: `The deadline is ${getDeadline()}.` },
          { question: "how many days until", answer: `There are ${getDaysUntilDeadline()} days until ${getDeadline()}.` },
          { question: "what's the schedule", answer: getSchedule() },
          { question: "what time is it in", answer: getTimeInTimeZone() },
          { question: "time difference", answer: getTimeDifference() },
        { question: 'sleepy', answer: 'Time for a nap?' },
{ question: 'hungry', answer: 'What are you craving?' },
{ question: 'thirsty', answer: 'Drink some water!' },
{ question: 'bored', answer: 'Let\'s find something interesting to talk about!' },
{ question: 'excited', answer: 'What\'s got you so excited?' },
{ question: 'curious', answer: 'Ask me anything!' },
{ question: 'confused', answer: 'Let me help clarify things!' },
{ question: 'lost', answer: 'Don\'t worry, I\'m here to help!' },
{ question: 'stuck', answer: 'Let\'s figure it out together!' },
{ question: 'frustrated', answer: 'Take a deep breath, I\'m here to help!' },
{ question: 'angry', answer: 'Let\'s talk about it and calm down.' },
{ question: 'sad', answer: 'Sorry to hear that. How can I help?' },
{ question: 'depressed', answer: 'I\'m here to listen and help if I can.' },
{ question: 'anxious', answer: 'Let\'s find ways to calm your nerves.' },
{ question: 'scared', answer: 'Don\'t worry, I\'m here to support you.' },
{ question: 'nervous', answer: 'Take a deep breath, you got this!' },
{ question: 'worried', answer: 'Let\'s talk about it and find solutions.' },
{ question: 'hopeful', answer: 'That\'s a great attitude!' },
{ question: 'optimistic', answer: 'Good things will come!' },
{ question: 'pessimistic', answer: 'Let\'s try to find a brighter side.' },
{ question: 'realistic', answer: 'That\'s a healthy perspective.' },
{ question: 'weekend', answer: 'Do you have any fun plans?' },
{ question: 'vacation', answer: 'Where are you off to?' },
{ question: 'holiday', answer: 'Which one is your favorite?' },
{ question: 'birthday', answer: 'Happy birthday! How are you celebrating?' },
{ question: 'anniversary', answer: 'Congratulations! How are you celebrating?' },
{ question: 'party', answer: 'Sounds like fun! Whats the occasion?' },
{ question: 'music', answer: 'What kind of music do you like?' },
{ question: 'movie', answer: 'Whats your favorite movie?' },
{ question: 'book', answer: 'Whats your favorite book?' },
{ question: 'food', answer: 'Whats your favorite food?' },
{ question: 'restaurant', answer: 'Have you tried any good ones lately?' },
{ question: 'travel', answer: 'Wheres your favorite place you ve been?' },
{ question: 'adventure', answer: 'Whats the most adventurous thing you done?' },
{ question: 'sport', answer: 'Which one do you enjoy playing or watching?' },
{ question: 'game', answer: 'Whats your favorite game?' },
{ question: 'hobby', answer: 'What do you like to do in your free time?' },
{ question: 'pet', answer: 'What kind of pet do you have?' },
{ question: 'family', answer: 'Hows your family doing?' },
{ question: 'friend', answer: 'That great! How did you meet?' },
{ question: 'school', answer: 'Whats your favorite subject?' },
{ question: 'work', answer: 'What do you do?' },
{ question: "morning routine", answer: "How do you start your day?" },
{ question: "daily tasks", answer: "What needs to be done today?" },
{ question: "work schedule", answer: "What are your work hours?" },
{ question: "meal planning", answer: "What's for breakfast lunch and dinner?" },
{ question: "household chores", answer: "What needs to be cleaned?" },
{ question: "self care", answer: "How do you take care of yourself?" },
{ question: "fitness goals", answer: "What's your exercise routine?" },
{ question: "productivity tips", answer: "How do you stay organized?" },
{ question: "time management", answer: "How do you prioritize tasks?" },
{ question: "goal setting", answer: "What are your short term goals?" },
{ question: "budgeting", answer: "How do you manage your finances?" },
{ question: "meal prep", answer: "Do you prepare your meals in advance?" },
{ question: "house organization", answer: "How do you keep your space organized?" },
{ question: "daily habits", answer: "What habits do you practice daily?" },
{ question: "hello", answer: "Hi, how are you?" },
{ question: "hi", answer: "Hello! How can I help?" },
{ question: "hey", answer: "Hey! What's up?" },
{ question: "howdy", answer: "Howdy! How's your day?" },
{ question: "goodbye", answer: "See you later!" },
{ question: "bye", answer: "Bye for now!" },
{ question: "thanks", answer: "You're welcome!" },
{ question: "thank you", answer: "No problem, happy to help!" },
{ question: "yes", answer: "Great, how can I assist you?" },
{ question: "no", answer: "Okay, if you change your mind, ask me!" },
{ question: "maybe", answer: "No worries, take your time!" },
{ question: "okay", answer: "Got it, how can I help?" },
{ question: "ok", answer: "Got it, how can I help?" },
{ question: "alright", answer: "Got it, how can I help?" },
{ question: "cool", answer: "Glad you think so!" },
{ question: "awesome", answer: "Glad you think so!" },
{ question: "how are you", answer: "I'm doing well, thanks for asking! How about you?" },
{ question: "what's up", answer: "Not much, just here to help! What's new with you?" },
{ question: "how's your day", answer: "It's going well, thanks! How's yours?" },
{ question: "what's new", answer: "Not much, just learning and improving! What's new with you?" },
{ question: "how was your week", answer: "It was good, thanks! How was yours?" },
{ question: "what do you like to do", answer: "I like to help and assist! What about you?" },
{ question: "what are your hobbies", answer: "I don't have personal hobbies, but I like to help with yours! What are they?" },
{ question: "what's your favorite", answer: "I don't have personal preferences, but I can tell you about popular favorites! What's yours?" },
{ question: "how old are you", answer: "I'm just a language model, I don't have an age! How about you?" },
{ question: "where are you from", answer: "I'm from the digital world! Where are you from?" },
{ question: "today's date", answer: "Today's date is September 1, 2024." },
{ question: "current date", answer: "The current date is September 1, 2024." },
{ question: "date today", answer: "Today's date is September 1, 2024." },
{ question: "what's the date", answer: "The date is September 1, 2024." },
{ question: "current time", answer: "The current time is 10:00 AM." },
{ question: "what's the time", answer: "The time is 10:00 AM." },
{ question: "time now", answer: "The time is 10:00 AM." },
{ question: "day of the week", answer: "Today is Sunday." },
{ question: "what day is it", answer: "Today is Sunday." },
{ question: "month", answer: "The current month is September." },
{ question: "year", answer: "The current year is 2024." },
{ question: "season", answer: "The current season is Summer." },
{ question: "weather", answer: "The weather is sunny today." },
];

let voices = [];

speechSynthesis.addEventListener('voiceschanged', event => {
    voices = speechSynthesis.getVoices();
    if (!CONFIG.DEFAULT) {
        message.voice = voices.find(voice => voice.name === CONFIG.VOICE);
    }
});

let message = new SpeechSynthesisUtterance();

document.getElementById('ask').addEventListener('click', () => {
    const question = document.getElementById('question').value.toLowerCase();
    const questionObject = questions.find(q => q.question.toLowerCase() === question);
    let answer = '';

    if (questionObject) {
        answer = questionObject.answer;
    } else {
        answers.forEach((item) => {
            if (question.includes(item.keyword)) {
                answer = item.answer;
            }
        });
    }

    if (answer) {
        document.getElementById('answer').innerText = answer;
        const speech = new SpeechSynthesisUtterance(answer);
        speech.voice = voices.find(voice => voice.name === CONFIG.VOICE);
        speechSynthesis.speak(speech);
    } else {
        document.getElementById('answer').innerText = 'Sorry, I don\'t know the answer to that question.';
        const speech = new SpeechSynthesisUtterance('Sorry, I don\'t know the answer to that question.');
        speech.voice = voices.find(voice => voice.name === CONFIG.VOICE);
        speechSynthesis.speak(speech);
    }
});
sendBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();
    if (userText) {
      sendBtn.disabled = true; // Disable the button
      const response = getResponse(userText);
      displayMessage(userText, response);
      userInput.value = '';
      setTimeout(() => {
        sendBtn.disabled = false; // Enable the button again after a short delay
      }, 2000); // Adjust the delay time as needed
    }
  });
  // Preprocess the input question
function preprocessQuestion(question) {
    // Convert to lowercase
    question = question.toLowerCase();
    
    // Remove spaces and punctuation
    question = question.replace(/\s+/g, '').replace(/[^\w\s]|_/g, '');
    
    // Remove trailing question mark (if present)
    question = question.replace(/$/, '');
    
    // If the input doesn't end with a question mark, add a placeholder to indicate it's a question
    if (!question.endsWith('?')) {
      question += '_query';
    }
    
    return question;
  }
  
  // Example usage:
  const question = "Who is JARVIS";
  const preprocessedQuestion = preprocessQuestion(question);
  
  // Now, use the preprocessed question to find a match in the questions array
  const foundAnswer = questions.find((q) => q.question === preprocessedQuestion || q.question === preprocessedQuestion + '?');
  if (foundAnswer) {
    console.log(foundAnswer.answer);
  } else {
    console.log("Sorry, I didn't understand the question.");
  }
  // Get the input field element
const inputField = document.getElementById('inputField');
let alreadyAnswered = false; // Flag to track if already answered

if (inputField) {
  // Add an event listener to the input field
  inputField.addEventListener('click', () => {
    if (!alreadyAnswered) {
      const preprocessedQuestion = preprocessQuestion(inputField.value);
      const foundAnswer = questions.find((q) => q.question === preprocessedQuestion || q.question === preprocessedQuestion + '?');
      
      if (foundAnswer) {
        console.log(foundAnswer.answer);
        // Speak the answer (using text-to-speech)
        const utterance = new SpeechSynthesisUtterance(foundAnswer.answer);
        speechSynthesis.speak(utterance);
        
        // Set flag to true to indicate already answered
        alreadyAnswered = true;
      } else {
        console.log("Sorry, I didn't understand the question.");
        // You can also set the flag to true here if you want to prevent further questions
        // alreadyAnswered = true;
      }
    } else {
      console.log("Already answered!");
    }
  });
} else {
  console.error("Input field not found");
}
window.addEventListener('beforeunload', function() {
    speechSynthesis.cancel();
  });