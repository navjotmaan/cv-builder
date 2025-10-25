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
                type="number"
                value={data.phone}
                onChange={handleChange} 
            />
        </div>

    );
}
