import './App.css';

import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';

import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import TestComponent from './pages/TestComponent';

function App() {

  const [name,setName]=useState("Triranjan")

 return (
  <Routes>
    <Route path='/' element={<ClassComponent/>}/>
    <Route path='/functional-component' element={<FunctionalComponent name={name} age={20} internship={"Devtown"} setName={setName}/>}/>
    <Route path='/test-component' element={<TestComponent/>}/>
  </Routes>
  
 )
}

export default App;
