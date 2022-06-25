import React, {useEffect, useState} from 'react'
import '../../assets/css/recommend.css'
import photo from '../../img/julian-hochgesang-o7rKj7Cke9w-unsplash.jpg' 

export function Card(res) {
  const val = res.data
  const [hover, setHover] = useState(true)
  
  return (
    <>
      <div className={`flex-ress-cover`}>
        <img src={photo} alt="아이 사진"/>
      </div>
      <div className={`recommend-info`}>
        <h3 className="title">앞으로 {val.day}일 남았어요</h3>
        <p>{val.name} ({val.gender})/{val.age}살</p>
        <p>{val.carehouse}</p>
      </div>
    </>
  )
}