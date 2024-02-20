
const quizzes = [
  
  //Cybersecurity Awareness Quiz
  
  {
    id: 1,
    category:4,
    name: 'Cybersecurity Awareness Quiz',
    image: 'cybersecurity.png',
    questions: [
      {
        question: "What is the primary purpose of a 'firewall' in cybersecurity?",
        options: ["To protect against malware", "To filter network traffic", "To encrypt data", "To enhance computer performance"],
        correctAnswer: "To filter network traffic"
      },
      {
        question: "Which term refers to a type of cyber attack where the attacker disguises malicious software as something legitimate?",
        options: ["Spyware", "Adware", "Trojan horse", "Worm"],
        correctAnswer: "Trojan horse"
      },
      {
        question: "What is considered a strong password practice?",
        options: ["Using the same password for multiple accounts", "Creating passwords with dictionary words", "Including a mix of uppercase, lowercase, numbers, and symbols", "Changing passwords once a year"],
        correctAnswer: "Including a mix of uppercase, lowercase, numbers, and symbols"
      },
      {
        question: "In the context of cybersecurity, what is 'phishing'?",
        options: ["A type of computer virus", "Unauthorized access to a system", "A social engineering attack to trick users into revealing sensitive information", "A form of denial-of-service attack"],
        correctAnswer: "A social engineering attack to trick users into revealing sensitive information"
      },
      {
        question: "What is the purpose of a 'VPN' (Virtual Private Network) in cybersecurity?",
        options: ["To protect against malware", "To secure network connections over the internet", "To block spam emails", "To encrypt stored data"],
        correctAnswer: "To secure network connections over the internet"
      },
      {
        question: "What does 'two-factor authentication' (2FA) involve in cybersecurity?",
        options: ["Using two different antivirus programs", "Changing passwords regularly", "Verifying identity with two separate authentication methods", "Encrypting files with two different algorithms"],
        correctAnswer: "Verifying identity with two separate authentication methods"
      },
      {
        question: "Why is it important to keep software and operating systems up to date for cybersecurity?",
        options: ["To improve internet speed", "To prevent unauthorized access", "To enhance graphic performance", "To reduce the need for backups"],
        correctAnswer: "To prevent unauthorized access"
      },
      {
        question: "What type of cybersecurity attack floods a system with traffic to make it unavailable to users?",
        options: ["Phishing", "Malware", "Denial-of-service (DoS)", "Man-in-the-middle"],
        correctAnswer: "Denial-of-service (DoS)"
      },
      {
        question: "In a cybersecurity strategy, what is the first line of defense against malware?",
        options: ["Firewall", "Antivirus software", "Secure passwords", "Network encryption"],
        correctAnswer: "Antivirus software"
      },
      {
        question: "What does the acronym 'SSL' stand for in the context of online security?",
        options: ["Secure Socket Layer", "Super Security Lock", "System Safety Layer", "Safe and Secure Link"],
        correctAnswer: "Secure Socket Layer"
      }
    ]
  },
  

//AI and Machine Learning Quiz

{
  id: 2,
  category:4,
  name: "AI and Machine Learning Quiz",
  image: "ai-ml.png",
  questions: [
    {
      question: "What is the primary goal of Artificial Intelligence?",
      options: [
        "To replicate human emotions",
        "To automate tasks and mimic human intelligence",
        "To create self-aware machines",
        "To enhance physical strength"
      ],
      correctAnswer: "To automate tasks and mimic human intelligence"
    },
    {
      question: "Which technique allows machines to learn from data and improve their performance over time?",
      options: [
        "Algorithmic programming",
        "Statistical analysis",
        "Machine learning",
        "Heuristic optimization"
      ],
      correctAnswer: "Machine learning"
    },
    {
      question: "What is the term for a computer system's ability to perform tasks that typically require human intelligence?",
      options: [
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Neural Networks"
      ],
      correctAnswer: "Artificial Intelligence"
    },
    {
      question: "What does the acronym 'ML' stand for in the context of Machine Learning?",
      options: [
        "Massive Learning",
        "Machine Language",
        "Meaningful Learning",
        "Machine Learning"
      ],
      correctAnswer: "Machine Learning"
    },
    {
      question: "Which is an example of unsupervised learning in Machine Learning?",
      options: [
        "Image recognition",
        "Spam email detection",
        "Recommendation systems",
        "Clustering data"
      ],
      correctAnswer: "Clustering data"
    },
    {
      question: "What is the purpose of a 'neural network' in the field of AI and Machine Learning?",
      options: [
        "To store and retrieve data",
        "To simulate the human brain's pattern recognition",
        "To perform complex mathematical calculations",
        "To create virtual environments"
      ],
      correctAnswer: "To simulate the human brain's pattern recognition"
    },
    {
      question: "Which programming language is commonly used for implementing machine learning algorithms?",
      options: ["Java", "Python", "C++", "JavaScript"],
      correctAnswer: "Python"
    },
    {
      question: "What is the concept of 'Deep Learning' in the context of AI?",
      options: [
        "Learning complex topics in-depth",
        "Advanced learning techniques",
        "Learning with deep understanding",
        "Neural networks with multiple layers"
      ],
      correctAnswer: "Neural networks with multiple layers"
    },
    {
      question: "What is the role of 'algorithm' in machine learning?",
      options: [
        "To represent data visually",
        "To analyze statistical patterns",
        "To perform mathematical calculations",
        "To process and learn from data"
      ],
      correctAnswer: "To process and learn from data"
    },
    {
      question: "What does 'AI Ethics' refer to in the context of Artificial Intelligence?",
      options: [
        "Ethical behavior of machines",
        "Rules and regulations for AI development",
        "Moral principles guiding AI applications",
        "The study of AI in ethical philosophy"
      ],
      correctAnswer: "Moral principles guiding AI applications"
    }
  ]
},

  //Web Development Technologies Quiz

  {
    id: 3,
    category:4,
    name: "Web Development Technologies Quiz",
    image: "web_dev.jpg",
    questions: [
      {
        question: "What does 'HTML' stand for in web development?",
        options: ["Hyperlink and Text Markup Language", "Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink Text Modeling Language"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        question: "Which of the following is a scripting language commonly used for client-side web development?",
        options: ["Java", "Python", "JavaScript", "Ruby"],
        correctAnswer: "JavaScript"
      },
      {
        question: "What is the purpose of 'CSS' in web development?",
        options: ["To define the structure of a web page", "To add interactivity to a web page", "To style the presentation of a web page", "To manage server-side data"],
        correctAnswer: "To style the presentation of a web page"
      },
      {
        question: "Which tool is commonly used for version control and collaboration in web development?",
        options: ["Git", "Subversion", "Mercurial", "CVS"],
        correctAnswer: "Git"
      },
      {
        question: "What does 'HTTP' stand for in the context of web development?",
        options: ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "High-level Transfer Text Protocol", "HyperText Text Markup Protocol"],
        correctAnswer: "HyperText Transfer Protocol"
      },
      {
        question: "Which database management system is often used in web development for relational databases?",
        options: ["MongoDB", "SQLite", "MySQL", "Redis"],
        correctAnswer: "MySQL"
      },
      {
        question: "What is the purpose of 'Bootstrap' in web development?",
        options: ["A programming language", "A version control system", "A front-end framework for responsive web design", "A content management system"],
        correctAnswer: "A front-end framework for responsive web design"
      },
      {
        question: "What does 'API' stand for in the context of web development?",
        options: ["Automated Programming Interface", "Application Programming Interface", "Advanced Programming Interface", "Automated Processing Interface"],
        correctAnswer: "Application Programming Interface"
      },
      {
        question: "Which programming language is often used for server-side web development?",
        options: ["JavaScript", "Python", "Ruby", "PHP"],
        correctAnswer: "PHP"
      },
      {
        question: "What is the purpose of 'AJAX' in web development?",
        options: ["A programming language", "A design pattern", "A scripting language", "Asynchronous JavaScript and XML for asynchronous communication"],
        correctAnswer: "Asynchronous JavaScript and XML for asynchronous communication"
      }
    ]
  },

//Networking Fundamentals Quiz

{
  id: 4,
  category:4,
  name: "Networking Fundamentals Quiz",
  image: "networking.jpg",
  questions: [
    {
      question: "What does 'LAN' stand for in networking?",
      options: ["Local Access Network", "Long Area Network", "Logical Area Network", "Local Area Network"],
      correctAnswer: "Local Area Network"
    },
    {
      question: "Which device is used to connect multiple computers in a LAN?",
      options: ["Router", "Hub", "Modem", "Switch"],
      correctAnswer: "Switch"
    },
    {
      question: "What is the function of a router in a network?",
      options: ["Connects devices within a LAN", "Connects devices in different LANs", "Amplifies network signals", "Connects devices to the internet"],
      correctAnswer: "Connects devices in different LANs"
    },
    {
      question: "What does 'IP' stand for in the context of networking?",
      options: ["Internet Provider", "Internet Protocol", "Internal Protocol", "Internet Port"],
      correctAnswer: "Internet Protocol"
    },
    {
      question: "Which protocol is commonly used for secure communication over the internet?",
      options: ["FTP", "HTTP", "TCP/IP", "HTTPS"],
      correctAnswer: "HTTPS"
    },
    {
      question: "What is the purpose of DNS in networking?",
      options: ["Determines the speed of the network", "Resolves domain names to IP addresses", "Manages network security", "Filters network traffic"],
      correctAnswer: "Resolves domain names to IP addresses"
    },
    {
      question: "What is the default subnet mask for a typical IPv4 address?",
      options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
      correctAnswer: "255.255.255.0"
    },
    {
      question: "Which of the following is a valid IPv6 address?",
      options: ["192.168.0.1", "fe80::1", "300.200.100.50", "127.0.0.1"],
      correctAnswer: "fe80::1"
    },
    {
      question: "What is a 'firewall' in the context of networking?",
      options: ["A device that connects multiple networks", "A security device that monitors and controls incoming and outgoing network traffic", "A high-speed data transmission technology", "A device that amplifies network signals"],
      correctAnswer: "A security device that monitors and controls incoming and outgoing network traffic"
    },
    {
      question: "In networking, what does 'ISP' stand for?",
      options: ["Internet Service Provider", "Internal System Protocol", "Intranet Security Policy", "Internet Signal Processor"],
      correctAnswer: "Internet Service Provider"
    }
  ]
}
,
  

//Linux Commands Quiz

{
  id: 5,
  category:4,
  name: "Linux Commands Quiz",
  image: "linux.webp",
  questions: [
    {
      question: "What command is used to list the contents of a directory in Linux?",
      options: ["ls", "dir", "list", "show"],
      correctAnswer: "ls"
    },
    {
      question: "Which command is used to create a new directory in Linux?",
      options: ["mkdir", "newdir", "create", "addfolder"],
      correctAnswer: "mkdir"
    },
    {
      question: "What does the command 'pwd' stand for in Linux?",
      options: ["Print Working Directory", "Path of Working Directory", "Present Working Directory", "Program Working Directory"],
      correctAnswer: "Print Working Directory"
    },
    {
      question: "Which command is used to copy files or directories in Linux?",
      options: ["cp", "copy", "xcopy", "cpl"],
      correctAnswer: "cp"
    },
    {
      question: "What is the purpose of the 'chmod' command in Linux?",
      options: ["Change Mode", "Change Directory", "Change Modify", "Change Permission"],
      correctAnswer: "Change Mode"
    },
    {
      question: "Which command is used to remove or delete files in Linux?",
      options: ["remove", "del", "rm", "delete"],
      correctAnswer: "rm"
    },
    {
      question: "What does the 'grep' command do in Linux?",
      options: ["Generate Report", "Global Regular Expression Print", "General Replacement", "Global Report"],
      correctAnswer: "Global Regular Expression Print"
    },
    {
      question: "Which command is used to display the last lines of a file in Linux?",
      options: ["tail", "last", "end", "cat"],
      correctAnswer: "tail"
    },
    {
      question: "What does the command 'man' stand for in Linux?",
      options: ["Manual", "Manager", "Manifest", "Mandatory"],
      correctAnswer: "Manual"
    },
    {
      question: "Which command is used to find files in Linux based on their names?",
      options: ["find", "search", "locate", "query"],
      correctAnswer: "find"
    }
  ]
},


//Computer Hardware Quiz

{
  id: 6,
  category:4,
  name: "Computer Hardware Quiz",
  image: "hardware.png",
  questions: [
    {
      question: "What is the primary function of the CPU in a computer?",
      options: ["Storage", "Computation", "Networking", "Display"],
      correctAnswer: "Computation"
    },
    {
      question: "Which component stores data in a computer for short-term use?",
      options: ["Hard Disk Drive (HDD)", "Random Access Memory (RAM)", "Central Processing Unit (CPU)", "Solid State Drive (SSD)"],
      correctAnswer: "Random Access Memory (RAM)"
    },
    {
      question: "What does BIOS stand for in the context of computer hardware?",
      options: ["Basic Input/Output System", "Binary Input/Output System", "Base Input/Output System", "Biometric Input/Output System"],
      correctAnswer: "Basic Input/Output System"
    },
    {
      question: "Which component is responsible for processing graphics in a computer?",
      options: ["Central Processing Unit (CPU)", "Graphics Processing Unit (GPU)", "Random Access Memory (RAM)", "Hard Disk Drive (HDD)"],
      correctAnswer: "Graphics Processing Unit (GPU)"
    },
    {
      question: "What is the purpose of a motherboard in a computer?",
      options: ["Display Output", "Power Supply", "Data Storage", "Connect and Communicate Between Components"],
      correctAnswer: "Connect and Communicate Between Components"
    },
    {
      question: "Which type of storage device is known for its fast read and write speeds and has no moving parts?",
      options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "USB Flash Drive", "CD-ROM"],
      correctAnswer: "Solid State Drive (SSD)"
    },
    {
      question: "What does GPU stand for in the context of computer hardware?",
      options: ["General Processing Unit", "Graphics Processing Unit", "Gaming Processing Unit", "General Purpose Unit"],
      correctAnswer: "Graphics Processing Unit"
    },
    {
      question: "Which component is responsible for converting digital signals to analog signals for audio output?",
      options: ["Central Processing Unit (CPU)", "Audio Processing Unit (APU)", "Sound Card", "Motherboard"],
      correctAnswer: "Sound Card"
    },
    {
      question: "What type of port is commonly used for connecting external devices to a computer?",
      options: ["HDMI", "VGA", "USB", "Ethernet"],
      correctAnswer: "USB"
    },
    {
      question: "Which component is responsible for storing data on a long-term basis in a computer?",
      options: ["Random Access Memory (RAM)", "Graphics Processing Unit (GPU)", "Central Processing Unit (CPU)", "Hard Disk Drive (HDD)"],
      correctAnswer: "Hard Disk Drive (HDD)"
    }
  ]
},

