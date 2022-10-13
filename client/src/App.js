import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import JobList from './JobList';
import CompanyLogin from './CompanyLogin';
import Login from './Login';
import Job from './Job';
import Header from './Header';


function App() {
  const [company, setCompany] = useState(null)

    useEffect(() => {
        fetch('/me').then((response) => {
            if(response.ok){
                response.json().then((company) => setCompany(company))
            }
        })
    }, []);

    function handleLogin(company){
      setCompany(company)
    }

    function handleLogout(){
      setCompany(null)
    }

  return (
    <div className='App'>
      <Header company={company} onLogout={handleLogout} />
    <Routes>
      <Route exact path='/' element={<JobList />}> </Route >
      <Route exact path='/login' element={<Login onLogin={handleLogin} />}> </Route >
      <Route exact path='/jobs/:id' element={<Job />}> </Route >
      
    </Routes>
    </div>
  )
  
}

export default App;

//<Route exact path='/me' element={<CompanyLogin />}></Route>