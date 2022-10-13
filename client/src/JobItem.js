import React from 'react'
import { Link } from 'react-router-dom';

function JobItem({job}) {
    const {
        name,
        location,
        level,
        salary,
        featured,
        languages,
        contract,
        posted_at,
        companys
    } = job

    const tags = [level, ...languages];

  return (
    <article>
    <h1>{name}</h1>
      <small>
        <p>
          {posted_at} • {location} {salary} {level} {companys.name}
        </p>
        <p>
          <em>{tags.map((tag) => {
            <li>{tag}</li>
          })}</em>
        </p>
      </small>
      <p>{contract}</p>
      <Link exact to='/me'><button>Company</button></Link>
      <Link exact to ='/login'><button>Edit Job</button></Link>
      <Link exact to ='/members'><button>Add Job</button></Link>
      <Link exact to ='/login'><button>Delete Job</button></Link>
    </article>
  )
}

export default JobItem
