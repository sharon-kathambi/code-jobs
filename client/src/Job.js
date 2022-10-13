import React, {useState, useEffect} from 'react'
import Company from './Company';
import { useParams } from 'react-router-dom';
import SignInWall from './SignInWall';
import { Link } from 'react-router-dom';


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

const { website} = companys

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
          {posted_at} • {location} {salary} {level} {companys.name}
        </p>
        <p>
          <em>{tags.map((tag) => {
            <li>{tag}</li>
          })}</em>
        </p>
      </small>
      <p>{contract}</p>
      <Link exact to='/login'><button>Company</button></Link>
      <Link exact to ='/login'><button>Edit Job</button></Link>
      <Link exact to ='/login'><button>Add Job</button></Link>
      <Link exact to ='/login'><button>Delete Job</button></Link>
    </article>
    </div>
  )
}

export default Job