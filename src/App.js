import './App.css';
import Navbar from './Components/Navbar'
import Alert from './Components/Alert';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark Mode');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light");
      setBtnText('Dark Mode');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1e1e1e";
      document.title = "TextUtile | Light mode";

    }
    else {
      setMode("dark");
      setBtnText('Light Mode');
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "white";
      document.title = "TextUtile | Dark mode";
    }
  }
  return (
    <>
      <Router>
      <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode} title="TextUtils" about="About Us" Contact="Contact Us" />
      <Alert alert="This is an alert" />
      <div className="container">
        <Routes>
        <Route path="/about" element = {<About mode={mode}/>}></Route>
        <Route path="/home" element = {<Textform mode={mode} heading="Enter the text" />}></Route>
        </Routes>
      </div >
      </Router>

    </>
  );
}

export default App;
