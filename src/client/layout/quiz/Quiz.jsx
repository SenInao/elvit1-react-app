import Question from "../../components/question/Question"
import { CiCircleQuestion } from "react-icons/ci";
import { FaHeartBroken } from "react-icons/fa";
import WS from "../../ws/WS"
import "./Quiz.style.scss"
import {useEffect, useState} from "react"

const Quiz = () => {
    const [question, setQuestion] = useState()
    const [questionIndex, setIndex] = useState(0)
    const [life, setLife] = useState(3)
    const [ws, setWs] = useState(null)

    useEffect(() => {
        const websock = new WS(setQuestion, setIndex, life, setLife)
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
            <div className="quiz-container">
                <div className="info">
                    <div className="q-label">
                        <CiCircleQuestion />
                        <label>{questionIndex}/10</label>
                    </div>
                    <div className="l-label">
                        <FaHeartBroken/>
                        <label>{life}</label>
                    </div>
                </div>
                <Question question = {question} ws = {ws}/>
            </div>
        </div>
    )
}

export default Quiz