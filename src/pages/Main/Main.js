import React, { useEffect } from 'react';
import { Advertisement } from '../../components/Main/advertisement';
import List from '../../components/moreRecommend/List';
import RowSlider from '../../components/recommend/rowSlider';
import { animalAll } from '../../services/api/animal';
export  function Main() {
  let items = []
  let items2 = []

    animalAll(0, 15).then((data)=>{
      const value = data.content.data
      
      for(let i=0;i<5;i++){
        items.push(value[i])
      }

      for(let i=5;i<15;i++){
        items2.push(value[i])
      }
    })


  return <div><Advertisement /><RowSlider data={items}/><List data={items2} /></div>
}