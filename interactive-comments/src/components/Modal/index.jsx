import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


export default function Modal(props){

  return ReactDOM.createPortal(
    <div className="Modal">
      { props.children } 
    </div>,
    document.getElementById("modal-root")
  )  
}
