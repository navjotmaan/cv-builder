import { useState } from "react";

function Education() {
    const [formData, setFormData] = useState({
        schoolName: '',
        study: '',
        year: ''
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
                    <label htmlFor="schoolName">School Name: </label>
                    <input 
                        name="schoolName" 
                        id="school-name" 
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="study">Title of study: </label>
                    <input
                        name="study" 
                        id="study-title" 
                        type="text"
                        value={formData.email}
                        onChange={handleChange} 
                    />

                    <label htmlFor="year">Year:</label>
                    <input 
                        name="year" 
                        id="year"
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
            <h2>Education:</h2>
            <p><strong>School Name:</strong> {data.schoolName}</p>
            <p><strong>Title of study:</strong> {data.study}</p>
            <p><strong>Year:</strong> {data.year}</p>
        </div>
    )
}

export default Education