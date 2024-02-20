
const quizzes = [
  
  //Harry Potter Series
  
  {
    id: 1,
    category:3,
    name: "Harry Potter Series Trivia",
    description:"",
    image: "harry_potter.jpg",
    questions: [
      {
        question: "What is the name of the school that Harry Potter attends?",
        options: ["Hogwarts School of Witchcraft and Wizardry","Beauxbatons Academy of Magic", "Durmstrang Institute", "Ilvermorny School of Witchcraft and Wizardry"],
        correctAnswer: "Hogwarts School of Witchcraft and Wizardry",
      },
      {
        question: "Who is the headmaster of Hogwarts during Harry's time at school?",
        options: ["Albus Dumbledore", "Severus Snape", "Minerva McGonagall", "Gellert Grindelwald"],
        correctAnswer: "Albus Dumbledore",
      },
      {
        question: "Which magical creature helps Harry breathe underwater during the Triwizard Tournament?",
        options: ["Thestral","Blast-Ended Skrewt", "Mermaid", "Grindylow"],
        correctAnswer: "Gillyweed (not included in options for fun)",
      },
      {
        question: "What is the name of Harry's loyal pet owl?",
        options: ["Hedwig", "Errol", "Crookshanks", "Fawkes"],
        correctAnswer: "Hedwig",
      },
      {
        question: "In 'Harry Potter and the Prisoner of Azkaban', who is revealed to be Harry's godfather?",
        options: ["Remus Lupin", "Sirius Black", "James Potter", "Peter Pettigrew"],
        correctAnswer: "Sirius Black",
      },
      {
        question: "What is the core of Harry's wand?",
        options: ["Dragon heartstring", "Phoenix feather", "Unicorn hair", "Veela hair"],
        correctAnswer: "Phoenix feather",
      },
      {
        question: "Who is the Half-Blood Prince in the sixth book/film?",
        options: ["Tom Riddle","Severus Snape", "Sirius Black", "Remus Lupin"],
        correctAnswer: "Severus Snape",
      },
      {
        question: "What magical object does Harry inherit from Sirius Black?",
        options: ["The Invisibility Cloak", "The Marauder's Map", "The Pensieve", "The Deluminator"],
        correctAnswer: "The Invisibility Cloak",
      },
      {
        question: "What spell does Harry use to summon his broomstick in 'Harry Potter and the Philosopher's Stone'?",
        options: ["Lumos", "Accio", "Alohomora", "Expelliarmus"],
        correctAnswer: "Accio",
      },
      {
        question: "Which house does Luna Lovegood belong to?",
        options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        correctAnswer: "Ravenclaw",
      }
    ]
  },

  //LOTR
  {
    id: 2,
    category:3,
    name: "The Lord of the Rings Trivia",
    description:'',
    image: "lotr.webp",
    questions: [
      {
        question: "What is the name of the main protagonist in 'The Lord of the Rings'?",
        options: ["Frodo Baggins", "Aragorn", "Legolas", "Gimli"],
        correctAnswer: "Frodo Baggins"
      },
      {
        question: "What is the One Ring's inscription in the Black Speech of Mordor?",
        options: ["Ash nazg durbat ulûk", "Ash nazg gimbatul", "Ash nazg thrakatulûk agh burzum-ishi krimpatul", "Ash nazg durbatulûk agh burzum-ishi krimpatul"],
        correctAnswer: "Ash nazg durbatulûk agh burzum-ishi krimpatul"
      },
      {
        question: "Who is the author of 'The Lord of the Rings'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
        correctAnswer: "J.R.R. Tolkien"
      },
      {
        question: "What is the capital city of Gondor?",
        options: ["Rivendell", "Helm's Deep", "Minas Tirith", "Lothlórien"],
        correctAnswer: "Minas Tirith"
      },
      {
        question: "Which creature serves as the guide for Frodo and Sam in Mordor?",
        options: ["Gollum", "Shelob", "Sauron", "Saruman"],
        correctAnswer: "Gollum"
      },
      {
        question: "What is the name of Aragorn's sword?",
        options: ["Sting", "Glamdring", "Narsil", "Andúril"],
        correctAnswer: "Andúril"
      },
      {
        question: "Who says the famous line, 'You shall not pass!'?",
        options: ["Gandalf", "Aragorn", "Legolas", "Frodo"],
        correctAnswer: "Gandalf"
      },
      {
        question: "What is the name of Frodo's uncle who initially owns the One Ring?",
        options: ["Bilbo Baggins", "Thorin Oakenshield", "Boromir", "Faramir"],
        correctAnswer: "Bilbo Baggins"
      },
      {
        question: "Which member of the Fellowship of the Ring is an elf?",
        options: ["Gimli", "Frodo", "Aragorn", "Legolas"],
        correctAnswer: "Legolas"
      },
      {
        question: "What is the name of the evil wizard who serves Sauron?",
        options: ["Radagast", "Saruman", "Gandalf", "Elrond"],
        correctAnswer: "Saruman"
      }
    ]
  },

  //Star Wars

  {
    id: 3,
    category:3,
    name: "Star Wars Trivia",
    image: "star-wars.webp",
    questions: [
      {
        question: "Who is Luke Skywalker's father?",
        options: ["Darth Vader", "Emperor Palpatine", "Obi-Wan Kenobi", "Han Solo"],
        correctAnswer: "Darth Vader"
      },
      {
        question: "What is the name of the desert planet that appears in 'Star Wars: A New Hope'?",
        options: ["Tatooine", "Endor", "Jakku", "Naboo"],
        correctAnswer: "Tatooine"
      },
      {
        question: "Who is the wise and powerful Jedi Master who trained both Obi-Wan Kenobi and Anakin Skywalker?",
        options: ["Mace Windu", "Qui-Gon Jinn", "Yoda", "Ki-Adi-Mundi"],
        correctAnswer: "Yoda"
      },
      {
        question: "What is the name of Han Solo's ship?",
        options: ["X-wing", "TIE Fighter", "Millennium Falcon", "Star Destroyer"],
        correctAnswer: "Millennium Falcon"
      },
      {
        question: "In 'The Empire Strikes Back', what is the name of the ice planet?",
        options: ["Hoth", "Endor", "Dagobah", "Kashyyyk"],
        correctAnswer: "Hoth"
      },
      {
        question: "Who is the primary antagonist in the Star Wars series?",
        options: ["Count Dooku", "Darth Maul", "Kylo Ren", "Darth Sidious"],
        correctAnswer: "Darth Sidious"
      },
      {
        question: "What is the title of the first Star Wars film released in 1977?",
        options: ["The Phantom Menace", "A New Hope", "The Force Awakens", "Return of the Jedi"],
        correctAnswer: "A New Hope"
      },
      {
        question: "Which bounty hunter captures Han Solo in 'The Empire Strikes Back'?",
        options: ["IG-88", "Bossk", "Boba Fett", "Dengar"],
        correctAnswer: "Boba Fett"
      },
      {
        question: "What is the name of Anakin Skywalker's Jedi mentor?",
        options: ["Obi-Wan Kenobi", "Mace Windu", "Qui-Gon Jinn", "Yoda"],
        correctAnswer: "Obi-Wan Kenobi"
      },
      {
        question: "What is the famous weapon used by the Jedi and Sith in lightsaber duels?",
        options: ["Blaster", "Phaser", "Lightsaber", "Plasma Sword"],
        correctAnswer: "Lightsaber"
      }
    ]
  },
  
  //Barbie Trivia

  {
    id: 4,
    category:3,
    name: "Barbie Franchise Trivia",
    image: "barbie.webp",
    questions: [
      {
        question: "What year was the first Barbie doll introduced?",
        options: ["1955", "1960", "1970", "1980"],
        correctAnswer: "1959"
      },
      {
        question: "Who is Barbie's longtime boyfriend?",
        options: ["Ken", "Ryan", "Justin", "Alex"],
        correctAnswer: "Ken"
      },
      {
        question: "What is the name of Barbie's best friend?",
        options: ["Stacy", "Skipper", "Midge", "Teresa"],
        correctAnswer: "Midge"
      },
      {
        question: "In which profession has Barbie NOT had a career?",
        options: ["Astronaut", "Teacher", "Architect", "Racecar driver"],
        correctAnswer: "Racecar driver"
      },
      {
        question: "What is the title of the first Barbie animated movie?",
        options: ["Barbie and the Diamond Castle", "Barbie in Princess Power", "Barbie as The Princess and the Pauper", "Barbie in the Nutcracker"],
        correctAnswer: "Barbie in the Nutcracker"
      },
      {
        question: "Which animal is Barbie's pet in some Barbie movies?",
        options: ["Dog", "Cat", "Horse", "Dolphin"],
        correctAnswer: "Cat"
      },
      {
        question: "What is the theme song for Barbie: Life in the Dreamhouse?",
        options: ["Life in Plastic", "Barbie Girl", "Anything is Possible", "Get Your Sparkle On"],
        correctAnswer: "Get Your Sparkle On"
      },
      {
        question: "In Barbie's fictional world, what is the name of the town where she lives?",
        options: ["Barbieland", "Dreamland", "Malibu", "Pinkville"],
        correctAnswer: "Malibu"
      },
      {
        question: "Which Barbie movie features a princess who turns into a swan?",
        options: ["Barbie in the 12 Dancing Princesses", "Barbie as Rapunzel", "Barbie of Swan Lake", "Barbie as The Princess and the Pauper"],
        correctAnswer: "Barbie of Swan Lake"
      },
      {
        question: "What is the name of Barbie's younger sister?",
        options: ["Kelly", "Chelsea", "Skipper", "Stacie"],
        correctAnswer: "Skipper"
      }
    ]
  },
  
 // Music Genres Trivia
 
 {
  id: 5,
  category:3,
  name: "Music Genres Trivia",
  image: "music.jpg",
  questions: [
    {
      question: "Who is often referred to as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "James Brown"],
      correctAnswer: "Michael Jackson"
    },
    {
      question: "Which rapper is known for the album 'The Chronic' and the song 'Gin and Juice'?",
      options: ["Dr. Dre", "Snoop Dogg", "Ice Cube", "Eminem"],
      correctAnswer: "Snoop Dogg"
    },
    {
      question: "Who is considered the 'Queen of Soul'?",
      options: ["Diana Ross", "Etta James", "Aretha Franklin", "Whitney Houston"],
      correctAnswer: "Aretha Franklin"
    },
    {
      question: "Which genre of music originated in Jamaica and features a prominent offbeat rhythm?",
      options: ["Reggae", "Salsa", "Calypso", "Merengue"],
      correctAnswer: "Reggae"
    },
    {
      question: "Who is known as the 'Godfather of Soul'?",
      options: ["Ray Charles", "James Brown", "Otis Redding", "Sam Cooke"],
      correctAnswer: "James Brown"
    },
    {
      question: "In which genre would you typically find artists like Johnny Cash and Willie Nelson?",
      options: ["Country", "Folk", "Blues", "Bluegrass"],
      correctAnswer: "Country"
    },
    {
      question: "Which music genre is characterized by its use of synthesizers, drum machines, and futuristic sounds?",
      options: ["Rock", "Electronic", "Hip-Hop", "R&B"],
      correctAnswer: "Electronic"
    },
    {
      question: "Who is known as the 'Father of Bluegrass'?",
      options: ["Johnny Cash", "Bill Monroe", "Hank Williams", "Merle Haggard"],
      correctAnswer: "Bill Monroe"
    },
    {
      question: "Which genre of music originated in the African-American communities of New Orleans?",
      options: ["Jazz", "Blues", "Gospel", "R&B"],
      correctAnswer: "Jazz"
    },
    {
      question: "In the 1980s, which music genre became synonymous with big hair, leather, and power ballads?",
      options: ["Punk", "New Wave", "Glam Metal", "Post-Punk"],
      correctAnswer: "Glam Metal"
    }
  ]
},

//Classic Rock Legends Trivia

{
  id: 6,
  category:3,
  name: "Classic Rock Legends Trivia",
  image: "classic_rock.jpg",
  questions: [
    {
      question: "Who is the lead guitarist of the legendary rock band Queen?",
      options: ["Brian May", "Jimmy Page", "Eric Clapton", "Eddie Van Halen"],
      correctAnswer: "Brian May"
    },
    {
      question: "Which rock band is often called 'The Greatest Rock 'n' Roll Band in the World'?",
      options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "The Who"],
      correctAnswer: "The Rolling Stones"
    },
    {
      question: "Who is known as 'The Boss' and is the frontman of the E Street Band?",
      options: ["Bob Dylan", "Bruce Springsteen", "Tom Petty", "John Mellencamp"],
      correctAnswer: "Bruce Springsteen"
    },
    {
      question: "What classic rock band released the album 'Dark Side of the Moon'?",
      options: ["The Eagles", "Pink Floyd", "The Doors", "The Jimi Hendrix Experience"],
      correctAnswer: "Pink Floyd"
    },
    {
      question: "Who was the lead singer of the iconic rock band Queen?",
      options: ["Freddie Mercury", "Robert Plant", "Axl Rose", "David Bowie"],
      correctAnswer: "Freddie Mercury"
    },
    {
      question: "Which guitarist is known for his iconic riffs in the band Led Zeppelin?",
      options: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Angus Young"],
      correctAnswer: "Jimmy Page"
    },
    {
      question: "What song by The Beatles features a guitar solo by Eric Clapton?",
      options: ["Hey Jude", "Let It Be", "While My Guitar Gently Weeps", "Twist and Shout"],
      correctAnswer: "While My Guitar Gently Weeps"
    },
    {
      question: "Which classic rock band released the album 'Hotel California'?",
      options: ["The Eagles", "Fleetwood Mac", "The Rolling Stones", "The Who"],
      correctAnswer: "The Eagles"
    },
    {
      question: "Who was the lead vocalist and lyricist for the band The Doors?",
      options: ["Jim Morrison", "Ray Manzarek", "John Densmore", "Robbie Krieger"],
      correctAnswer: "Jim Morrison"
    },
    {
      question: "Which rock band's debut album is titled 'Appetite for Destruction'?",
      options: ["Guns N' Roses", "AC/DC", "Metallica", "Nirvana"],
      correctAnswer: "Guns N' Roses"
    }
  ]
},

