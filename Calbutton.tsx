import * as React from 'react';
import './style.css';

export default function Calbutton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}
