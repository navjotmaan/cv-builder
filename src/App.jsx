import { useState } from 'react'
import GeneralInfo from './components/contact'
import Education from './components/edu'
import Experience from './components/exp'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    study: "",
    year: "",
    company: "",
    position: "",
    responsibilities: "",
    jobYear: ""
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

  return (
    <>
      {!submittedData && (
        <form onSubmit={handleSubmit}>
          <GeneralInfo data={formData} handleChange={handleChange}/>
          <Education data={formData} handleChange={handleChange}/>
          <Experience data={formData} handleChange={handleChange}/>

          <button type="submit">Submit</button>
        </form>
      )}
    
      {submittedData && (
        <div className="display-info">
              <h2>General Information:</h2>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>

              <h2>Education:</h2>
              <p><strong>School Name:</strong> {submittedData.schoolName}</p>
              <p><strong>Title of study:</strong> {submittedData.study}</p>
              <p><strong>Year:</strong> {submittedData.year}</p>

              <h2>Experience:</h2>
              <p><strong>Company Name:</strong> {submittedData.company}</p>
              <p><strong>Position title:</strong> {submittedData.position}</p>
              <p><strong>Responsibilites:</strong> {submittedData.resp}</p>
              <p><strong>Year:</strong> {submittedData.jobYear}</p>
          </div>
      )}
    </>
  )
}

export default App
