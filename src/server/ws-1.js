const {WebSocketServer} = require("ws")
const questions = require("./questions")

class WS {
    constructor() {
        this.port = process.env.PORT || 3000
        this.createServer()
        this.connections = []
    }

    createServer() {
        this.po
        this.wss = new WebSocketServer({port: this.port})
        console.log(`Created wss on port ${this.port}`)
        this.wss.on("connection", (ws) => {
            console.log("user connected")
            this.connections.push(ws)
            const questionSet = this.getRandomQuestionSet()
            ws.send(JSON.stringify(questionSet))

            ws.on("message", (data) => {
                this.messageHandler(JSON.parse(data), ws)
            })

            ws.on("close", () => {
                this.removeConnection(ws)
            })

            ws.on("error", () => {
                this.removeConnection(ws)
            })
        })
    }

    getRandomQuestionSet() {
        const questionSet = []
        const questionsToUse = JSON.parse(JSON.stringify(questions))
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * questionsToUse.length)
            const q = questionsToUse[index]
            questionsToUse.splice(index, 1)
            delete q.correct
            questionSet.push(q)
        }
        return questionSet
    }

    messageHandler(data, ws) {
        for (let i = 0; i < questions.length; i++) {
            if (data.question === questions[i].question) {
                ws.send(JSON.stringify({correct: questions[i].correct}))
                break
            }
        } 
    }

    removeConnection(ws) {
        const i = this.connections.indexOf(ws)
        if (i !== -1) {
            this.connections.splice(i, 0)
        }
    }
}

module.exports = WS