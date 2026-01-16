import './Education.css';

function Education() {
    return (
        <section className="section education">
            <h2 className="section-title">Education & Credentials</h2>
            <div className="education-grid">
                <div className="glass-card education-card">
                    <div className="degree-badge">B.L.A.</div>
                    <h3 className="degree-title">Bachelor of Liberal Arts in Government</h3>
                    <p className="institution">Harvard University</p>
                    <p className="location">Cambridge, Massachusetts</p>
                    <p className="graduation">May 2021</p>
                    <div className="activity-tag">
                        <svg className="activity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                        Harvard Rugby, Flyhalf
                    </div>
                </div>

                <div className="certifications-card">
                    <h3 className="cert-heading">Certifications</h3>
                    <div className="cert-list">
                        <div className="cert-item">
                            <svg className="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Anaplan Level 2
                        </div>
                        <div className="cert-item">
                            <svg className="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Anaplan Certified Model Builder
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
