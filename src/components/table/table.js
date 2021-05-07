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

  let tableJSX = [];
  let tableSize = Math.sqrt(props.table.length);

  for (let i = 0; i < tableSize; i++) {
    let cells = [];

    for (let j = 0; j < tableSize; j++) {
      let index = i * tableSize + j;
      let key = `${index}`

      if (props.table[index]) {
        cells.push(
          <td 
            key={key} 
            data-key={key} 
            onMouseOver={handleOnMouseOver} 
            onMouseDown={handleOnMouseDown} 
            className="selected"
          ></td>);
      } else {
        cells.push(
          <td 
            key={key} 
            data-key={key} 
            onMouseOver={handleOnMouseOver} 
            onMouseDown={handleOnMouseDown} 
          ></td>);
      }
    }

    tableJSX.push(<tr key={`row-${i}`}>{cells}</tr>);
  }

  return (
    <div id="table-container">
      <table>
        <tbody>
          {tableJSX}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
