import React from "react";
import '../../assets/css/quiz.css'
import { Link } from "react-router-dom";
import Cat from '../../assets/cat.png'
import Dog from '../../assets/dog.png'

export function Init() {
    return (<section className="choice">
    <h2 className="title">우리아이를 선택해 주세요</h2>
    <div className="choice-button">
        <Link to="/quiz/cat">
        <button type="button">
            <div className="choice-button-cover cat">
                <img src={Cat} alt="" />
            </div>
            <p>냥이</p>
        </button></Link>
        <Link to="/quiz/dog">
        <button type="button">
            <div className="choice-button-cover">
                <img src={Dog} alt="" />
            </div>
            <p>댕이</p>
        </button></Link>
    </div>
</section>)
}