import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Home.style.scss"

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="Home">
      <h1>Mine prosjekter</h1>
      <a onClick={() => navigate("/quiz")}>Ta Quiz</a>
      <a onClick={() => navigate("/snake")}>Snake</a>
      <a href="https://skole.senharald.com">Facebook clone</a>
    </div>
  );
};

export default Home;
