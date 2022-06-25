import React from "react";
import '../../assets/css/moreRecommend.css'
import photo from "../../img/syed-ahmad-7WBU6_iv-iU-unsplash.jpg"

export default function Grid(res) {
    const val = res.data

    return (
        <><div className="grid-items-cover">
            <img src={photo} alt="추가 유기견" />
        </div><div className="grid-items-info">
                <span>하트</span>
                <h3 className="title">앞으로 {val.day}일 남았어요</h3>
                <p>{val.name} ({val.gender})/{val.age}살</p>
                <p>{val.carehouse}</p>
            </div></>
    )
}