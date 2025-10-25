import { useState } from "react";

function GeneralInfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
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
                    <label htmlFor="name">Name: </label>
                    <input 
                        name="name" 
                        id="user-name" 
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email: </label>
                    <input
                        name="email" 
                        id="user-email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange} 
                    />

                    <label htmlFor="phone">Phone number:</label>
                    <input 
                        name="phone" 
                        id="user-phone" 
                        type="number"
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

export function DisplayInfo({data}) {
    return (
        <div className="display-info">
            <h2>General Information:</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
        </div>
    )
}

export default GeneralInfo