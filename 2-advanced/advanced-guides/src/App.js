import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import FancyButton from './forwarding-ref/fancy-button';

function App() {
  const [showModal, setShowModal] = useState(false);
  handleShow = () => {
    setShowModal(true);
  }
  handleHide = () => {
    setShowModal(false)
  }
  const model = showModal ? (
    <
  )
  return (
    <Fragment>
      <div id="app-root"></div>
      <div id="modal-root"></div>
    </Fragment>
  );
}

export default App;
