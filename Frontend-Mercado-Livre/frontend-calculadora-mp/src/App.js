import './App.css';
import React from 'react';
import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';



function App() {
  return (
    
    <div className='App'>
        <div>
           <Headers/>
        </div>
        <div>
           <Content/>
        </div>
        <div>
           <Footer/>
        </div>
    </div>
  );
}

export default App;
