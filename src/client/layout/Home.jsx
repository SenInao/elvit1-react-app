import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Home.style.scss"

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="Home">
      <h1>My Projects</h1>
      <a onClick={() => navigate("/quiz")}>Take Quiz</a>
    </div>
  );
};

export default Home;
