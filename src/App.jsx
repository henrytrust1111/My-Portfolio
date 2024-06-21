import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <HashRouter>
    <Navbar />
    <Themes />
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </HashRouter>
  )
}

export default App
