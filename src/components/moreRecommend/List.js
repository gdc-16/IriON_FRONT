import React, { useEffect, useState } from 'react';
import Grid from './grid';
import '../../assets/css/moreRecommend.css'
import {useSelector} from 'react-redux'

export default function List(){
    const animalStore = useSelector((state) => state.animal);
    const [items, setItems] = useState([])

    function getData() {
        const data = animalStore.animalAll.data?.content?.data
        if(data) setItems(data)
    }

    useEffect(() => {
        function timer() {
            setTimeout(getData, 100)
        }
        if(animalStore.animalAll.data) {
            timer();
            return () => clearTimeout(timer);
        }
    }, [animalStore.animalAll])

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
                                <Grid data={item} stat={false} />
                            </li>
                        )
                    })}
                </ul>
            </section>
    )
}