import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import Players from './components/Players';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/palyers' element={<Players/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
