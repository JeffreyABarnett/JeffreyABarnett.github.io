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
                        <span className="activity-icon">🏉</span>
                        Harvard Rugby, Flyhalf
                    </div>
                </div>

                <div className="certifications-card">
                    <h3 className="cert-heading">Certifications</h3>
                    <div className="cert-list">
                        <div className="cert-item">
                            <span className="cert-icon">✓</span>
                            Anaplan Level 2
                        </div>
                        <div className="cert-item">
                            <span className="cert-icon">✓</span>
                            Anaplan Certified Model Builder
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
