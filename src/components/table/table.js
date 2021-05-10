import React, { useState } from 'react';
import './table.css';

const Table = (props) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [mouseOver, setMouseOver] = useState(null);

  const handleOnMouseDown = () => {
    if (mouseOver) {
      let table = props.table.slice();

      if (table[mouseOver]) {
        setIsDrawing(false);

        table[mouseOver] = !table[mouseOver];
      } else {
        setIsDrawing(true);

        table[mouseOver] = !table[mouseOver];
      }

      props.setTable(table);
    }
  }

  const handleOnMouseOver = (event) => {
    let key = event.target.dataset.key;

    setMouseOver(key);

    if (props.isMouseDown) {
      let table = props.table.slice();

      if (isDrawing) {
        table[key] = true;
      } else {
        table[key] = false;
      }

      props.setTable(table);
    }
  }

  const calculateBorderSpacing = (tableSize) => {
    return Math.round(0.002 * tableSize * tableSize - 0.185 * tableSize + 6.281);
  }

  const calculateBorderRadius = (tableSize) => {
    return Math.round(0.0025 * tableSize * tableSize - 0.23 * tableSize + 6.396);
  }

  if (props.table.length <= 0) {
    return null;
  }

  let tableJSX = [];
  let tableSize = Math.sqrt(props.table.length);

  let borderSpacing = calculateBorderSpacing(tableSize);
  let borderRadius = calculateBorderRadius(tableSize);
  let cellSize = Math.floor(300 / tableSize);

  const tdStyle = {
    borderRadius: borderRadius + 'px',
    width: cellSize,
    height: cellSize
  };

  const tableStyle = {
    borderSpacing: borderSpacing + 'px',
  };

  for (let i = 0; i < tableSize; i++) {
    let cells = [];

    for (let j = 0; j < tableSize; j++) {
      let index = i * tableSize + j;
      let key = `${index}`

      if (index === Math.floor((tableSize * tableSize) / 2)) {
        cells.push(
          <td 
            key={key} 
            data-key={key} 
            className="center"
            style={tdStyle}
          ></td>);
      } else {
        if (props.table[index]) {
          cells.push(
            <td 
              key={key} 
              data-key={key} 
              onMouseOver={handleOnMouseOver} 
              onMouseDown={handleOnMouseDown} 
              className="selected"
              style={tdStyle}
            ></td>);
        } else {
          cells.push(
            <td 
              key={key} 
              data-key={key} 
              onMouseOver={handleOnMouseOver} 
              onMouseDown={handleOnMouseDown} 
              style={tdStyle}
            ></td>);
        }
      }
    }

    tableJSX.push(<tr key={`row-${i}`}>{cells}</tr>);
  }

  return (
    <div id="table-container">
      <table style={tableStyle}>
        <tbody>
          {tableJSX}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
