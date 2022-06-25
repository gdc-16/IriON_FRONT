import React from 'react';
import '../../assets/css/advertisement.css'
import Image from '../../assets/ad.jpeg'

export function Advertisement() {
  return <div className="advertise_area">
    <img src={Image} alt="" className='image'/>
  </div>
}