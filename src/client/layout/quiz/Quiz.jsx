import Question from "../../components/question/Question"
import WS from "../../ws/WS"
import "./Quiz.style.scss"
import {useEffect, useState} from "react"

const Quiz = () => {
    const [question, setQuestion] = useState()
    const [ws, setWs] = useState(null)

    useEffect(() => {
        const websock = new WS(setQuestion)
        setWs(websock)
    }, [])


    if (!question) {
        return (
            <div className="Quiz">
                <h1>Loading Questions</h1>
            </div>
        )
    }

    return (
        <div className="Quiz">
            <Question question = {question} ws = {ws}/>
        </div>
    )
}

export default Quiz