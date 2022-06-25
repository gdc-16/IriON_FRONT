import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/quizQuestion.css'

export function CatQuiz2() {
    return (<div style={{backgroundColor: "#ffd8d3", height: "800px"}} ><section className="quiz-list">
    <h2 className="title">Q2. 고양이는 높은 곳에서 떨어져도 다치지 않는다?</h2>
    <div className="progress-bar2"></div>
    <div className="list-box">
    <p><Link to="/quiz/cat/detail3" style={{textDecoration: "none", color: 'black'}}>1. 예</Link></p>
        <p>2. 아니오</p>
    </div>
</section></div>)
}