import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import JobList from './JobList';
import CompanyLogin from './CompanyLogin';
import Login from './Login';
import Job from './Job';
import Header from './Header';
import Members from './Members';
import JobForm from './JobForm';
import SignUp from './SignUp';
import JobCard from './JobCard';


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
      <main>
        {company ? (
    <Routes>
      <Route exact path='/members' 
      element={<Members/>}> 
      </Route >
      </Routes>
        ): (
          <Routes>
      <Route exact path='/login' element={<Login onLogin={handleLogin} />}> </Route >
      <Route exact path='/jobs/:id' element={<Job />}> </Route >
      <Route exact path='/new' element={<JobForm />}></Route>
      <Route exact path='/signup' element={<SignUp setCompany={setCompany}/>}></Route>
      <Route exact path='/' element={ <JobList/> }></Route>
      <Route exact path='/me' element={ <CompanyLogin />}></Route>
      
    </Routes>
        )}
    </main>
    </div>
  )
  
}

export default App;

//<Route exact path='/me' element={<CompanyLogin />}></Route>