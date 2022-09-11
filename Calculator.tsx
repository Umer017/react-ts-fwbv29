import * as React from 'react';
import './style.css';
import Calbutton from './Calbutton';
export default function Calculator() {
  return (
    <div className="app-container">
      <div className="display">0</div>
      <Calbutton value="7" />
      <Calbutton value="8" />
      <Calbutton value="9" />
      <Calbutton className="operator" value="/" />

      <Calbutton value="4" />
      <Calbutton value="5" />
      <Calbutton value="6" />
      <Calbutton className="operator" value="*" />

      <Calbutton value="1" />
      <Calbutton value="1" />
      <Calbutton value="3" />
      <Calbutton className="operator" value="-" />

      <Calbutton value="C" />
      <Calbutton value="0" />
      <Calbutton value="=" />
      <Calbutton className="operator" value="+" />
    </div>
  );
}
