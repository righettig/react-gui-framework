import React, { Component } from 'react';
import './App.css';

import Nav from './Nav/Nav';
import BasicLayout from './Layout/Layout';

import modules from '../App/main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav modules={modules}></Nav>
        <BasicLayout 
          items={modules[0].views.length} 
          views={modules[0].views}>
        </BasicLayout>
      </div>
    );
  }
}

export default App;