const questions = [
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        alternatives : ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
        correct : "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        alternatives : ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct : "Blue Whale"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        alternatives : ["Louis Pasteur", "Gregor Mendel", "Albert Einstein", "Charles Darwin"],
        correct : "Charles Darwin"
    },
    {
        question: "Which metal is liquid at room temperature?",
        alternatives : ["Silver", "Gold", "Mercury", "Copper"],
        correct : "Mercury"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        alternatives : ["Oxygen", "Carbon Dioxide", "Helium", "Nitrogen"],
        correct : "Nitrogen"
    },
    {
        question: "What is the tallest mountain in the world?",
        alternatives : ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correct : "Mount Everest"
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        alternatives : ["Liver", "Heart", "Lungs", "Kidney"],
        correct : "Heart"
    },
    {
        question: "What is the chemical symbol for gold?",
        alternatives : ["Au", "Ag", "Fe", "Pb"],
        correct : "Au"
    },
    {
        question: "Who was the first President of the United States?",
        alternatives : ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correct : "George Washington"
    },
    {
        question: "Which planet in our solar system is closest to the Sun?",
        alternatives : ["Mercury", "Venus", "Earth", "Mars"],
        correct : "Mercury"
    },
    {
        question: "What is the largest desert in the world?",
        alternatives : ["Sahara", "Antarctica", "Gobi", "Arabian"],
        correct : "Antarctica"
    },
    {
        question: "Who invented the light bulb?",
        alternatives : ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        correct : "Thomas Edison"
    },
        {
        question: "What is the smallest planet in our solar system?",
        alternatives : ["Mars", "Mercury", "Earth", "Venus"],
        correct : "Mercury"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        alternatives : ["France", "Germany", "Italy", "Spain"],
        correct : "France"
    },
    {
        question: "What is the currency of the United Kingdom?",
        alternatives : ["Euro", "Dollar", "Yen", "Pound Sterling"],
        correct : "Pound Sterling"
    },
    {
        question: "Which continent is known as the Dark Continent?",
        alternatives : ["Africa", "Asia", "South America", "Australia"],
        correct : "Africa"
    },
    {
        question: "Who wrote the novel '1984'?",
        alternatives : ["George Orwell", "J.R.R. Tolkien", "Aldous Huxley", "F. Scott Fitzgerald"],
        correct : "George Orwell"
    },
    {
        question: "What is the largest organ in the human body?",
        alternatives : ["Liver", "Skin", "Heart", "Brain"],
        correct : "Skin"
    },
    {
        question: "What is the capital city of Canada?",
        alternatives : ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correct : "Ottawa"
    },
    {
        question: "Which planet is known as the Morning Star?",
        alternatives : ["Venus", "Mars", "Jupiter", "Saturn"],
        correct : "Venus"
    },
    {
        question: "What is the longest bone in the human body?",
        alternatives : ["Humerus", "Tibia", "Femur", "Fibula"],
        correct : "Femur"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        alternatives : ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
        correct : "Margaret Thatcher"
    },
    {
        question: "Which ocean is the smallest by surface area?",
        alternatives : ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Southern Ocean"],
        correct : "Arctic Ocean"
    },
    {
        question: "What is the most populous country in the world?",
        alternatives : ["United States", "India", "China", "Indonesia"],
        correct : "China"
    },
    {
        question: "Which element is known as the building block of life?",
        alternatives : ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        correct : "Carbon"
    },
    {
        question: "Which artist is known for painting the ceiling of the Sistine Chapel?",
        alternatives : ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correct : "Michelangelo"
    },
    {
        question: "What is the hardest mineral on the Mohs scale?",
        alternatives : ["Diamond", "Quartz", "Corundum", "Topaz"],
        correct : "Diamond"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        alternatives : ["Australia", "Indonesia", "Brazil", "South Africa"],
        correct : "Australia"
    },
    {
        question: "What is the main language spoken in Argentina?",
        alternatives : ["Portuguese", "Spanish", "French", "Italian"],
        correct : "Spanish"
    },
    {
        question: "Who is known as the father of modern physics?",
        alternatives : ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correct : "Albert Einstein"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        alternatives : ["100°C", "50°C", "0°C", "200°C"],
        correct : "100°C"
    },
    {
        question: "Which planet has the most moons?",
        alternatives : ["Jupiter", "Saturn", "Mars", "Neptune"],
        correct : "Jupiter"
    },
    {
        question: "Which country has the most UNESCO World Heritage Sites?",
        alternatives: ["China", "Italy", "Spain", "France"],
        correct: "Italy"
    },
    {
        question: "What is the chemical formula for table salt?",
        alternatives: ["NaCl", "H2O", "CO2", "KCl"],
        correct: "NaCl"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        alternatives: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        correct: "Marie Curie"
    },
    {
        question: "Which U.S. state is known as the 'Sunshine State'?",
        alternatives: ["Florida", "California", "Arizona", "Texas"],
        correct: "Florida"
    },
    {
        question: "Who is the author of the 'Harry Potter' series?",
        alternatives: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Suzanne Collins"],
        correct: "J.K. Rowling"
    },
    {
        question: "What is the highest mountain in Africa?",
        alternatives: ["Mount Kenya", "Mount Elgon", "Mount Kilimanjaro", "Mount Meru"],
        correct: "Mount Kilimanjaro"
    },
    {
        question: "Which planet has a day longer than its year?",
        alternatives: ["Venus", "Mercury", "Mars", "Jupiter"],
        correct: "Venus"
    },
    {
        question: "What is the most spoken language in the world by number of native speakers?",
        alternatives: ["Spanish", "Mandarin Chinese", "English", "Hindi"],
        correct: "Mandarin Chinese"
    },
    {
        question: "What is the capital of Egypt?",
        alternatives: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correct: "Cairo"
    },
    {
        question: "Which element is used in pencils?",
        alternatives: ["Graphite", "Lead", "Carbon", "Iron"],
        correct: "Graphite"
    },
    {
        question: "Which organ in the human body produces insulin?",
        alternatives: ["Pancreas", "Liver", "Kidneys", "Stomach"],
        correct: "Pancreas"
    },
    {
        question: "What is the largest island in the world?",
        alternatives: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correct: "Greenland"
    },
    {
        question: "Which U.S. president is on the $20 bill?",
        alternatives: ["Andrew Jackson", "Thomas Jefferson", "Abraham Lincoln", "Alexander Hamilton"],
        correct: "Andrew Jackson"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        alternatives: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
        correct: "Jane Austen"
    },
    {
        question: "What is the most common blood type in humans?",
        alternatives: ["O+", "A+", "B+", "AB+"],
        correct: "O+"
    },
    {
        question: "Which vitamin is known as the sunshine vitamin?",
        alternatives: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin E"],
        correct: "Vitamin D"
    },
    {
        question: "Which ancient civilization built the Machu Picchu?",
        alternatives: ["Inca", "Maya", "Aztec", "Olmec"],
        correct: "Inca"
    },
    {
        question: "What is the largest muscle in the human body?",
        alternatives: ["Gluteus Maximus", "Quadriceps", "Pectoralis Major", "Biceps"],
        correct: "Gluteus Maximus"
    },
    {
        question: "Which country is the largest producer of coffee?",
        alternatives: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
        correct: "Brazil"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        alternatives: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        correct: "Nitrogen"
    }
];

module.exports = questions