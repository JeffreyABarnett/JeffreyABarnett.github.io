import './Extras.css';

const interests = [
    { icon: 'cat', label: 'Cats' },
    { icon: 'dna', label: 'Anti-aging protocols' },
    { icon: 'book', label: 'Philosophy' },
    { icon: 'scale', label: 'Ethics' },
    { icon: 'heart', label: 'Health & wellness' },
    { icon: 'football', label: 'Football' },
    { icon: 'utensils', label: 'Burritos' }
];

const icons = {
    cat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5c-1.5-2-4-2-5.5-.5L4 7l2 3-3 4v5h6v-2h6v2h6v-5l-3-4 2-3-2.5-2.5c-1.5-1.5-4-1.5-5.5.5z" /></svg>,
    dna: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="M17 6l-2.5-2.5" /><path d="M14 8l-2-2" /><path d="M7 18l2.5 2.5" /><path d="M10 16l2 2" /></svg>,
    book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    scale: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>,
    heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
    football: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>,
    utensils: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
};

function Extras() {
    return (
        <section className="section extras">
            <h2 className="section-title">More About Me</h2>
            <div className="extras-grid">
                <div className="glass-card extras-card">
                    <h3 className="extras-heading">Extracurriculars</h3>
                    <div className="extras-list">
                        <div className="extra-item">
                            <svg className="extra-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 8l-9.5 5.5v5l9.5 5.5 9.5-5.5v-5L12 8z" />
                                <path d="m12 8 9.5 5.5L12 19l-9.5-5.5L12 8z" />
                                <path d="M2.5 13.5v5" />
                            </svg>
                            <div>
                                <strong>Harvard ROTC</strong>
                                <span className="extra-role">Cadet</span>
                            </div>
                        </div>
                        <div className="extra-item">
                            <svg className="extra-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
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
                            <svg className="extra-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m5 8 6 6" />
                                <path d="m4 14 6-6 2-3" />
                                <path d="M2 5h12" />
                                <path d="M7 2h1" />
                                <path d="m22 22-5-10-5 10" />
                                <path d="M14 18h6" />
                            </svg>
                            <div>
                                <strong>Hebrew</strong>
                                <span className="extra-role">Intermediate</span>
                            </div>
                        </div>
                        <div className="extra-item">
                            <svg className="extra-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
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
                            <span className="interest-icon">{icons[interest.icon]}</span>
                            {interest.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Extras;
