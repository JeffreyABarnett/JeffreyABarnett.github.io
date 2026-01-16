import './Skills.css';

const skills = [
    'Sales & Business Development',
    'Client Needs Assessment',
    'Revenue Generation',
    'Team Leadership',
    'Consulting',
    'Opportunity Management',
    'Goal Management',
    'Customer Success',
    'Market Research',
    'Prospecting',
    'Client Relationship Management',
    'Customer Satisfaction',
    'Attention to Detail',
    'Strategic Planning',
    'Problem-Solving'
];

function Skills() {
    return (
        <section className="section skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid stagger-children">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                        <span className="skill-text">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
