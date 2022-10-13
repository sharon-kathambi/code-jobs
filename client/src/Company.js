import React from 'react'

function Company({company}) {
    const {
        id,
        name,
        website,
        logo,
        employees,
        mission,
        technologies
    } = company
  return (
    <div>
      <li>{name}</li>
      <li>{website}</li>
    </div>
  )
}

export default Company
