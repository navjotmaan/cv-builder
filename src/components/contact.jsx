export default function GeneralInfo({data, handleChange}) {
    return (
        <div className="info">
            <label htmlFor="name">Name: </label>
            <input 
                name="name" 
                id="user-name" 
                type="text"
                value={data.name}
                onChange={handleChange}
            />

            <label htmlFor="summary">Profile Summary: </label>
            <textarea
                name="summary"
                value={data.summary}
                onChange={handleChange} 
            />

            <label htmlFor="email">Email: </label>
            <input
                name="email" 
                id="user-email" 
                type="email"
                value={data.email}
                onChange={handleChange} 
            />

            <label htmlFor="phone">Phone number:</label>
            <input 
                name="phone" 
                id="user-phone" 
                value={data.phone}
                onChange={handleChange} 
            />

            <label htmlFor="linkedIn">LinkedIn:</label>
            <input 
                name="linkedIn" 
                id="linkedIn" 
                value={data.linkedIn}
                onChange={handleChange} 
            />

            <label htmlFor="github">GitHub:</label>
            <input 
                name="github" 
                id="github"
                value={data.github}
                onChange={handleChange} 
            />

            <label htmlFor="portfolio">Personal Website:</label>
            <input 
                name="portfolio" 
                id="portfolio" 
                value={data.portfolio}
                onChange={handleChange} 
            />
        </div>

    );
}
