import React, { Component } from 'react';
import './App.css';

import BasicLayout from './Layout/Layout';
import modules from './main';

class App extends Component {
  render() {
    return (
      <BasicLayout 
        items={modules[0].views.length} 
        views={modules[0].views}>
      </BasicLayout>
    );
  }
}

export default App;