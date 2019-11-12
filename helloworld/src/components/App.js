import React from 'react';
import logo from '../shared/images/logo.svg';
import './App.css';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import MenuContainer from '../MenuContainer';

function App() {
  return ( 
    <div>
      <Header title='Welcome'/>
      <Content>
        <MenuContainer/>
      </Content>
      <Footer/>
    </div>);
  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */
}

export default App;
