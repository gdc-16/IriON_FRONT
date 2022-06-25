import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/quizQuestion.css'

export function CatQuiz4() {
    return (<div style={{backgroundColor: "#ffd8d3", height: "800px"}} ><section className="quiz-list">
    <h2 className="title">Q4. 살찐 고양이가 굶어서 살을 빼면 건강해진다?</h2>
    <div className="progress-bar4"></div>
    <div className="list-box">
        <p>1. 예</p>
        <p><Link to="/quiz/cat/result/ok" style={{textDecoration: "none", color: 'black'}}>2. 아니오</Link></p>
    </div>
</section></div>)
}