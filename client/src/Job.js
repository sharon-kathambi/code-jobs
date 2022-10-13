import React, {useState, useEffect} from 'react'
import Company from './Company';
import { useParams } from 'react-router-dom';
import SignInWall from './SignInWall';


const initialState = {
    job: null,
    error: null,
    status: "pending",
  };

function Job() {
    const [{ job, error, status }, setState] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    setState(initialState);
    fetch(`/jobs/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((job) =>
          setState({ job, error: null, status: "resolved" })
        );
      } else {
        r.json().then((message) =>
          setState({ job: null, error: message.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;

  if (status === "rejected") {
    if (error === "Login") {
      return <SignInWall />;
    } else {
      return <h1>{error}</h1>;
    }
  }

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
    <div>
    <article>
        <ul>
            {companys.map((company)=> {
                <Company company={company} />
            })}

        </ul>

    </article>
    <article>
    <h1>{name}</h1>
      <small>
        <p>
          {posted_at} • {location} {salary} {level}
        </p>
        <p>
          <em>{tags.map((tag) => {
            <li>{tag}</li>
          })}</em>
        </p>
      </small>
      <p>{contract}</p>
    </article>
    </div>
  )
}

export default Job
