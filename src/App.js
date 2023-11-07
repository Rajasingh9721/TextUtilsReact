import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alert from './Component/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('Enable Dark Mode');
  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      setmodeText('Enable Light Mode');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      setmodeText('Enable Dark Mode');
      document.body.style.backgroundColor = '#fff';
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleButton={toggleButton} modeText={modeText} />
        <Alert alert="Hi" />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </div >
      </Router>
    </>
  );
}

export default App;
