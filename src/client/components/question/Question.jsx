import {useState, useRef} from "react"
import "./Question.style.scss"

const Question = ({question, ws}) => {
    const [correct, setCorrect] = useState(null)
    const alt1 = useRef()
    const alt2 = useRef()
    const alt3 = useRef()
    const alt4 = useRef()

    const buttons = [alt1, alt2, alt3, alt4]

    function buttonClick(alt) {
        if (correct === null) {
            ws.checkIfCorrect(question.question, alt, setCorrect, buttons)
        }
    }

    return (
        <div className="Question">
            <h1>{question.question}</h1>
            <div className="Alternatives">
                <button ref={alt1} className="oval-button" onClick={() => {buttonClick(question.alternatives[0])}}>{question.alternatives[0]}</button>
                <button ref={alt2} className="oval-button" onClick={() => {buttonClick(question.alternatives[1])}}>{question.alternatives[1]}</button>
                <button ref={alt3} className="oval-button" onClick={() => {buttonClick(question.alternatives[2])}}>{question.alternatives[2]}</button>
                <button ref={alt4} className="oval-button" onClick={() => {buttonClick(question.alternatives[3])}}>{question.alternatives[3]}</button>
            </div>
            {correct !== null ? (
                <div>
                    <button className="oval-button" onClick={() => (ws.nextQuestion(setCorrect, buttons))}>Next</button>
                </div>
            ) : null}
        </div>
    )
}

export default Question