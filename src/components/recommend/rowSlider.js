import React, { useRef, useEffect, useState } from 'react';
import { Card } from './card';
import '../../assets/css/recommend.css'
import refreshIcon from '../../assets/icons/refresh.png'
import {useSelector} from 'react-redux'

export default function RowSlider(){
  const animalStore = useSelector((state) => state.animal);
  const [items, setItems] = useState([])

  function getData() {
    const data = animalStore.animalAll.data?.content?.data
    if(data) setItems(data.slice(0, 5))
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


  return (<section className="recommend">
    <h2 className="recommend-title">우리아이와 잘 맞으시네요!</h2>
    <div className="sort-button">
        <button className="button">입양자님의 성향과 맞는 아이들이예요</button>
        <button className="button">다른 아이 추천<img src={refreshIcon} alt="" /></button>
    </div>
    <ul className="flex">
      {items.map((item, key) => {
        return (<li className="flex-items" key={key}>
          <Card data={item} />
        </li>)
      })}
    </ul>
  </section>)
}