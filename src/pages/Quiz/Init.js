import React from "react";
import '../../assets/css/quiz.css'
import { Link } from "react-router-dom";

export function Init() {
    return (<section className="choice">
    <h2 className="title">우리아이를 선택해 주세요</h2>
    <div className="choice-button">
        <Link to="/quiz/cat">
        <button type="button">
            <div className="choice-button-cover cat">
                <img src="../img/daria-nepriakhina-7LAwrQ6tM7Y-unsplash.jpg" alt="" />
            </div>
            <p>냥이</p>
        </button></Link>
        <Link to="/quiz/dog">
        <button type="button">
            <div className="choice-button-cover">
                <img src="../img/matt-zhang-Pn5MqNEgg74-unsplash.jpg" alt="" />
            </div>
            <p>댕이</p>
        </button></Link>
    </div>
</section>)
}