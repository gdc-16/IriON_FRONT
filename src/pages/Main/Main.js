import React from 'react';
import { Advertisement } from '../../components/Main/advertisement';
import List from '../../components/moreRecommend/List';
import RowSlider from '../../components/recommend/rowSlider';

export function Main() {
  return <div><Advertisement /><RowSlider /><List /></div>
}