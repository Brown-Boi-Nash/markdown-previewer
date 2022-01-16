/* eslint-disable */

import React from 'react';
import Editor from './Components/Editor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='app-title' style={{textAlign: 'center'}}>Markdown Previewer</h1>
      <Editor/>
    </div>
  );
}

export default App;
