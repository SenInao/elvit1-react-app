const questions = [
    {
        question: "Hvilken gass absorberer planter fra atmosfæren under fotosyntese?",
        alternatives: ["Nitrogen", "Hydrogen", "Oksygen", "Karbon Dioxid"],
        correct: "Karbon Dioxid"
    },
    {
        question: "Hva er det største pattedyr i verden?",
        alternatives: ["Flodhest", "Elefant", "Blåhval", "Giraff"],
        correct: "Blåhval"
    },
    {
        question: "Hvem utviklet teorien om evolusjon ved naturlig utvalg?",
        alternatives: ["Louis Pasteur", "Albert Einstein", "Charles Darwin", "Gregor Mendel"],
        correct: "Charles Darwin"
    },
    {
        question: "Hvilket metall er flytende ved romtemperatur?",
        alternatives: ["Sølv", "Gull", "Kobber", "Kvikksølv"],
        correct: "Kvikksølv"
    },
    {
        question: "Hva er den mest tallrike gassen i jordens atmosfære?",
        alternatives: ["Oksygen", "Helium", "Nitrogen", "Karbon Dioxid"],
        correct: "Nitrogen"
    },
    {
        question: "Hva er det høyeste fjellet i verden?",
        alternatives: ["Mount Everest", "K2", "Lhotse", "Kangchenjunga"],
        correct: "Mount Everest"
    },
    {
        question: "Hvilket organ i menneskekroppen er ansvarlig for å pumpe blod?",
        alternatives: ["Lever", "Hjerte", "Nyre", "Lunger"],
        correct: "Hjerte"
    },
    {
        question: "Hva er det kjemiske symbolet for gull?",
        alternatives: ["Fe", "Ag", "Au", "Pb"],
        correct: "Au"
    },
    {
        question: "Hvem var den første presidenten i USA?",
        alternatives: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        correct: "George Washington"
    },
    {
        question: "Hvilken planet i vårt solsystem er nærmest solen?",
        alternatives: ["Mars", "Venus", "Merkur", "Jorden"],
        correct: "Merkur"
    },
    {
        question: "Hva er den største ørkenen i verden?",
        alternatives: ["Sahara", "Gobi", "Antarktis", "Arabisk"],
        correct: "Antarktis"
    },
    {
        question: "Hvem oppfant lyspæren?",
        alternatives: ["Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin", "Thomas Edison"],
        correct: "Thomas Edison"
    },
    {
        question: "Hva er den minste planeten i vårt solsystem?",
        alternatives: ["Mars", "Jorden", "Venus", "Merkur"],
        correct: "Merkur"
    },
    {
        question: "Hvilket land ga Statuen av friheten til USA?",
        alternatives: ["Spania", "Tyskland", "Frankrike", "Italia"],
        correct: "Frankrike"
    },
    {
        question: "Hva er valutaen i Storbritannia?",
        alternatives: ["Dollar", "Euro", "Pund Sterling", "Yen"],
        correct: "Pund Sterling"
    },
    {
        question: "Hvilket kontinent er kjent som det mørke kontinent?",
        alternatives: ["Asia", "Australia", "Sør-Amerika", "Afrika"],
        correct: "Afrika"
    },
    {
        question: "Hvem skrev romanen '1984'?",
        alternatives: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"],
        correct: "George Orwell"
    },
    {
        question: "Hva er det største organet i menneskekroppen?",
        alternatives: ["Hjerne", "Hjerte", "Hud", "Lever"],
        correct: "Hud"
    },
    {
        question: "Hva er hovedstaden i Canada?",
        alternatives: ["Montreal", "Ottawa", "Vancouver", "Toronto"],
        correct: "Ottawa"
    },
    {
        question: "Hvilken planet er kjent som Morgenstjernen?",
        alternatives: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: "Venus"
    },
    {
        question: "Hva er den lengste beinet i menneskekroppen?",
        alternatives: ["Tibia", "Femur", "Humerus", "Fibula"],
        correct: "Femur"
    },
    {
        question: "Hvem var den første kvinnelige statsministeren i Storbritannia?",
        alternatives: ["Theresa May", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"],
        correct: "Margaret Thatcher"
    },
    {
        question: "Hvilket hav er det minste etter overflateareal?",
        alternatives: ["Indiske hav", "Arktiske hav", "Sørlige hav", "Atlanterhavet"],
        correct: "Arktiske hav"
    },
    {
        question: "Hva er det mest folkerike landet i verden?",
        alternatives: ["Kina", "India", "USA", "Indonesia"],
        correct: "Kina"
    },
    {
        question: "Hvilket element er kjent som livets byggestein?",
        alternatives: ["Hydrogen", "Oksygen", "Karbon", "Nitrogen"],
        correct: "Karbon"
    },
    {
        question: "Hvilken kunstner er kjent for å male taket i det sixtinske kapell?",
        alternatives: ["Donatello", "Michelangelo", "Leonardo da Vinci", "Raphael"],
        correct: "Michelangelo"
    },
    {
        question: "Hva er det hardeste mineralet på Mohs skala?",
        alternatives: ["Korund", "Diamant", "Kvarts", "Topas"],
        correct: "Diamant"
    },
    {
        question: "Hvilket land er hjem til Great Barrier Reef?",
        alternatives: ["Australia", "Brasil", "Sør-Afrika", "Indonesia"],
        correct: "Australia"
    },
    {
        question: "Hva er det viktigste språket som snakkes i Argentina?",
        alternatives: ["Fransk", "Italiensk", "Spansk", "Portugisisk"],
        correct: "Spansk"
    },
    {
        question: "Hvem er kjent som far til moderne fysikk?",
        alternatives: ["Niels Bohr", "Albert Einstein", "Galileo Galilei", "Isaac Newton"],
        correct: "Albert Einstein"
    },
    {
        question: "Hva er kokepunktet for vann i Celsius?",
        alternatives: ["100°C", "0°C", "200°C", "50°C"],
        correct: "100°C"
    },
    {
        question: "Hvilken planet har flest måner?",
        alternatives: ["Neptun", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    {
        question: "Hvilket land har flest UNESCOs verdensarvsteder?",
        alternatives: ["Spania", "Italia", "Kina", "Frankrike"],
        correct: "Italia"
    },
    {
        question: "Hva er den kjemiske formelen for bordsalt?",
        alternatives: ["KCl", "NaCl", "CO2", "H2O"],
        correct: "NaCl"
    },
    {
        question: "Hvem var den første kvinnen som vant en Nobelpris?",
        alternatives: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Dorothy Hodgkin"],
        correct: "Marie Curie"
    },
    {
        question: "Hvilken amerikansk stat er kjent som 'Solskinnsstaten'?",
        alternatives: ["Texas", "Arizona", "Florida", "California"],
        correct: "Florida"
    },
    {
        question: "Hvem er forfatteren av 'Harry Potter'-serien?",
        alternatives: ["J.R.R. Tolkien", "J.K. Rowling", "Suzanne Collins", "George R.R. Martin"],
        correct: "J.K. Rowling"
    },
    {
        question: "Hva er det høyeste fjellet i Afrika?",
        alternatives: ["Mount Kilimanjaro", "Mount Meru", "Mount Kenya", "Mount Elgon"],
        correct: "Mount Kilimanjaro"
    },
    {
        question: "Hvilken planet har en dag som er lengre enn året?",
        alternatives: ["Jupiter", "Mars", "Merkur", "Venus"],
        correct: "Venus"
    },
    {
        question: "Hva er det mest talte språket i verden etter antall morsmål?",
        alternatives: ["Hindi", "Mandarin-kinesisk", "Spansk", "Engelsk"],
        correct: "Mandarin-kinesisk"
    },
    {
        question: "Hva er hovedstaden i Egypt?",
        alternatives: ["Giza", "Kairo", "Luxor", "Alexandria"],
        correct: "Kairo"
    },
        {
        question: "Hvilket element brukes i blyanter?",
        alternatives: ["Jern", "Bly", "Grafitt", "Karbon"],
        correct: "Grafitt"
    },
    {
        question: "Hvilket organ i menneskekroppen produserer insulin?",
        alternatives: ["Mage", "Bukspyttkjertel", "Lever", "Nyre"],
        correct: "Bukspyttkjertel"
    },
    {
        question: "Hva er den største øya i verden?",
        alternatives: ["Ny-Guinea", "Grønland", "Madagaskar", "Borneo"],
        correct: "Grønland"
    },
    {
        question: "Hvilken amerikansk president er på $20-seddelen?",
        alternatives: ["Alexander Hamilton", "Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson"],
        correct: "Andrew Jackson"
    },
    {
        question: "Hvem skrev 'Stolthet og fordom'?",
        alternatives: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Bill Gates"],
        correct: "Jane Austen"
    }
];

module.exports = questions