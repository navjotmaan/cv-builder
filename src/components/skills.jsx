export default function Skills({data, handleChange}) {
    function addSkillField() {
        const newSkills = [...data.skills, ""];
        handleChange({
            target: {
                name: "skills",
                value: newSkills,
            },
        });
    }
    
    function handleSkillchange(e, index) {
        const updatedSkills = [...data.skills];
        updatedSkills[index] = e.target.value;

        handleChange({
            target: {
                name: "skills",
                value: updatedSkills,
            },
        });
    }

    return (
        <div className="info" id="skill-form">
            <h2>Skills</h2>

            {data.skills.map((skill, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Skill ${index + 1}`}
                    value={skill}
                    onChange={(e) => handleSkillchange(e, index)}
                />
            ))}

            <button type="button" onClick={addSkillField}>+ Add Skill</button>
        </div>
    );
}

