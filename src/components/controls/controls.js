import React, { useState, useEffect } from 'react';
import './controls.css';

import RangeSlider from '../../components/range-slider/range-slider.js'

const Controls = (props) => {
  const [tableText, setTableText] = useState('');

  useEffect(() => {
    let table = props.table;
    let tableSize = Math.sqrt(table.length);
    let text = '';

    table.forEach((cell, i) => {
      if (cell) {
        let row = Math.floor(i / tableSize); 
        let col = i - row * tableSize;

        let rowFromCenter = row - Math.floor(tableSize / 2);
        let colFromCenter = col - Math.floor(tableSize / 2);

        text += `(${colFromCenter}, ${rowFromCenter})\n`;
      }
    });

    setTableText(text);
  }, [props.table]);

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
      <textarea readOnly={true} value={tableText}></textarea>
      <button>asdf</button>
    </div>
  );
}

export default Controls;
