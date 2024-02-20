
const quizzes = [

  //General knowledge - Geography

  {
    id: 1,
    category:2,
    name: 'General Knowledge - Geography',
    description: `Let's test your knowledge about Geography!`,
    image: 'geography.jpg',
    questions: [
      {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        options: ["Asia", "Europe", "North America", "South America"],
        correctAnswer: "Asia",
      },
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
      },
      {
        question: "In which country would you find the Great Barrier Reef?",
        options: ["Australia", "Brazil", "India", "Mexico"],
        correctAnswer: "Australia",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Rupee", "Yen", "Won"],
        correctAnswer: "Yen",
      },
      {
        question: "Which mountain range spans across seven countries, including India and Nepal?",
        options: ["Andes", "Himalayas", "Alps", "Rockies"],
        correctAnswer: "Himalayas",
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Arabian Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: "Sahara Desert",
      },
      {
        question: "Which two countries share the longest international border?",
        options: ["USA and Canada", "Russia and China", "India and Pakistan", "Brazil and Argentina"],
        correctAnswer: "USA and Canada",
      },
      {
        question: "What is the southernmost continent on Earth?",
        options: ["Antarctica", "Australia", "Africa", "South America"],
        correctAnswer: "Antarctica",
      },
      {
        question: "In which ocean is the Bermuda Triangle located?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Atlantic Ocean",
      },
      {
        question: "Which two European countries are entirely landlocked?",
        options: ["Austria and Slovakia", "Switzerland and Liechtenstein", "Luxembourg and Belgium", "Czech Republic and Hungary"],
        correctAnswer: "Luxembourg and Belgium",
      },
      {
        question: "What is the capital of Bhutan?",
        options: ["Kathmandu", "Thimphu", "Dhaka", "Colombo"],
        correctAnswer: "Thimphu",
      },
      {
        question: "Which river runs through the Grand Canyon?",
        options: ["Mississippi River", "Colorado River", "Amazon River", "Nile River"],
        correctAnswer: "Colorado River",
      },
      {
        question: "In which country would you find Lake Baikal, the deepest freshwater lake in the world?",
        options: ["Canada", "Russia", "Mongolia", "Finland"],
        correctAnswer: "Russia",
      },
      {
        question: "What is the official language of Nigeria?",
        options: ["Swahili", "Yoruba", "Igbo", "Hausa"],
        correctAnswer: "Hausa",
      },
      {
        question: "Which island country is known as the 'Pearl of the Indian Ocean'?",
        options: ["Maldives", "Mauritius", "Seychelles", "Sri Lanka"],
        correctAnswer: "Sri Lanka",
      },
      {
        question: "What is the highest mountain in Africa?",
        options: ["Mount Kilimanjaro", "Mount Kenya", "Ras Dashen", "Simien Mountains"],
        correctAnswer: "Mount Kilimanjaro",
      },
      {
        question: "Which strait separates Malaysia and Singapore?",
        options: ["Strait of Hormuz", "Bering Strait", "Malacca Strait", "Sunda Strait"],
        correctAnswer: "Malacca Strait",
      },
      {
        question: "In which U.S. state would you find Denali, the highest peak in North America?",
        options: ["Alaska", "Colorado", "California", "Montana"],
        correctAnswer: "Alaska",
      },
      {
        question: "What is the capital of Mongolia?",
        options: ["Ulaanbaatar", "Astana", "Tbilisi", "Bishkek"],
        correctAnswer: "Ulaanbaatar",
      },
    ],
  },

  //General knowledge - History

  {
    id: 2,
    category:2,
    name: 'General knowledge - History',
    description: 'Time to show off your skills in History!',
    image: 'history.png',
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: "George Washington",
      },
      {
        question: "In which year did Christopher Columbus first reach the Americas?",
        options: ["1492", "1512", "1607", "1620"],
        correctAnswer: "1492",
      },
      {
        question: "What ancient wonder of the world was located in Alexandria, Egypt?",
        options: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Statue of Zeus at Olympia", "Lighthouse of Alexandria"],
        correctAnswer: "Lighthouse of Alexandria",
      },
      {
        question: "Who was the Egyptian queen known for her relationship with Julius Caesar and Mark Antony?",
        options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"],
        correctAnswer: "Cleopatra",
      },
      {
        question: "Which war was fought between the North and the South regions of the United States?",
        options: ["American Revolution", "Civil War", "World War I", "Vietnam War"],
        correctAnswer: "Civil War",
      },
      {
        question: "Who wrote 'The Communist Manifesto' alongside Friedrich Engels?",
        options: ["Karl Marx", "Vladimir Lenin", "Mao Zedong", "Joseph Stalin"],
        correctAnswer: "Karl Marx",
      },
      {
        question: "What event marked the beginning of World War II?",
        options: ["Invasion of Poland", "D-Day", "Attack on Pearl Harbor", "Battle of Stalingrad"],
        correctAnswer: "Invasion of Poland",
      },
      {
        question: "Which ancient civilization built the city of Machu Picchu?",
        options: ["Maya", "Inca", "Aztec", "Roman"],
        correctAnswer: "Inca",
      },
      {
        question: "Who is credited with the invention of the printing press around 1440?",
        options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"],
        correctAnswer: "Johannes Gutenberg",
      },
      {
        question: "What famous speech did Martin Luther King Jr. deliver in 1963?",
        options: ["I Have a Dream", "Give Me Liberty or Give Me Death", "We Shall Overcome", "Four Freedoms"],
        correctAnswer: "I Have a Dream",
      },
      {
        question: "Which queen is often referred to as 'The Virgin Queen'?",
        options: ["Queen Elizabeth I", "Queen Victoria", "Queen Mary", "Queen Anne"],
        correctAnswer: "Queen Elizabeth I",
      },
      {
        question: "Who led the famous 'March to the Sea' during the American Civil War?",
        options: ["Robert E. Lee", "Ulysses S. Grant", "William Tecumseh Sherman", "Stonewall Jackson"],
        correctAnswer: "William Tecumseh Sherman",
      },
      {
        question: "Which country was the first to circumnavigate the globe?",
        options: ["Portugal", "Spain", "England", "Netherlands"],
        correctAnswer: "Spain",
      },
      {
        question: "What is the significance of the Magna Carta?",
        options: ["Declaration of Independence", "Bill of Rights", "Constitution", "Limitation of Monarch's Power"],
        correctAnswer: "Limitation of Monarch's Power",
      },
      {
        question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        options: ["Joseph Stalin", "Vladimir Putin", "Nikita Khrushchev", "Leon Trotsky"],
        correctAnswer: "Nikita Khrushchev",
      },
      {
        question: "What was the ancient name of Iraq?",
        options: ["Mesopotamia", "Persia", "Babylonia", "Sumer"],
        correctAnswer: "Mesopotamia",
      },
      {
        question: "Who was the first Emperor of China?",
        options: ["Confucius", "Mao Zedong", "Qin Shi Huang", "Sun Yat-sen"],
        correctAnswer: "Qin Shi Huang",
      },
      {
        question: "Which war is known as the 'War of Roses'?",
        options: ["Hundred Years' War", "English Civil War", "War of the Roses", "Wars of Scottish Independence"],
        correctAnswer: "War of the Roses",
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Emmy Noether"],
        correctAnswer: "Marie Curie",
      },
    ],
  },


  //General knowledge - Art

  {
    id: 3,
    category:2,
    name: 'General knowledge - Art',
    description: 'Now is the time to display your artsy nerdy side!',
    image: 'art.png',
    questions: [
      {
        question: "Who painted 'The Birth of Venus'?",
        options: ["Sandro Botticelli", "Titian", "Caravaggio", "Raphael"],
        correctAnswer: "Sandro Botticelli",
      },
      {
        question: "Which art movement focused on the emotional and psychological aspects of the human experience, often depicting distorted and nightmarish scenes?",
        options: ["Surrealism", "Cubism", "Expressionism", "Impressionism"],
        correctAnswer: "Expressionism",
      },
      {
        question: "What is the name of the ancient Greek temple dedicated to the goddess Athena in Athens?",
        options: ["Parthenon", "Acropolis", "Pantheon", "Colosseum"],
        correctAnswer: "Parthenon",
      },
      {
        question: "Who is known for his large-scale environmental works of art, such as 'The Gates' in Central Park?",
        options: ["Christo", "Jeff Koons", "Damien Hirst", "Yayoi Kusama"],
        correctAnswer: "Christo",
      },
      {
        question: "Which artist is associated with the art style known as 'Pop Art'?",
        options: ["Andy Warhol", "Jackson Pollock", "Roy Lichtenstein", "David Hockney"],
        correctAnswer: "Andy Warhol",
      },
      {
        question: "What is the term for a painting on wet plaster, often used in mural art?",
        options: ["Fresco", "Gouache", "Encaustic", "Tempera"],
        correctAnswer: "Fresco",
      },
      {
        question: "Who is the Dutch artist known for his use of optical illusions, such as the painting 'Relativity'?",
        options: ["M.C. Escher", "Vincent van Gogh", "Rembrandt", "Johannes Vermeer"],
        correctAnswer: "M.C. Escher",
      },
      {
        question: "In which city is the famous art museum known as the Louvre located?",
        options: ["Rome", "Madrid", "Paris", "London"],
        correctAnswer: "Paris",
      },
      {
        question: "What is the art style characterized by a focus on simple geometric shapes, primary colors, and straight lines?",
        options: ["Cubism", "Abstract Expressionism", "Minimalism", "Fauvism"],
        correctAnswer: "Minimalism",
      },
      {
        question: "Who painted 'The Girl with a Pearl Earring'?",
        options: ["Johannes Vermeer", "Rembrandt", "Jan van Eyck", "Peter Paul Rubens"],
        correctAnswer: "Johannes Vermeer",
      },
      {
        question: "Which ancient civilization is known for its intricate pottery, often featuring scenes of everyday life?",
        options: ["Greek", "Roman", "Egyptian", "Mesopotamian"],
        correctAnswer: "Greek",
      },
      {
        question: "Who painted the 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        question: "Which artistic movement is known for its use of bright colors and bold shapes, often depicting scenes of modern life?",
        options: ["Surrealism", "Cubism", "Impressionism", "Fauvism"],
        correctAnswer: "Fauvism",
      },
      {
        question: "Who sculpted the statue of 'David'?",
        options: ["Michelangelo", "Donatello", "Leonardo da Vinci", "Raphael"],
        correctAnswer: "Michelangelo",
      },
      {
        question: "Which famous artist is associated with the melting clocks in the painting 'The Persistence of Memory'?",
        options: ["Salvador Dalí", "Pablo Picasso", "René Magritte", "Henri Matisse"],
        correctAnswer: "Salvador Dalí",
      },
      {
        question: "What is the name of the famous Japanese printmaker known for the woodblock print 'The Great Wave off Kanagawa'?",
        options: ["Hokusai", "Hiroshige", "Utamaro", "Kuniyoshi"],
        correctAnswer: "Hokusai",
      },
      {
        question: "Who is considered the pioneer of abstract art?",
        options: ["Kazimir Malevich", "Wassily Kandinsky", "Piet Mondrian", "Marc Chagall"],
        correctAnswer: "Wassily Kandinsky",
      },
      {
        question: "What art movement was characterized by unconventional and experimental ideas, often challenging traditional notions of art?",
        options: ["Baroque", "Dada", "Rococo", "Neoclassicism"],
        correctAnswer: "Dada",
      },
      {
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Claude Monet", "Edvard Munch", "Georgia O'Keeffe"],
        correctAnswer: "Vincent van Gogh",
      },
      {
        question: "Which Renaissance artist is known for his frescoes in the Sistine Chapel, including 'The Creation of Adam'?",
        options: ["Raphael", "Leonardo da Vinci", "Donatello", "Michelangelo"],
        correctAnswer: "Michelangelo",
      },
      {
        question: "What art movement emerged in the 1950s, featuring abstract expressionism and often large-scale works?",
        options: ["Pop Art", "Minimalism", "Abstract Expressionism", "Op Art"],
        correctAnswer: "Abstract Expressionism",
      },
    ]
  },

  //General knowledge - Computer Science

  {
    id:4,
    category:2,
    name:'General knowledge - Computer Science',
    description:`Let's see if you are a true programming addict`,
    image:'cs.png',
    questions: [
      {
        question: "Who is known as the father of computer science?",
        options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
        correctAnswer: "Alan Turing",
      },
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Level Text Management Language", "Hyperlink and Text Markup Language", "HyperText and Multimedia Language"],
        correctAnswer: "HyperText Markup Language",
      },
      {
        question: "Which programming language was created by Guido van Rossum and named after a comedy group?",
        options: ["Java", "Python", "Ruby", "C++"],
        correctAnswer: "Python",
      },
      {
        question: "What is the purpose of an operating system?",
        options: ["To manage hardware resources", "To create documents", "To browse the internet", "To play games"],
        correctAnswer: "To manage hardware resources",
      },
      {
        question: "What is the binary system?",
        options: ["Base-8", "Base-10", "Base-16", "Base-2"],
        correctAnswer: "Base-2",
      },
      {
        question: "Which computer scientist is credited with the invention of the World Wide Web?",
        options: ["Tim Berners-Lee", "Mark Zuckerberg", "Larry Page", "Steve Jobs"],
        correctAnswer: "Tim Berners-Lee",
      },
      {
        question: "What is the main function of a firewall in computer networks?",
        options: ["To block unauthorized access", "To enhance processor speed", "To create backups", "To filter spam emails"],
        correctAnswer: "To block unauthorized access",
      },
      {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        options: ["Queue", "Linked List", "Stack", "Tree"],
        correctAnswer: "Stack",
      },
      {
        question: "What is the purpose of SQL (Structured Query Language)?",
        options: ["To design web pages", "To query and manipulate databases", "To write programming algorithms", "To create graphics"],
        correctAnswer: "To query and manipulate databases",
      },
      {
        question: "Who developed the concept of object-oriented programming?",
        options: ["Donald Knuth", "Alan Turing", "Grady Booch", "Ole-Johan Dahl and Kristen Nygaard"],
        correctAnswer: "Ole-Johan Dahl and Kristen Nygaard",
      },
      {
        question: "What is the purpose of a compiler in programming?",
        options: ["To convert high-level code to machine code", "To manage databases", "To design user interfaces", "To play multimedia files"],
        correctAnswer: "To convert high-level code to machine code",
      },
      {
        question: "What does the acronym LAN stand for?",
        options: ["Local Area Network", "Longhorn Access Network", "Logical Area Network", "Link Access Node"],
        correctAnswer: "Local Area Network",
      },
      {
        question: "In computer science, what does the acronym API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Processing Interface", "Algorithmic Processing Instruction"],
        correctAnswer: "Application Programming Interface",
      },
      {
        question: "What is the primary function of the JavaScript programming language?",
        options: ["To style web pages", "To create database queries", "To define document structure", "To add interactivity to websites"],
        correctAnswer: "To add interactivity to websites",
      },
      {
        question: "What is the purpose of a version control system like Git?",
        options: ["To track changes in code and collaborate on software development", "To create virtual machines", "To encrypt data", "To optimize network speed"],
        correctAnswer: "To track changes in code and collaborate on software development",
      },
      {
        question: "Which programming language is commonly used for data analysis and machine learning?",
        options: ["Java", "C++", "Python", "Ruby"],
        correctAnswer: "Python",
      },
      {
        question: "What is the difference between HTTP and HTTPS?",
        options: ["HTTP is more secure than HTTPS", "HTTPS uses a secure SSL/TLS connection", "HTTP is faster than HTTPS", "There is no difference"],
        correctAnswer: "HTTPS uses a secure SSL/TLS connection",
      },
      {
        question: "What is the purpose of a DNS (Domain Name System) server?",
        options: ["To store passwords", "To convert IP addresses to domain names", "To manage email communication", "To play streaming videos"],
        correctAnswer: "To convert IP addresses to domain names",
      },
      {
        question: "Who is the co-founder of Microsoft Corporation?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: "Bill Gates",
      },
      {
        question: "What does the term 'bug' in computer science refer to?",
        options: ["A computer virus", "A programming error or defect", "A hardware malfunction", "A cybersecurity threat"],
        correctAnswer: "A programming error or defect",
      },
    ],
  },

  //General knowledge - Biology

  {
    id:5,
    category:2,
    name:'General knowledge - Biology',
    description:'You are now challenged to do the undoable! Biology!',
    image:'biology.png',
    questions: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Cell Membrane"],
        correctAnswer: "Mitochondria",
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        correctAnswer: "Skin",
      },
      {
        question: "Which blood vessels carry blood away from the heart?",
        options: ["Veins", "Capillaries", "Arteries", "Venules"],
        correctAnswer: "Arteries",
      },
      {
        question: "What is the function of red blood cells?",
        options: ["Carry oxygen", "Digest food", "Produce antibodies", "Filter waste"],
        correctAnswer: "Carry oxygen",
      },
      {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        options: ["Methane", "Oxygen", "Nitrogen", "Carbon Dioxide"],
        correctAnswer: "Carbon Dioxide",
      },
      {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
        correctAnswer: "Photosynthesis",
      },
      {
        question: "Which part of the human brain is responsible for regulating basic bodily functions like breathing and heart rate?",
        options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
        correctAnswer: "Medulla Oblongata",
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Cell", "Organism", "Tissue", "Organ"],
        correctAnswer: "Cell",
      },
      {
        question: "What is the function of the kidneys in the human body?",
        options: ["Digestion", "Circulation", "Filtration of blood", "Respiration"],
        correctAnswer: "Filtration of blood",
      },
      {
        question: "Which vitamin is essential for blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correctAnswer: "Vitamin K",
      },
      {
        question: "What is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Radius", "Humerus"],
        correctAnswer: "Femur",
      },
      {
        question: "In humans, where does fertilization of an egg typically occur?",
        options: ["Uterus", "Ovary", "Fallopian Tube", "Cervix"],
        correctAnswer: "Fallopian Tube",
      },
      {
        question: "What is the function of the respiratory system?",
        options: ["Pump blood", "Filter waste", "Exchange gases", "Digest food"],
        correctAnswer: "Exchange gases",
      },
      {
        question: "Which part of the plant is responsible for the absorption of water and minerals?",
        options: ["Leaves", "Stem", "Roots", "Flowers"],
        correctAnswer: "Roots",
      },
      {
        question: "What is the purpose of the immune system?",
        options: ["Regulate body temperature", "Fight infections", "Produce energy", "Digest food"],
        correctAnswer: "Fight infections",
      },
      {
        question: "Which gas is released during cellular respiration?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Carbon Dioxide",
      },
      {
        question: "What is the role of DNA in cells?",
        options: ["Produce energy", "Store genetic information", "Digest food", "Control blood circulation"],
        correctAnswer: "Store genetic information",
      },
      {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
        correctAnswer: "Pancreas",
      },
    ],
  },

  //General knowledge - Chemistry

  {
    id:6,
    category:2,
    name:'General knowledge - Chemistry',
    description:'You are now challenged to do the even more undoable! Chemistry!',
    image:'chemistry.jpg',
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au",
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen",
      },
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "CH4", "O2"],
        correctAnswer: "H2O",
      },
      {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Nitrogen",
      },
      {
        question: "What is the process of converting a solid directly to a gas called?",
        options: ["Sublimation", "Condensation", "Evaporation", "Melting"],
        correctAnswer: "Sublimation",
      },
      {
        question: "Which element is essential for organic compounds and life?",
        options: ["Carbon", "Iron", "Calcium", "Sodium"],
        correctAnswer: "Carbon",
      },
      {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "Ni", "Ne", "Nb"],
        correctAnswer: "Na",
      },
      {
        question: "In a chemical reaction, what is the term for the substances on the left side of the arrow?",
        options: ["Products", "Reactants", "Catalysts", "Inhibitors"],
        correctAnswer: "Reactants",
      },
      {
        question: "What is the common name for the compound H2O2?",
        options: ["Hydrogen Peroxide", "Sodium Chloride", "Carbon Dioxide", "Methane"],
        correctAnswer: "Hydrogen Peroxide",
      },
      {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Nitrous Oxide", "Carbon Monoxide", "Sulfur Dioxide"],
        correctAnswer: "Nitrous Oxide",
      },
      {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Au", "Cu", "Ag"],
        correctAnswer: "Fe",
      },
      {
        question: "Which gas is produced by plants during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Oxygen",
      },
      {
        question: "What is the lightest element in the periodic table?",
        options: ["Hydrogen", "Helium", "Lithium", "Boron"],
        correctAnswer: "Hydrogen",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Ag",
      },
      {
        question: "Which element is the main component of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen",
      },
      {
        question: "What is the chemical symbol for carbon dioxide?",
        options: ["CO2", "H2O", "O2", "CH4"],
        correctAnswer: "CO2",
      },
      {
        question: "What is the process of a liquid turning into a gas below its boiling point called?",
        options: ["Evaporation", "Condensation", "Sublimation", "Melting"],
        correctAnswer: "Evaporation",
      },
      {
        question: "Which element is essential for bone formation?",
        options: ["Calcium", "Phosphorus", "Sodium", "Potassium"],
        correctAnswer: "Calcium",
      },
    ],
  },

];

export default quizzes;

