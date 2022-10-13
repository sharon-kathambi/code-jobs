import { useState } from "react";
import styled from "styled-components";

function JobForm() {
  const [formData, setFormData] = useState({
    name: "",
    location:'',
    level: "",
    salary: "",
    languages: [],
    contract: "",
    posted_at: "",
    featured: false,
    posted_at: ''
  });

  function handleSubmit(e){
    e.preventDefault();
    fetch('/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((newJob) => console.log(newJob))
  }

  

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="level">Level</label>
          <input
            type="text"
            id="level"
            value={formData.level}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Salary</label>
          <input
            type="text"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="languages">Languages</label>
          <textarea
            id="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="contract">Contract</label>
          <input
            type="text"
            id="contract"
            value={formData.contract}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="featured">
            Featured?
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
          </label>
        </FormGroup>
        <SubmitButton type="submit">Add Job</SubmitButton>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 32px auto;
  padding: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  background: blue;
  color: yellow;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;


export default JobForm;
