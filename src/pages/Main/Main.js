import React, { useEffect } from 'react';
import { Advertisement } from '../../components/Main/advertisement';
import List from '../../components/moreRecommend/List';
import RowSlider from '../../components/recommend/rowSlider';
import { animalAll } from '../../services/api/animal';
export  function Main() {
  let items = []
  let items2 = []

    animalAll(0, 15).then(async (data)=>{
      const [...value] = data.content.data
       for(let i=0;i<15;i++){
         items2.push(value[i])
         items.push(value[i])
      }
    })

    useEffect(() => {

    }, [])

  return <div><Advertisement /><RowSlider data={items}/><List data={items2} /></div>
}