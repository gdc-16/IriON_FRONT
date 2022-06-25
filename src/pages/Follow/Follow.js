import React, { useRef, useEffect, useState } from 'react';
import Grid from '../../components/moreRecommend/grid';
import '../../assets/css/moreRecommend.css'

export function Follow(){
    const items = [{day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'},{day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}]

    return (
        <section className="more-recommend">
                <h2 className="more-recommend-title">더 보고 싶은 아이들 목록</h2>
                <div className="sort-button">
                    <button className="button">산책을 한번 같이 해보시는 건 어떠세요?</button>
                    <button className="button"></button>
                </div>
                <ul className="grid">
                    {items.map((item, key)=>{
                        return (
                            <li className="grid-items" key={key}>
                                <Grid data={item} stat={true} />
                            </li>
                        )
                    })}
                </ul>
            </section>
    )
}