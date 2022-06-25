import React, { useRef, useEffect, useState } from 'react';
import Grid from '../../components/moreRecommend/grid';
import '../../assets/css/moreRecommend.css'
import { animalAll } from '../../services/api/animal';


export function Follow(){
    let items = new Array(10)

    const get = () => animalAll(0, 15).then((data)=>{
        const value = data.content.data
        
        for(let i=5;i<15;i++){
          items[i-5] = (value[i])
        }
        console.log(items[0])

      })

    Promise.all([get()])

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