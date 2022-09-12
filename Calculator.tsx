import * as React from 'react';
import './style.css';
import Calbutton from './Calbutton';
export default function Calculator() {
  const [display, setDisplay] = React.useState({
    current: '0',
    total: '0',
    isInitial: true,
    preOp: '',
  });
  function NumberHandler(value) {
    let newVal = value;
    if (!display.isInitial) {
      newVal = display.current + value;
    }
    setDisplay({
      current: newVal,
      total: display.total,
      isInitial: false,
      preOp: display.preOp,
    });
  }
  function OperaterHandler(value) {
    var total = doCalculation();
    setDisplay({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  }
  function doCalculation() {
    let total = parseInt(display.total);
    switch (display.preOp) {
      case '+':
        total += parseInt(display.current);
        break;
      case '-':
        total = total - parseInt(display.current);
        break;
      case '*':
        total = total * parseInt(display.current);
        break;
      case '/':
        total = total / parseInt(display.current);
        break;
      default:
        total = parseInt(display.current);
    }
    return total;
  }

  function ClearHandler() {
    setDisplay({ current: '0', total: '0', isInitial: true, preOp: '' });
  }

  return (
    <div className="app-container">
      <div className="display">{display.current}</div>
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

      <Calbutton value="C" onClick={ClearHandler} />
      <Calbutton value="0" onClick={NumberHandler} />
      <Calbutton value="=" onClick={OperaterHandler} />
      <Calbutton className="operator" value="+" onClick={OperaterHandler} />
    </div>
  );
}
