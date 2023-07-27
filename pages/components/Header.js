import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from '../../styles/Header.module.css';

export default function Header(props) {
    function moveToPositions() {
        var positionHeight = localStorage.getItem('divPositionHeight');
        window.scroll(0, (positionHeight - 80));
    }
    let selectedMenu = props.selectedMenu
    return (
        <div className={`${styles.headerNavbarContainer} fixed-top`}>
            {/* <Container fluid='xxl'> */}
            <Navbar expand="lg" className={`${styles.headerNavbar}`}>
                <Link className="navbar-brand" href="/">
                    <img src="https://clapingo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.700994a7.png&w=48&q=75" alt="#ImgNotFound" />
                    <span className={styles.websiteLogo}>Clapingo</span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ background: '#FCFBF4' }}>
                    <ul className="navbar-nav">
                        {selectedMenu === 'Home' ?
                            <li className={`nav-item ${styles.navItems}`} style={{ background: '#EBF6EF', borderRadius: '5px' }}>
                                <Link className={`${styles.websiteMenu} nav-link active`} aria-current="page" href="#">Home</Link>
                            </li>
                            :
                            <li className={`nav-item ${styles.navItems}`}>
                                <Link className={`${styles.websiteMenu} nav-link active`} aria-current="page" href="/">Home</Link>
                            </li>
                        }
                        <li className={`nav-item ${styles.navItems}`}>
                            <span className={`${styles.websiteMenu} nav-link`} onClick={() => moveToPositions()} style={{ cursor: 'pointer' }}>Plans & Pricing</span>
                        </li>
                        <li className={`nav-item ${styles.navItems}`}>
                            <Link className={`${styles.websiteMenu} nav-link`} href="#">For Kids</Link>
                        </li>
                        <li className={`nav-item ${styles.navItems}`}>
                            <Link className={`${styles.websiteMenu} nav-link`} href="#">For IELTS</Link>
                        </li>
                        <li className={`nav-item ${styles.navItems}`}>
                            <Link className={`${styles.websiteMenu} nav-link`} href="#">Courses</Link>
                        </li>
                        <li className={`nav-item ${styles.navItems}`}>
                            <Link className={`${styles.websiteMenu} nav-link`} href="#">For Organizations <span style={{ fontSize: '12px', color: 'red' }}>New</span></Link>
                        </li>
                        <li className={`nav-item ${styles.navItems} mt-2`}>
                            <button type="button" className={`btn ${styles.btnColorOutline}`}>Login</button>
                        </li>
                        <li className={`nav-item ${styles.navItems} mt-2`}>
                            <button type="button" className={`btn ${styles.btnColorOutline2}`}>Book Your Trial</button>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
        </div>
    )
}
