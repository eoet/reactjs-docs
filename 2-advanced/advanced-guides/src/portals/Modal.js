import { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const [constructorHasRun, setConstructorHasRun] = useState(false)
  const constructor = () => {
    if(constructorHasRun) return;
    setConstructorHasRun(true);
  }
  constructor();
  const portal = ReactDOM.get
  return (
    ReactDOM.createPortal(
      props.children,
      el
    )
  );
}

export default Modal;