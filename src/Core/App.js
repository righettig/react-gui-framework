import React, { Component } from 'react';

import Menu from './Menu/Menu';
import BasicLayout from './Layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import modules from '../App/main';

class App extends Component {
  render() {
    return (
      <div>
        <Menu modules={modules}></Menu>
        <BasicLayout 
          items={modules[0].views.length} 
          views={modules[0].views}>
        </BasicLayout>
      </div>
    );
  }
}

export default App;