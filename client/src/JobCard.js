import React from 'react'
import { Link } from 'react-router-dom';

function JobCard({job}) {
    const {
        id,
        name,
        location,
        level,
        salary,
        featured,
        languages,
        contract,
        posted_at
    } = job

    const tags = [level, ...languages];

    const classes = {
        wrapper:
            "w-10/12 max-w-6xl flex flex-col lg:flex-row justify-between item-start lg:items-center gap-4 p-6 lg:p-9 rounded bg-white shadow-cyan",
        info: "flex flex-col lg:flex-row items-start lg:items-center border-b lg:border-0 gap-6 pb-4 lg:pb-0",
        image: "w-12 lg:w-auto absolute lg:static transform -translate-y-12 lg:translate-y-0",
        details: "flex gap-2 lg:gap-4 text-sm lg:text-base text-gray-400",
        tags: "flex gap-4 flex-wrap",
        name: "flex items-center text-sm font-bold text-cyan-default pt-4",
        position: "text-cyan-verydark text-base lg:text-lg font-bold pt-2 pb-1",
        tag: "bg-cyan-light hover:text-white hover:bg-cyan-default text-cyan-default px-2 pt-2 pb-1 rounded text-sm font-bold",
        new: "bg-cyan-default text-white rounded-full px-2 pt-1.5 pb-0.5 text-xs uppercase font-normal ml-4 mr-2",
        featuredFlag:
            "bg-cyan-verydark text-white rounded-full px-2 pt-1.5 pb-0.5 text-xs uppercase font-normal",
        featuredJob: "border-l-4 border-cyan-default pl-5 lg:pl-8",
    };

  return (
    <div className={`${classes.wrapper} ${
        featured ? classes.featuredJob : "" }`}>
        <div className={classes.info}>
           <div className={classes.name}>
            <h2>
                <Link to={`jobs/${id}`}>{name}</Link>
                </h2>
             {featured && (
                <span className={classes.featuredFlag}>
                    Featured
                </span>
             )}
           </div>
          
            <ul className={classes.details}>
              <li>{posted_at}</li>
              <span aria-hidden="true">&#8226;</span>
              <li>{contract}</li>
              <span aria-hidden="true">&#8226;</span>
              <li>{location}</li>
              <span aria-hidden="true">&#8226;</span>
              <li>{salary}</li>
            </ul>
        </div>
            
            <ul className={classes.tags}>
                {tags.map(tag => (
                    <li>
                        <button
                            className={classes.tag}
                        >
                            {tag}
                        </button>
                    </li>
                ))}
            </ul>
      
    </div>
  )
}

export default JobCard
