import React, { useRef, useEffect, useState } from 'react';
import Grid from './grid';
import '../../assets/css/moreRecommend.css'

export default function List(res){
    const [items, setItems] = useState(res.data)
    console.log(items)

    return (
        <section className="more-recommend">
                <h2 className="more-recommend-title">다른 아이들도 있어요!</h2>
                <div className="sort-button">
                    <button className="button">오늘 들어온 아이</button>
                    <button className="button">보호소 터줏대감</button>
                </div>
                <ul className="grid">
                    {items.map((item, key)=>{
                        return (
                            <li className="grid-items" key={key}>
                                <Grid item={item} stat={false} />
                            </li>
                        )
                    })}
                </ul>
            </section>
    )
}