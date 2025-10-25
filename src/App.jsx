import { useState } from 'react'
import GeneralInfo from './components/contact'
import Education from './components/edu'
import Experience from './components/exp'
import Skills from './components/skills'
import './styles/App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    schoolName: "",
    study: "",
    year: "",
    company: "",
    position: "",
    resp: "",
    jobYear: "",
    skills: [""]
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
  }

  function editForm() {
    setSubmittedData(null);
  }

  return (
    <>
      {submittedData ? (
        <div>
          <button id='edit' onClick={editForm}>Edit</button>
          <div className="display-info">
                <h1 id='name'>{submittedData.name}</h1>
                <h3>Profile Summary</h3>
                <p>{submittedData.summary}</p>
                <hr></hr>

                <h3>Contact</h3>
                <p><strong>Phone:</strong> {submittedData.phone}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>LinkedIn:</strong> {submittedData.linkedIn}</p>
                <p><strong>GitHub:</strong> {submittedData.github}</p>
                <p><strong>Personal Website:</strong> {submittedData.portfolio}</p>
                <hr></hr>

                <h3>Education:</h3>
                <strong>{submittedData.schoolName}</strong>
                <p>{submittedData.study}</p>
                <p>{submittedData.year}</p>
                <hr></hr>

                <h3>Experience:</h3>
                <p><strong>Company Name:</strong> {submittedData.company}</p>
                <p><strong>Position title:</strong> {submittedData.position}</p>
                <p><strong>Responsibilites:</strong> {submittedData.resp}</p>
                <p><strong>Year:</strong> {submittedData.jobYear}</p>
                <hr></hr>

                <h3>Skills:</h3>
                <ul>
                  {submittedData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
            </div>
          </div>
      ) : (
        <form id='cv-form' onSubmit={handleSubmit}>
          <h1>CV Application</h1>
          <GeneralInfo data={formData} handleChange={handleChange}/>
          <Education data={formData} handleChange={handleChange}/>
          <Experience data={formData} handleChange={handleChange}/>
          <Skills data={formData} handleChange={handleChange} />

          <button type="submit" id='submit'>Submit</button>
        </form>
      )}
    </>
  )
}

export default App
