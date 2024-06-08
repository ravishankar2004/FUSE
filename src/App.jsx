import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Cnews from './Cnews'
import Snews from './Snews' 
import Stocks from './Stocks' 
import Crypto from './Crypto'
import Home from './Home' 
import Type from './Typing' 
import Login  from './Login';
import Signup from './Signup';
import Protected from './Protected';
// import { Outlet } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import './type.js'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';


function App() {
  const[loading,setLoading] = useState(true);
  const spinner=document.getElementById('spin');
  if(spin){
    setTimeout(()=>{
      spin.style.display="none" ;
      setLoading(false);
    },1000)
  }
  return (
    !loading && (
      <div  className='mainbody' style={{backgroundImage: `url("")`,
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover"
      }}>
      
     
      <BrowserRouter>
      <Navbar/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stocks' element={<Snews/>}/>
        <Route path='/crypto' element={<Cnews/>}/>
        <Route path='/cryptocurrency' element={<Crypto/>}/>
        <Route path='/sstocks' element={<Stocks/>}/>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Protected />} ></Route>

        
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
    )
  )
}

export default App
