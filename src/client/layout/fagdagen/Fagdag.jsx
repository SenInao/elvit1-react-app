import "./Fagdag.scss"
import {useState, useRef, useEffect} from "react"
import image from './Fagdag.jpg'

const Fagdag = () => {
    const [poeng, setPoeng] = useState(0)

    useEffect(() => {
        let querry = window.location.search
        let urlParams = new URLSearchParams(querry)
        let poengUrl = Number(urlParams.get("poeng"))
        if (poengUrl === null) {
            setPoeng(0)
        } else {
            setPoeng(poengUrl)
        }
    }, [])

    const [answered, setAnswered] = useState(false)
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()

    const click = (ref, num) => {
        if (answered) return;

        ref1.current.style.background = "green"

        if (num !== 1) {
            ref.current.style.background = "var(--color2)"
        } else {
            setPoeng(poeng+ 1)
            localStorage.setItem("elvit1blokkafagdagen",poeng)
        }

        setAnswered(true)
    }

    return (
        <div className="Fagdag">
            <h3>Poeng: {poeng}</h3>
            <h1>Hvor på elvebakken er dette?</h1>
            <img src={image} alt="Bilde av elvebakken"/>
            <div>
                <button ref={ref1} className="oval-button" onClick={() => {click(ref1, 1)}}>U1</button>
                <button ref={ref2} className="oval-button" onClick={() => {click(ref2, 2)}}>1.etg</button>
                <button ref={ref3} className="oval-button" onClick={() => {click(ref3, 3)}}>2.etg</button>
                <button ref={ref4} className="oval-button" onClick={() => {click(ref4, 4)}}>Utenfor skolen</button>
            </div>
            {answered ? <button className="oval-button" id="nesteSide" onClick={() => {window.location = "https://elvit1-blokka-63.w3spaces.com/fagdagen/index.html?poeng="+poeng}}>Gå til neste side</button> : null}
        </div>
    )
}

export default Fagdag