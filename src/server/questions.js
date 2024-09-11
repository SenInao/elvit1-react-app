const questions = [
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        alternatives : ["Nitrogen", "Hydrogen", "Oxygen", "Carbon Dioxide"],
        correct : "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        alternatives : ["Hippopotamus", "Elephant", "Blue Whale", "Giraffe"],
        correct : "Blue Whale"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        alternatives : ["Louis Pasteur", "Albert Einstein", "Charles Darwin", "Gregor Mendel"],
        correct : "Charles Darwin"
    },
    {
        question: "Which metal is liquid at room temperature?",
        alternatives : ["Silver", "Gold", "Copper", "Mercury"],
        correct : "Mercury"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        alternatives : ["Oxygen", "Helium", "Nitrogen", "Carbon Dioxide"],
        correct : "Nitrogen"
    },
    {
        question: "What is the tallest mountain in the world?",
        alternatives : ["Mount Everest", "K2", "Lhotse", "Kangchenjunga"],
        correct : "Mount Everest"
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        alternatives : ["Liver", "Heart", "Kidney", "Lungs"],
        correct : "Heart"
    },
    {
        question: "What is the chemical symbol for gold?",
        alternatives : ["Fe", "Ag", "Au", "Pb"],
        correct : "Au"
    },
    {
        question: "Who was the first President of the United States?",
        alternatives : ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        correct : "George Washington"
    },
    {
        question: "Which planet in our solar system is closest to the Sun?",
        alternatives : ["Mars", "Venus", "Mercury", "Earth"],
        correct : "Mercury"
    },
    {
        question: "What is the largest desert in the world?",
        alternatives : ["Sahara", "Gobi", "Antarctica", "Arabian"],
        correct : "Antarctica"
    },
    {
        question: "Who invented the light bulb?",
        alternatives : ["Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin", "Thomas Edison"],
        correct : "Thomas Edison"
    },
    {
        question: "What is the smallest planet in our solar system?",
        alternatives : ["Mars", "Earth", "Venus", "Mercury"],
        correct : "Mercury"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        alternatives : ["Spain", "Germany", "France", "Italy"],
        correct : "France"
    },
    {
        question: "What is the currency of the United Kingdom?",
        alternatives : ["Dollar", "Euro", "Pound Sterling", "Yen"],
        correct : "Pound Sterling"
    },
    {
        question: "Which continent is known as the Dark Continent?",
        alternatives : ["Asia", "Australia", "South America", "Africa"],
        correct : "Africa"
    },
    {
        question: "Who wrote the novel '1984'?",
        alternatives : ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"],
        correct : "George Orwell"
    },
    {
        question: "What is the largest organ in the human body?",
        alternatives : ["Brain", "Heart", "Skin", "Liver"],
        correct : "Skin"
    },
    {
        question: "What is the capital city of Canada?",
        alternatives : ["Montreal", "Ottawa", "Vancouver", "Toronto"],
        correct : "Ottawa"
    },
    {
        question: "Which planet is known as the Morning Star?",
        alternatives : ["Venus", "Mars", "Jupiter", "Saturn"],
        correct : "Venus"
    },
    {
        question: "What is the longest bone in the human body?",
        alternatives : ["Tibia", "Femur", "Humerus", "Fibula"],
        correct : "Femur"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        alternatives : ["Theresa May", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"],
        correct : "Margaret Thatcher"
    },
    {
        question: "Which ocean is the smallest by surface area?",
        alternatives : ["Indian Ocean", "Arctic Ocean", "Southern Ocean", "Atlantic Ocean"],
        correct : "Arctic Ocean"
    },
    {
        question: "What is the most populous country in the world?",
        alternatives : ["China", "India", "United States", "Indonesia"],
        correct : "China"
    },
    {
        question: "Which element is known as the building block of life?",
        alternatives : ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        correct : "Carbon"
    },
    {
        question: "Which artist is known for painting the ceiling of the Sistine Chapel?",
        alternatives : ["Donatello", "Michelangelo", "Leonardo da Vinci", "Raphael"],
        correct : "Michelangelo"
    },
    {
        question: "What is the hardest mineral on the Mohs scale?",
        alternatives : ["Corundum", "Diamond", "Quartz", "Topaz"],
        correct : "Diamond"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        alternatives : ["Australia", "Brazil", "South Africa", "Indonesia"],
        correct : "Australia"
    },
    {
        question: "What is the main language spoken in Argentina?",
        alternatives : ["French", "Italian", "Spanish", "Portuguese"],
        correct : "Spanish"
    },
    {
        question: "Who is known as the father of modern physics?",
        alternatives : ["Niels Bohr", "Albert Einstein", "Galileo Galilei", "Isaac Newton"],
        correct : "Albert Einstein"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        alternatives : ["100°C", "0°C", "200°C", "50°C"],
        correct : "100°C"
    },
    {
        question: "Which planet has the most moons?",
        alternatives : ["Neptune", "Mars", "Jupiter", "Saturn"],
        correct : "Jupiter"
    },
    {
        question: "Which country has the most UNESCO World Heritage Sites?",
        alternatives: ["Spain", "Italy", "China", "France"],
        correct : "Italy"
    },
    {
        question: "What is the chemical formula for table salt?",
        alternatives: ["KCl", "NaCl", "CO2", "H2O"],
        correct: "NaCl"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        alternatives: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Dorothy Hodgkin"],
        correct: "Marie Curie"
    },
    {
        question: "Which U.S. state is known as the 'Sunshine State'?",
        alternatives: ["Texas", "Arizona", "Florida", "California"],
        correct: "Florida"
    },
    {
        question: "Who is the author of the 'Harry Potter' series?",
        alternatives: ["J.R.R. Tolkien", "J.K. Rowling", "Suzanne Collins", "George R.R. Martin"],
        correct : "J.K. Rowling"
    },
    {
        question: "What is the highest mountain in Africa?",
        alternatives: ["Mount Kilimanjaro", "Mount Meru", "Mount Kenya", "Mount Elgon"],
        correct : "Mount Kilimanjaro"
    },
    {
        question: "Which planet has a day longer than its year?",
        alternatives: ["Jupiter", "Mars", "Mercury", "Venus"],
        correct : "Venus"
    },
    {
        question: "What is the most spoken language in the world by number of native speakers?",
        alternatives: ["Hindi", "Mandarin Chinese", "Spanish", "English"],
        correct : "Mandarin Chinese"
    },
    {
        question: "What is the capital of Egypt?",
        alternatives: ["Giza", "Cairo", "Luxor", "Alexandria"],
        correct : "Cairo"
    },
    {
        question: "Which element is used in pencils?",
        alternatives : ["Iron", "Lead", "Graphite", "Carbon"],
        correct : "Graphite"
    },
    {
        question: "Which organ in the human body produces insulin?",
        alternatives: ["Stomach", "Pancreas", "Liver", "Kidneys"],
        correct : "Pancreas"
    },
    {
        question: "What is the largest island in the world?",
        alternatives: ["New Guinea", "Greenland", "Madagascar", "Borneo"],
        correct : "Greenland"
    },
    {
        question: "Which U.S. president is on the $20 bill?",
        alternatives: ["Alexander Hamilton", "Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson"],
        correct: "Andrew Jackson"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        alternatives: ["Emily Brontë", "Jane Austen", "Charlotte Brontë"],
        correct: "Jane Austen",
    }
];

module.exports = questions