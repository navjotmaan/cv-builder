export default function Education({data, handleChange}) {
    return (
        <div className="info">
            <label htmlFor="schoolName">School Name: </label>
            <input 
                name="schoolName" 
                id="school-name" 
                type="text"
                value={data.schoolName}
                onChange={handleChange}
            />

            <label htmlFor="study">Title of study: </label>
            <input
                name="study" 
                id="study-title" 
                type="text"
                value={data.study}
                onChange={handleChange} 
            />

            <label htmlFor="year">Year:</label>
            <input 
                name="year" 
                id="year"
                value={data.year}
                onChange={handleChange} 
            />
        </div>

    );
}


