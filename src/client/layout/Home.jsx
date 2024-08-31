import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Home.style.scss"

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="Home">
      <h1>Common knowledge quiz</h1>
      <button className="oval-button" onClick={() => {navigate("/quiz")}}>start</button>
    </div>
  );
};

export default Home;
