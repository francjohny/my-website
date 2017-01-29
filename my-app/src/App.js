import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Aside from './Aside/Aside.js';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header />
			<Main />
		</div>
    );
  }
}

export default App;
