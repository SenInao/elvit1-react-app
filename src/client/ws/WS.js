class WS {
    constructor(setQuestion, setIndex, life, setLife) {
        this.connect()
        this.life = life
        this.setLife = setLife
        this.setIndex = setIndex
        this.setQuestion = setQuestion
        this.callback = null
        this.questions
        this.questionIndex = 0
    }

    connect() {
        this.ws = new WebSocket(`wss://${window.location.hostname}`)
        this.ws.onopen = () => {
            console.log("ws connected")
        }
        this.ws.onerror = () => {
            console.log("an error accured")
        }
        this.ws.onclose = () => {
            console.log("ws closing")
        }
        this.ws.onmessage = (msg) => {
            const data = JSON.parse(msg.data)
            if (!this.callback) {
                this.questions = data
                console.log(this.questions)
                this.setQuestion(data[this.questionIndex])
            } else {
                this.callback(data)
            }
        }
    }

    checkIfCorrect(question, answer, setCorrect, buttons) {
        this.callback = (data) => {
            if (answer === data.correct) {
                setCorrect(true)
            } else {
                this.life--
                this.setLife(this.life)
                setCorrect(false)
            }


            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].current.innerText === answer && answer !== data.correct) {
                    buttons[i].current.style.background = "var(--color2)"
                }

                if (data.correct === buttons[i].current.innerText) {
                    buttons[i].current.style.background = "green"
                }
            }
        }
        const payload = {
            question: question,
            answer: answer
        }
        this.ws.send(JSON.stringify(payload))
    }

    nextQuestion(setCorrect, buttons) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].current.style.background = "var(--color3)"
        }

        this.questionIndex++;
        this.setIndex(this.questionIndex)
        this.setQuestion(this.questions[this.questionIndex])
        setCorrect(null)
    }
}

export default WS