//Pop Divas Trivia

{
  id: 7,
  category:3,
  name: "Pop Divas Trivia",
  image: "pop_divas.jpg",
  questions: [
    {
      question: "This pop sensation, also known as the 'Material Girl,' rose to fame in the '80s with hits like 'Like a Virgin' and 'Material Girl.' Who is she?",
      options: ["Madonna", "Whitney Houston", "Cyndi Lauper", "Janet Jackson"],
      correctAnswer: "Madonna"
    },
    {
      question: "Which pop diva is often referred to as the 'Queen of Pop' and has a career spanning over four decades?",
      options: ["Britney Spears", "Lady Gaga", "Madonna", "Beyoncé"],
      correctAnswer: "Madonna"
    },
    {
      question: "This pop icon, known for her powerful vocals, sang hits like 'I Will Always Love You' and starred in 'The Bodyguard.' Who is she?",
      options: ["Mariah Carey", "Celine Dion", "Whitney Houston", "Adele"],
      correctAnswer: "Whitney Houston"
    },
    {
      question: "Which pop diva's debut album, released in 1983, featured the hits 'Holiday' and 'Lucky Star'?",
      options: ["Janet Jackson", "Cyndi Lauper", "Madonna", "Whitney Houston"],
      correctAnswer: "Madonna"
    },
    {
      question: "This pop sensation, known for her 'Jenny from the Block' days, has also had success in acting and producing. Who is she?",
      options: ["Beyoncé", "Jennifer Lopez", "Shakira", "Rihanna"],
      correctAnswer: "Jennifer Lopez"
    },
    {
      question: "Which pop diva is famous for her 'Hollaback Girl' days and being a coach on 'The Voice'?",
      options: ["Gwen Stefani", "Christina Aguilera", "Pink", "Ariana Grande"],
      correctAnswer: "Gwen Stefani"
    },
    {
      question: "This pop princess, known for her hits like '...Baby One More Time' and 'Toxic,' is often called the 'Princess of Pop.' Who is she?",
      options: ["Britney Spears", "Ariana Grande", "Katy Perry", "Taylor Swift"],
      correctAnswer: "Britney Spears"
    },
    {
      question: "Which pop diva, with hits like 'Irreplaceable' and 'Crazy in Love,' is married to rapper Jay-Z?",
      options: ["Adele", "Beyoncé", "Rihanna", "Lady Gaga"],
      correctAnswer: "Beyoncé"
    },
    {
      question: "Known for her unique fashion and theatrical performances, this pop diva released albums like 'The Fame' and 'Born This Way.' Who is she?",
      options: ["Lady Gaga", "Katy Perry", "Rihanna", "Adele"],
      correctAnswer: "Lady Gaga"
    },
    {
      question: "Which pop diva, hailing from Barbados, has hits like 'Umbrella' and 'Diamonds'?",
      options: ["Beyoncé", "Ariana Grande", "Rihanna", "Shakira"],
      correctAnswer: "Rihanna"
    }
  ]
},

