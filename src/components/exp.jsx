export default function Experience({data, handleChange}) {
    return (
        <div className="info">
            <label htmlFor="company">Company Name: </label>
            <input 
                name="company" 
                id="company-name" 
                type="text"
                value={data.company}
                onChange={handleChange}
            />

            <label htmlFor="position">Position title: </label>
            <input
                name="position" 
                id="position" 
                value={data.position}
                onChange={handleChange} 
            />

            <label htmlFor="resp">Responsibilities:</label>
            <input 
                name="resp" 
                id="resp" 
                value={data.resp}
                onChange={handleChange} 
            />

            <label htmlFor="jobYear">Year:</label>
            <input 
                name="jobYear" 
                id="jobYear"
                value={data.jobYear}
                onChange={handleChange} 
            />
        </div>

    );
}


