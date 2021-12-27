import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Splasher from './components/Splash.jsx'
import {useState} from 'react';
import Modal from './components/Modal';


function App() {
  const [user, setUser] = useState({ID: 1, name: "Harold", shoeSize: 9})
  const [modal, setModalVisibility] = useState({ visible: false });
  return (
    <div className="App">
      <p>Timer Todo</p>
      <BrowserRouter>
        <div>
          {modal.visible ? (
            <Modal modal={modal} setModalVisibility={setModalVisibility} />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/shop" element={<div>Welcome to our shop</div>} />
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <Splasher user={user} setModalVisibility={setModalVisibility} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

function About() {
  return (
    <div>about us</div>
  )
}