//Classic Movie Quotes Trivia

{
  id: 8,
  category:3,
  name: "Classic Movie Quotes Trivia",
  image: "classic_movie_quotes.jpg",
  questions: [
    {
      question: "In the movie 'Casablanca,' what is the famous last line spoken by Humphrey Bogart's character Rick Blaine?",
      options: ["Here's looking at you, kid.", "Play it again, Sam.", "We'll always have Paris.", "Of all the gin joints in all the towns in all the world, she walks into mine."],
      correctAnswer: "Louis, I think this is the beginning of a beautiful friendship."
    },
    {
      question: "In 'Gone with the Wind,' what is Scarlett O'Hara's famous line?",
      options: ["Tomorrow is another day.", "Frankly, my dear, I don't give a damn.", "After all, tomorrow is another day.", "I'll think about that tomorrow."],
      correctAnswer: "Frankly, my dear, I don't give a damn."
    },
    {
      question: "What is the iconic line from 'The Godfather' where Marlon Brando's character says, 'I'm going to make him an offer he can't refuse'?",
      options: ["I'll make him an offer he can't refuse.", "I'm making him an offer he can't refuse.", "I'm going to give him an offer he can't refuse.", "I'm going to make him an offer he can't refuse."],
      correctAnswer: "I'm going to make him an offer he can't refuse."
    },
    {
      question: "In 'Titanic,' what does Jack say to Rose as they stand at the front of the ship?",
      options: ["I'm the king of the world!", "We're flying!", "Hold on, Rose!", "Never let go."],
      correctAnswer: "I'm the king of the world!"
    },
    {
      question: "What does Dorothy say as she clicks her heels together in 'The Wizard of Oz'?",
      options: ["There's no place like home.", "We're not in Kansas anymore.", "Follow the yellow brick road.", "It's a twister, Auntie Em, a twister!"],
      correctAnswer: "There's no place like home."
    },
    {
      question: "What is the famous line from 'Star Wars' when Darth Vader reveals his true identity to Luke Skywalker?",
      options: ["I am your father.", "Luke, I am your father.", "No, I am your father.", "I'm your father, Luke."],
      correctAnswer: "No, I am your father."
    },
    {
      question: "In 'The Shining,' what does Jack Nicholson's character say as he breaks down the door with an axe?",
      options: ["Here's Johnny!", "Heeeere's Johnny!", "Hello, Johnny!", "Johnny's here!"],
      correctAnswer: "Heeeere's Johnny!"
    },
    {
      question: "What is the memorable line from 'Dirty Harry' where Clint Eastwood's character asks, 'You've got to ask yourself one question: 'Do I feel lucky?' Well, do you, punk?'",
      options: ["You've got to ask yourself one question: 'Do I feel lucky?' Well, do you, punk?", "Do you feel lucky, punk?", "Well, punk, do you feel lucky?", "Ask yourself, punk: Do you feel lucky?"],
      correctAnswer: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do you, punk?"
    },
    {
      question: "What is the famous line from 'A Few Good Men' delivered by Jack Nicholson's character in the courtroom scene?",
      options: ["You can't handle the truth!", "You want the truth?", "I want the truth!", "The truth is..."],
      correctAnswer: "You can't handle the truth!"
    },
    {
      question: "What does Clark Gable's character say to Vivien Leigh's character in 'Gone with the Wind'?",
      options: ["My dear, I don't give a damn.", "Frankly, my dear, I don't care.", "My dear, I don't care.", "Frankly, my dear, I don't give a damn."],
      correctAnswer: "Frankly, my dear, I don't give a damn."
    }
  ]
},


];

export default quizzes;

