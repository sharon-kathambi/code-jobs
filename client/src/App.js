
import React, {useEffect, useState} from 'react'
import JobCard from './JobCard';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('/jobs')
    .then((r) => r.json())
    .then((data) => setJobs(data))
  }, [])

  return ( 
  <div className='JobList'>
    <ul className='Jobs'>
      {jobs.map((job) => (
      <JobCard key={job.id} job={job}/>
      ))}
      </ul>
      </div>
  )
}

export default App;
