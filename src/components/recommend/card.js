import React, {useEffect, useState} from 'react'
import '../../assets/css/recommend.css'
import photo from '../../img/julian-hochgesang-o7rKj7Cke9w-unsplash.jpg' 

export function Card(res) {
  const val = res.data
  const [hover, setHover] = useState(true)
  
  return (
    <>
      <div className={`flex-ress-cover`}>
        <img src={val.Animal.animal_image_url} alt="아이 사진"/>
      </div>
      <div className={`recommend-info`}>
        <h3 className="title">앞으로 {val.Animal.left_day}일 남았어요</h3>
        <p>{val.Animal.name} ({val.Animal.gender})/{val.Animal.age}살</p>
        <p>{val.Shelter.shelter_name}</p>
      </div>
    </>
  )
}