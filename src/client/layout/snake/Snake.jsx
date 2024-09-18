import {useRef, useEffect} from "react"
import Game from "./script.js"
import "./style.scss"

const Snake = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const game = new Game(canvasRef.current)
    }, [])

    return (
        <div className="Snake">
            <h1>Snake</h1>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Snake