import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/quizQuestion.css'

export function CatQuiz3() {
    return (<div style={{backgroundColor: "#ffd8d3", height: "800px"}} ><section className="quiz-list">
    <h2 className="title">Q3. 고양이는 개보다 관절염이 덜하다?</h2>
    <div className="progress-bar3"></div>
    <div className="list-box">
        <p>1. 예</p>
        <p><Link to="/quiz/cat/detail4" style={{textDecoration: "none", color: 'black'}}>2. 아니오</Link></p>
    </div>
</section></div>)
}