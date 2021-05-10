import React, { useState } from 'react';
import './range-slider.css';

const RangeSlider = (props) => {
    const [text, setText] = useState('size: 11');  

    return (
      <div id="range-slider-continer">
        <p>{text}</p>
        <div id="input-container">
          <div>{props.min}</div>
          <input
            type="range"
            disabled={props.disabled}
            min={props.min}
            max={props.max}
            step={props.step}
            defaultValue={props.defaultValue}
            onChange={(event) => {
              setText('size: ' + event.target.value);
            }}
            onMouseUp={(event) => {
              props.setSize(event.target.value);
            }}
          />
          <div>{props.max}</div>
        </div>
      </div>
    );
};

export default RangeSlider;
