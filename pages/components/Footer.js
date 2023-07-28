import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.mainContainer}>
            <div className="row p-xl-5">
                <div className="col-xl-3 my-3">
                    <Link className="navbar-brand" href="/">
                        <img src="https://clapingo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.700994a7.png&w=48&q=75" alt="#ImgNotFound" />
                        <span className={styles.websiteLogo}>EnglishN</span>
                    </Link>
                    <p className='text-white mt-3 px-xl-4' style={{ fontSize: '15px' }}>EnglishN is a unique platform where you practice conversations live with various speakers across the country. This is a judgment-free space where people can freely speak with a diverse set of people from different backgrounds.</p>
                    <p className='text-white mt-3 px-xl-4' style={{ fontSize: '15px' }}>
                        <i class="mx-2 fa fa-facebook-f"></i>
                        <i class="mx-2 fa fa-instagram"></i>
                        <i class="mx-2 fa fa-linkedin"></i>
                        <i class="mx-2 fa fa-twitter"></i>
                        <i class="mx-2 fa fa-pinterest"></i>
                    </p>
                    <p className='text-white mt-3 px-xl-4' style={{ fontSize: '15px' }}>© 2022 EnglishN Education All rights reserved</p>
                </div>
                <div className="col-xl-3 my-3">
                    <h5 className="text-white px-xl-4">
                        Reach us
                    </h5>
                    <p className='text-white mt-3 px-xl-4' style={{ fontSize: '15px' }}>
                        info@englishN.com
                        <br />
                        <br />
                        DLF Capital Greens,
                        Shivaji Marg, New Delhi-110015
                        Phone no: 08047360185
                    </p>
                </div>
                <div className="col-xl-3 my-3">
                    <h5 className="text-white px-xl-4">
                        Plans and Pricing
                    </h5>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>For Kids</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>For IELTS</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>Book your trial</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>Teach with us</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>Affiliate Program</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>Practice Club</Link>
                    <Link className='px-xl-4' href="#" style={{ display: 'block', color: '#D1D5DB', textDecoration: 'none' }}>Privacy Policy</Link>
                </div>
                <div className="col-xl-3 my-3">
                    <h5 className="text-white px-xl-4">
                        Install App
                    </h5>
                    <div className="row">
                        <div className="col-xl-12 col-6">
                            <img src="https://clapingo.com/_next/image?url=https%3A%2F%2Fimages.weserv.nl%2F%3Furl%3Dhttps%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fcdn.clapingo.com%2FclapingoWeb%2Fgplay.png%26w%3D135%26h%3D40%26output%3Dwebp&w=256&q=75" alt="" />
                        </div>
                        <div className="col-xl-12 col-6">
                            <img src="https://clapingo.com/_next/image?url=https%3A%2F%2Fimages.weserv.nl%2F%3Furl%3Dhttps%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fcdn.clapingo.com%2FclapingoWeb%2Fapple.png%26w%3D135%26h%3D40%26output%3Dwebp&w=256&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
