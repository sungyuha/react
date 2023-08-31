import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className='App'>
      {/* 게임 구성 요소 */}
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
