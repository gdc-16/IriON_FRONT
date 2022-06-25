import React, { useRef, useEffect, useState } from 'react';
import useWindowWidth from '../../utils/useWindowWidth'
import { Card } from './card';
import '../../assets/css/recommend.css'

function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default function RowSlider(res){
  const windowWidth = useWindowWidth()
  //   const items = res.data
  const items = [{day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}, {day: 6, name: '치와와', age: 3, gender:'여', carehouse: '서양보호소'}]
  const itemSize = items.length
  const sliderPadding = 40
  const sliderPaddingStyle = `0 ${sliderPadding}px`
  const newItemWidth = getNewItemWidth()
  const transitionTime = 1000
  const transitionStyle = `transform ${transitionTime}ms ease 0s`
  const 양끝에_추가될_데이터수 = 5
  const [currentIndex, setCurrentIndex] = useState(양끝에_추가될_데이터수)
  const [slideTransition, setTransition] = useState(transitionStyle)
  const [isSwiping, setIsSwiping] = useState(false)
  const [slideX, setSlideX] = useState(null)
  const [prevSlideX, setPrevSlideX] = useState(false)
  let isResizing = useRef(false)

  let slides = setSlides()
  function setSlides() {
    let addedFront = []
    let addedLast = []
    var index = 0
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(items[index % items.length])
      addedFront.unshift(items[items.length - 1 - (index % items.length)])
      index++
    }
    return [...addedFront, ...items, ...addedLast]
  }

  function getNewItemWidth() {
    let itemWidth = windowWidth * 0.2 - sliderPadding * 2
    itemWidth = itemWidth > 1060 ? 1060 : itemWidth
    return itemWidth
  }

  useEffect(() => {
    isResizing.current = true
    setIsSwiping(true)
    setTransition('')
    setTimeout(() => {
      isResizing.current = false
      if (!isResizing.current) setIsSwiping(false)
    }, 1000)
  }, [windowWidth])

  useInterval(
    () => {
      handleSlide(currentIndex + 1)
    },
    !isSwiping && !prevSlideX ? 2000 : null
  )

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('')
      setCurrentIndex(index)
    }, transitionTime)
  }

  function handleSlide(index) {
    setCurrentIndex(index)
    if (index - 양끝에_추가될_데이터수 < 0) {
      index += itemSize
      replaceSlide(index)
    } else if (index - 양끝에_추가될_데이터수 >= itemSize) {
      index -= itemSize
      replaceSlide(index)
    }
    setTransition(transitionStyle)
  }

  function handleSwipe(direction) {
    setIsSwiping(true)
    handleSlide(currentIndex + direction)
  }


  function getClientX(event) {
    return event._reactName === 'onTouchStart'
      ? event.touches[0].clientX
      : event._reactName === 'onTouchMove' || event._reactName === 'onTouchEnd'
        ? event.changedTouches[0].clientX
        : event.clientX
  }

  function handleTouchStart(e) {
    setPrevSlideX((prevSlideX) => getClientX(e))
  }

  function handleTouchMove(e) {
    if (prevSlideX) {
      setSlideX((slideX) => getClientX(e) - prevSlideX)
    }
  }

  function handleMouseSwipe(e) {
    if (slideX) {
      const currentTouchX = getClientX(e)
      if (prevSlideX > currentTouchX + 100) {
        handleSlide(currentIndex + 1)
      } else if (prevSlideX < currentTouchX - 100) {
        handleSlide(currentIndex - 1)
      }
      setSlideX((slideX) => null)
    }
    setPrevSlideX((prevSlideX) => null)
  }

  return (<section className="recommend">
    <h2 className="recommend-title">우리아이와 잘 맞으시네요!</h2>
    <ul className="flex"
      onMouseOver={() => setIsSwiping(true)}
      onMouseOut={() => setIsSwiping(false)}>
      {items.map((item, key) => {
        return (<li className="flex-items" key={key}>
          <Card data={item} />
        </li>)
      })}
    </ul>
  </section>)
}