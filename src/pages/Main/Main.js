import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Advertisement } from '../../components/Main/advertisement';
import List from '../../components/moreRecommend/List';
import RowSlider from '../../components/recommend/rowSlider';
export  function Main() {
  return <div>
    <Advertisement />
    <RowSlider />
    <List />
  </div>
}