import './Extras.css';

function Extras() {
    const interests = [
        { emoji: '🐱', label: 'Cats' },
        { emoji: '🧬', label: 'Anti-aging protocols' },
        { emoji: '📚', label: 'Philosophy' },
        { emoji: '⚖️', label: 'Ethics' },
        { emoji: '💪', label: 'Health & wellness' },
        { emoji: '🏈', label: 'Football' },
        { emoji: '🌯', label: 'Burritos' }
    ];

    return (
        <section className="section extras">
            <h2 className="section-title">More About Me</h2>
            <div className="extras-grid">
                <div className="glass-card extras-card">
                    <h3 className="extras-heading">Extracurriculars</h3>
                    <div className="extras-list">
                        <div className="extra-item">
                            <span className="extra-icon">🎖️</span>
                            <div>
                                <strong>Harvard ROTC</strong>
                                <span className="extra-role">Cadet</span>
                            </div>
                        </div>
                        <div className="extra-item">
                            <span className="extra-icon">🤝</span>
                            <div>
                                <strong>Beta Theta Pi</strong>
                                <span className="extra-role">Member & Initiate</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card extras-card">
                    <h3 className="extras-heading">Languages & Tech</h3>
                    <div className="extras-list">
                        <div className="extra-item">
                            <span className="extra-icon">🗣️</span>
                            <div>
                                <strong>Hebrew</strong>
                                <span className="extra-role">Intermediate</span>
                            </div>
                        </div>
                        <div className="extra-item">
                            <span className="extra-icon">💻</span>
                            <div>
                                <strong>CRM Software</strong>
                                <span className="extra-role">Proficient</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="interests-section">
                <h3 className="interests-heading">Interests</h3>
                <div className="interests-grid stagger-children">
                    {interests.map((interest, index) => (
                        <div key={index} className="interest-pill">
                            <span className="interest-emoji">{interest.emoji}</span>
                            {interest.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Extras;
