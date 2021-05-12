import React, { useState, useEffect, useRef } from 'react';
import './controls.css';

import RangeSlider from '../../components/range-slider/range-slider.js'

import CopySvg from '../../images/copy.svg';

const Controls = (props) => {
  const [tableText, setTableText] = useState('');
  const textAreaRef = useRef(null);

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

  const copyTextAreaToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
  }

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
      <textarea ref={textAreaRef} readOnly={true} value={tableText}></textarea>
      <input
        type="image"
        alt="copy"
        src={CopySvg}
        onClick={copyTextAreaToClipboard}
      />
    </div>
  );
}

export default Controls;
