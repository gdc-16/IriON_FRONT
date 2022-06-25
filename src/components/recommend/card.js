import React, {useEffect, useState} from 'react'
import '../../assets/css/recommend.css'
import photo from '../../img/julian-hochgesang-o7rKj7Cke9w-unsplash.jpg' 

export function Card(res) {
  const val = res.data
  const [hover, setHover] = useState(false)
  const [width, setWidth] = useState("285px")
  const [height, setHeight] = useState("301px")

  useEffect(() => {
    if(hover) {
        setWidth("361px")
        setHeight("381px")
    } else {
        setWidth("285px")
        setHeight("301px")
    }
  }, [hover])

  return (
    <>
      <div className={`flex-ress-cover`}>
        <img src={photo} alt="아이 사진" onMouseEnter={() => {
            setHover(true)
        }} onMouseLeave={() => {
            setHover(false)
        }}/>
      </div>
      <div className="recommend-info">
        <h3 className="title">앞으로 {val.day}일 남았어요</h3>
        <p>{val.name} ({val.gender})/{val.age}살</p>
        <p>{val.carehouse}</p>
      </div>
    </>
  )
}