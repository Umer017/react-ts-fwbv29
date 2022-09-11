import * as React from 'react';
import './style.css';
import Calbutton from './Calbutton';
export default function Calculator() {
  const [display, setDisplay] = React.useState(0);
  function NumberHandler(value) {
    setDisplay(value);
  }
  function OperaterHandler() {}
  return (
    <div className="app-container">
      <div className="display">{display}</div>
      <Calbutton value="7" onClick={NumberHandler} />
      <Calbutton value="8" onClick={NumberHandler} />
      <Calbutton value="9" onClick={NumberHandler} />
      <Calbutton className="operator" value="/" onClick={OperaterHandler} />

      <Calbutton value="4" onClick={NumberHandler} />
      <Calbutton value="5" onClick={NumberHandler} />
      <Calbutton value="6" onClick={NumberHandler} />
      <Calbutton className="operator" value="*" onClick={OperaterHandler} />

      <Calbutton value="1" onClick={NumberHandler} />
      <Calbutton value="2" onClick={NumberHandler} />
      <Calbutton value="3" onClick={NumberHandler} />
      <Calbutton className="operator" value="-" onClick={OperaterHandler} />

      <Calbutton value="C" />
      <Calbutton value="0" onClick={NumberHandler} />
      <Calbutton value="=" />
      <Calbutton className="operator" value="+" onClick={OperaterHandler} />
    </div>
  );
}
