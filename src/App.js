import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Players from './components/Players';
import Footer from './components/Footer';
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
          <Route path='/players' element={<Players/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
