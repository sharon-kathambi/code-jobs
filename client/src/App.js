import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import JobList from './JobList';
import CompanyLogin from './CompanyLogin';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<JobList />}> </Route >
      <Route exact path='/me' element={<CompanyLogin />}></Route>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App;
