import { useState } from "react";

function Experience() {
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        resp: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div>
            {!submittedData ? (
                <form className="info" onSubmit={handleSubmit}>
                    <label htmlFor="company">Company Name: </label>
                    <input 
                        name="company" 
                        id="company-name" 
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="position">Position title: </label>
                    <input
                        name="position" 
                        id="position" 
                        value={formData.email}
                        onChange={handleChange} 
                    />

                    <label htmlFor="resp">Responsibilities:</label>
                    <input 
                        name="resp" 
                        id="resp" 
                        value={formData.phone}
                        onChange={handleChange} 
                    />

                    <label htmlFor="year">Year:</label>
                    <input 
                        name="year" 
                        id="job-year"
                        value={formData.phone}
                        onChange={handleChange} 
                    />

                    <button className="submit" type="submit">Submit</button>
                </form>

            ) : (
                <DisplayInfo data={submittedData} />
            )}
        </div>

    );
}

function DisplayInfo({data}) {
    return (
        <div className="display-info">
            <h2>Experience:</h2>
            <p><strong>Company Name:</strong> {data.company}</p>
            <p><strong>Position title:</strong> {data.position}</p>
            <p><strong>Responsibilites:</strong> {data.resp}</p>
            <p><strong>Year:</strong> {data.year}</p>
        </div>
    )
}

export default Experience