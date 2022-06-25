import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/quizQuestion.css'

export function CatQuiz1() {
    return (<div style={{backgroundColor: "#ffd8d3", height: "800px"}} ><section className="quiz-list">
    <h2 className="title">Q1. 고양이도 양치가 필요한가요?</h2>
    <div className="progress-bar"></div>
    <div className="list-box">
        <p><Link to="/quiz/cat/detail2" style={{textDecoration: "none", color: 'black'}}>1. 예</Link></p>
        <p>2. 아니오</p>
    </div>
</section></div>)
}