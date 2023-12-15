import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;


