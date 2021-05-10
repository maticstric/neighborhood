import React from 'react';
import './controls.css';

import RangeSlider from '../../components/range-slider/range-slider.js'

const Controls = (props) => {
  return (
    <div id="controls-container">
      <h2>Controls</h2>
      <RangeSlider 
        min={3}
        max={51}
        step={2}
        defaultValue={11}
        setSize={props.setSize}
      />
    </div>
  );
}

export default Controls;
