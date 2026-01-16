import './Experience.css';

const experiences = [
    {
        company: 'Allitix',
        location: 'Remote',
        roles: [
            {
                title: 'Business Development Consultant',
                period: 'August 2023 to July 2024',
                achievements: [
                    'Demonstrated a track record of success in consistently meeting and exceeding sales targets by coordinating client meetings, surpassing first quarter expectations by 300%.',
                    'Undertook and completed a wide range of targeted prospecting and lead qualification activities, resulting in new business growth exceeding 50% of new business.',
                    'Engaged in early-stage sales negotiations by communicating with multi-billion-dollar corporations.',
                    'Established and cultivated strong and sustaining relationships and rapport with senior executives and stakeholders across Fortune 500 companies and leading energy producers.',
                    'Conducted extensive industry and market research to obtain a strong understanding of trends and to identify potential business opportunities.',
                    'Furnished in-depth support in the creation and development of sales pitches and presentations to attract and onboard new clients.',
                    'Orchestrated the creation, development, and implementation of business plans and strategies to propel business growth and development.'
                ]
            },
            {
                title: 'Consultant, Model Building',
                period: 'June 2021 to August 2023',
                achievements: [
                    'Spearheaded the creation and development of internal sales forecasting training materials, leading to optimized processes for a prominent toy manufacturer.',
                    'Operated with a strong and ongoing focus on enhancing and streamlining financial service models for a major pension fund manager, resulting in a 58% increase in operational efficiency.',
                    'Performed the restructuring and enhancement of financial models for a go-to-market strategy within the food manufacturing sector.',
                    'Served as a Lead Model Builder for a major real estate company and administered dual full-time workloads, culminating in significant improvements in data management.',
                    'Led the delivery of top-quality training and coaching to multiple external client teams in Anaplan model building to patch common minor to moderate model issues.',
                    'Leveraged a wide range of techniques, methods, and other tools in the construction of top-quality models in alignment with business objectives.',
                    'Administered extensive testing and analysis into different areas to guarantee the reliability and accuracy of models, implementing adjustments as necessary.'
                ]
            }
        ]
    },
    {
        company: 'Rhyme',
        location: 'Cambridge, MA',
        roles: [
            {
                title: 'Lead Psychology Consultant',
                period: 'April 2020 to February 2021',
                achievements: [
                    'Leveraged psychological research to generate insights before enhancing user engagement and refining product design, resulting in a 100% improvement in customer retention.',
                    'Operated in a pivotal capacity by leading the delivery of presentations on data-driven insights to cross-functional teams, influencing the strategic direction of the platform.',
                    'Closely collaborated and communicated with technical teams to provide support in the development of the user interface, delivering a more intuitive customer experience.',
                    'Interfaced directly with the CEO to contribute to the whiteboarding, strengthening, and direction of the fundamental philosophy of the platform.'
                ]
            }
        ]
    }
];

function Experience() {
    return (
        <section className="section experience">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-timeline">
                {experiences.map((exp, expIndex) => (
                    <div key={expIndex} className="experience-company">
                        <div className="company-header">
                            <h3 className="company-name">{exp.company}</h3>
                            <span className="company-location">{exp.location}</span>
                        </div>
                        {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="glass-card role-card">
                                <div className="role-header">
                                    <h4 className="role-title">{role.title}</h4>
                                    <span className="role-period">{role.period}</span>
                                </div>
                                <ul className="achievements-list">
                                    {role.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
