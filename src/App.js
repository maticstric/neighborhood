import React, { useState, useEffect } from 'react';
import './app.css';

import Table from './components/table/table.js';

const App = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [size, setSize] = useState(10);
  const [table, setTable] = useState([]);

  useEffect(() => {
    let newTable = [];

    for (let i = 0; i < size * size; i++) {
      newTable.push(false);
    }

    setTable(newTable);
  }, [size]);

  const handleOnMouseDown = () => {
    setIsMouseDown(true);
  }

  const handleOnMouseUp = () => {
    setIsMouseDown(false);
  }

  return (
    <div id="app" onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
      <Table
        isMouseDown={isMouseDown}
        table={table}
        setTable={setTable}
      />
    </div>
  );
}

export default App;