//Algorithms and Data Structures

{
  id: 7,
  category:4,
  name: "Algorithms and Data Structures Quiz",
  image: "asd.jpg",
  questions: [
    {
      question: "What is the purpose of a linked list in data structures?",
      options: ["To store elements in a random order", "To store elements with contiguous memory allocation", "To represent hierarchical relationships", "To store elements with dynamic memory allocation"],
      correctAnswer: "To store elements with dynamic memory allocation"
    },
    {
      question: "Which data structure follows the Last In, First Out (LIFO) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: "Stack"
    },
    {
      question: "What is the time complexity of a binary search algorithm?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)"
    },
    {
      question: "In the context of trees, what is the name of a node with no children?",
      options: ["Root", "Leaf", "Branch", "Trunk"],
      correctAnswer: "Leaf"
    },
    {
      question: "What is the primary advantage of using a hash table in data structures?",
      options: ["Constant time complexity for all operations", "Effective for ordered data storage", "Low memory consumption", "Ease of implementation"],
      correctAnswer: "Constant time complexity for all operations"
    },
    {
      question: "Which sorting algorithm has an average-case time complexity of O(n log n)?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
      correctAnswer: "Quick Sort"
    },
    {
      question: "What is the purpose of the breadth-first search (BFS) algorithm?",
      options: ["Finding the shortest path in a graph", "Traversing a tree in post-order", "Searching for an element in a sorted array", "Sorting a linked list"],
      correctAnswer: "Finding the shortest path in a graph"
    },
    {
      question: "What data structure is used to implement a queue?",
      options: ["Array", "Linked List", "Stack", "Tree"],
      correctAnswer: "Linked List"
    },
    {
      question: "What is the primary goal of dynamic programming?",
      options: ["Optimizing a function by breaking it down into simpler subproblems", "Storing data in key-value pairs", "Reducing the time complexity of an algorithm", "Performing operations in constant time"],
      correctAnswer: "Optimizing a function by breaking it down into simpler subproblems"
    },
    {
      question: "In the context of graphs, what is a cycle?",
      options: ["A path that visits each node exactly once", "A connected component with multiple nodes", "A closed path with repeated nodes", "A tree with only one root"],
      correctAnswer: "A closed path with repeated nodes"
    }
  ]
},


];

export default quizzes;

