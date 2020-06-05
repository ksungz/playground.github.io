import React, { Component } from 'react';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import MyName from './component/MyName';
import Counter from './component/Counter';
import SassComponent from "./component/SassComponent";

class App extends Component {
  render() {
    const width = {
      width: "300px"
    }
    return (
      <div className="react_box">
        <div className="window" style={width}>
          <div className="title-bar">
            <div className="title-bar-text"><MyName name="타이틀" /></div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <Counter />
          </div>
        </div>
        <SassComponent />
      </div>
    )
  }
}

export default App;
