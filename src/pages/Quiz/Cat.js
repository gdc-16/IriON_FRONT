import React from "react";
import '../../assets/css/quizDetail.css'
import seven from '../../assets/icons/ach_seven.png'
import fifty from '../../assets/icons/ach_fifty.png'
import ten from '../../assets/icons/ach_ten.png'
import zero from '../../assets/icons/ach_zero.png'
import { Link } from "react-router-dom";

export function Cat() {
    return (<div style={{backgroundColor: "#ffd8d3", height: "800px"}} ><section className="achievement">
    <h2 className="ir">달성률</h2>
    <ul className="flex">
        <li className="flex-items">
            <h3>배식방법 1</h3>
            <img src={seven} alt="" />
            <p>70% 달성</p>
        </li>
        <li className="flex-items">
            <h3>배식방법 2</h3>
            <img src={fifty} alt="" />
            <p className="progress50">50% 달성</p>
        </li>
        <li className="flex-items">
            <h3>놀이방법 1</h3>
            <img src={ten} alt="" />
            <p className="progress10">10% 달성</p>
        </li>
       
        <li className="flex-items">
            <h3>놀이방법 2</h3>
            <Link to="/quiz/cat/detail1"><img src={zero} alt="" /></Link>
            <p className="progress0">0% 달성</p>
        </li>
    </ul>
</section></div>)
}