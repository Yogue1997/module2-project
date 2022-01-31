import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
