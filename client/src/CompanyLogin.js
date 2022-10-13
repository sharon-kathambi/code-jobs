import React, { useEffect, useState } from 'react'
import Login from './Login';

function CompanyLogin() {
    const [company, setCompany] = useState(null)

    useEffect(() => {
        fetch('/me').then((response) => {
            if(response.ok){
                response.json().then((company) => setCompany(company))
            }
        })
    }, []);

    if (company){
        return <h2>Welcome, {company.name}!</h2>
    } else {
        return <Login onLogin={setCompany} />
    }
  
}

export default CompanyLogin
