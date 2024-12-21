import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Router>
      <div className="App">
        <header>
          <NavigateButton />
        </header>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="home" element={<Home
            count={count}
            handleClick={handleClick} />}
          />
          <Route path="about" element={<About count={count} />} />
          <Route path="contact" element={<Contact count={count} />} />
        </Routes>
      </div>
    </Router>
  );



  function NavigateButton() {

    const navigate = useNavigate()
    const handleClickHome = () => navigate('/home')
    const handleClickAbout = () => navigate('/about')
    const handleClickContact = () => navigate('/contact')

    return (
      <div>
        <button onClick={handleClickHome}>Home</button>
        <button onClick={handleClickAbout}>About</button>
        <button onClick={handleClickContact}>Contact</button>
      </div>
    );
  }
}

export default App