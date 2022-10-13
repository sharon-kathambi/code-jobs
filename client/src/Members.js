import React from 'react'
import { useEffect, useState } from "react";
import JobItem from './JobItem';

const initialState = {
    jobs: null,
    error: null,
    status: "pending",
  };

function Members() {
    const [{ jobs, error, status }, setState] = useState(initialState);
  
    useEffect(() => {
      setState(initialState);
      fetch('/members').then((r) => {
        if (r.ok) {
          r.json().then((jobs) =>
            setState({ jobs, error: null, status: "resolved" })
          );
        } else {
          r.json().then((message) =>
            setState({ jobs: null, error: message.error, status: "rejected" })
          );
        }
      });
    }, []);

    if (status === "pending") return <h1>Loading...</h1>;

    if (status === "rejected") return <h1>{error}</h1>;

  return (
    <main>
    <h2>Member Only Jobs</h2>
    {jobs.map((job) => (
      <JobItem key={job.id} job={job} />
    ))}
  </main>
  )
}

export default Members
