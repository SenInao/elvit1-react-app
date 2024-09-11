import Question from "../../components/question/Question"
import { CiCircleQuestion } from "react-icons/ci";
import { FaHeartBroken } from "react-icons/fa";
import WS from "../../ws/WS"
import "./Quiz.style.scss"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

const Quiz = () => {
    const [question, setQuestion] = useState()
    const [questionIndex, setIndex] = useState(0)
    const [life, setLife] = useState(3)
    const [ws, setWs] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const websock = new WS(setQuestion, setIndex, life, setLife)
        setWs(websock)
    }, [])

    const endText = (text) => {
        return (
            <div className="Quiz">
                <h1>{text}</h1>
                <div className="q-label">
                    <CiCircleQuestion />
                    <label>{questionIndex}/10</label>
                </div>
                <div className="l-label">
                    <FaHeartBroken/>
                    <label>{life}</label>
                </div>
                <button className="oval-button" onClick={() => {navigate("/")}}>Back</button>
            </div>
        )
    }

    if (questionIndex >= 10) {
        return (
            endText("You Survived!")
        )
    }

    if (life <= 0) {
        return (
            endText("You Died!")
        )
    }

    if (!question) {
        return (
            <div className="Quiz">
                <h1>Loading Questions</h1>
            </div>
        )
    }

    if(ws.ws.readyState !== 1) {
        navigate("/")
    }

    return (
        <div className="Quiz">
            <div className="quiz-container">
                <div className="info">
                    <div className="q-label">
                        <CiCircleQuestion size={45}/>
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