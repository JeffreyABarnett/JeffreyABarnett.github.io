import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-bg"></div>
            <div className="header-content">
                <h1 className="header-name">Jeffrey Barnett</h1>
                <p className="header-title">Sales & Business Development</p>
                <div className="header-contact">
                    <a href="mailto:barnett.jeffrey1995@gmail.com" className="contact-item">
                        <span className="contact-icon">✉</span>
                        barnett.jeffrey1995@gmail.com
                    </a>
                    <a href="tel:+17702738434" className="contact-item">
                        <span className="contact-icon">☎</span>
                        (770) 273-8434
                    </a>
                    <span className="contact-item">
                        <span className="contact-icon">📍</span>
                        Atlanta, GA
                    </span>
                    <a
                        href="https://linkedin.com/in/jeffrey-barnett"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <span className="contact-icon">💼</span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
