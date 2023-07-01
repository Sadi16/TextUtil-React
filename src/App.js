import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
//import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setmode]= useState("light"); 
  const [alert,setalert]=useState();

  const showalert=(message,type)=> {
    setalert({
      msg :message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },900);
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor='#333';
      document.body.style.color='white';
      showalert("Darkmode is Enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='#333';   
      showalert("Lightmode is Enabled","success");
    } 
  }
  return (
        <>
        <Navbar title="Text-Utils" home="Main" mode={mode} togglemode={togglemode} about="About-Us"/>
        <Alert alert={alert}></Alert>
        <TextForm showalert={showalert}></TextForm>
        </>
  );
}
export default App;