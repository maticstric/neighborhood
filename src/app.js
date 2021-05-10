import React, { useState, useEffect } from 'react';
import './app.css';

import Table from './components/table/table.js';
import Controls from './components/controls/controls.js';
import Presets from './components/presets/presets.js';

const App = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [size, setSize] = useState(11);
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
      <Controls
        setSize={setSize}
      />
      <div id="center">
        <h1>neighborhood</h1>
        <Table
          isMouseDown={isMouseDown}
          table={table}
          setTable={setTable}
        />
      </div>
      <Presets />
    </div>
  );
}

export default App;
