
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/shop' Component={Shop} />
        <Route path='/about' Component={About} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
