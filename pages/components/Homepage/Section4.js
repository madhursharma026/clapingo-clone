import { useRef, useEffect } from 'react';
import styles from '../../../styles/Homepage/Section4.module.css';

export default function Section4() {
    const myRef = useRef()

    useEffect(() => {
        localStorage.setItem('divPositionHeight', myRef.current.offsetTop);
    }, []);
    return (
        <>
            <div className={`${styles.section4Container} py-5`} ref={myRef}>
                <div className={styles.leftSideContainer}>
                    <h1 className={styles.mainHeading}>Planning to <br /><span style={{ color: '#4A6EE0' }}>Subscribe</span> EnglishN?</h1>
                    <ul className='mt-4'>
                        <li className={`my-3 ${styles.liStyle}`}>☑ Practice Speaking Skills</li>
                        <li className={`my-3 ${styles.liStyle}`}>☑ Recorded Sessions</li>
                        <li className={`my-3 ${styles.liStyle}`}>☑ Friendly Environment</li>
                        <li className={`my-3 ${styles.liStyle}`}>☑ Learn at your Own Pace</li>
                        <li className={`my-3 ${styles.liStyle}`}>☑ Undivided Attention</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-4 my-3">
                        <div class={`card ${styles.cardStyle}`}>
                            <div class={`card-body p-0`}>
                                <div style={{ background: 'linear-gradient(48.62deg, #8b997d -4.59%, #ccdcbc 47.23%, #d1e1c1 63.38%, #d1e1c1 101.51%)', padding: '20px' }}>
                                    <img src="https://clapingo.com/_next/static/media/english.ea28a922.svg" alt="#ImgNotFound" style={{ height: '60px', background: 'white', borderRadius: '100%', padding: '10px' }} />
                                    <span style={{ marginLeft: '20px', fontSize: '24px', color: '#0E433A' }}><b>English</b></span>
                                </div>
                                <div className="p-3">
                                    <h3>6 months Plan</h3>
                                    <p style={{ marginTop: '-10px' }}>This plan includes:</p>
                                    <p style={{ marginTop: '-10px' }}>- 5 days a week</p>
                                    <p style={{ marginTop: '-10px' }}>- 120 sessions for 6 months</p>
                                    <p style={{ marginTop: '-10px' }}>- One on one session</p>
                                    <button type="button" className={`btn ${styles.btnColorOutline} py-2 px-3 w-100`}>Book Your Trial | ₹ 2729 /mo.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3">
                        <div class={`card ${styles.cardStyle}`}>
                            <div class={`card-body p-0`}>
                                <div style={{ background: 'linear-gradient(48.62deg, #8b997d -4.59%, #ccdcbc 47.23%, #d1e1c1 63.38%, #d1e1c1 101.51%)', padding: '20px' }}>
                                    <img src="https://clapingo.com/_next/static/media/english.ea28a922.svg" alt="#ImgNotFound" style={{ height: '60px', background: 'white', borderRadius: '100%', padding: '10px' }} />
                                    <span style={{ marginLeft: '20px', fontSize: '24px', color: '#0E433A' }}><b>English</b></span>
                                </div>
                                <div className="p-3">
                                    <h3>6 months Plan</h3>
                                    <p style={{ marginTop: '-10px' }}>This plan includes:</p>
                                    <p style={{ marginTop: '-10px' }}>- 5 days a week</p>
                                    <p style={{ marginTop: '-10px' }}>- 120 sessions for 6 months</p>
                                    <p style={{ marginTop: '-10px' }}>- One on one session</p>
                                    <button type="button" className={`btn ${styles.btnColorOutline} py-2 px-3 w-100`}>Book Your Trial | ₹ 2729 /mo.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3">
                        <div class={`card ${styles.cardStyle}`}>
                            <div class={`card-body p-0`}>
                                <div style={{ background: 'linear-gradient(48.62deg, #8b997d -4.59%, #ccdcbc 47.23%, #d1e1c1 63.38%, #d1e1c1 101.51%)', padding: '20px' }}>
                                    <img src="https://clapingo.com/_next/static/media/english.ea28a922.svg" alt="#ImgNotFound" style={{ height: '60px', background: 'white', borderRadius: '100%', padding: '10px' }} />
                                    <span style={{ marginLeft: '20px', fontSize: '24px', color: '#0E433A' }}><b>English</b></span>
                                </div>
                                <div className="p-3">
                                    <h3>6 months Plan</h3>
                                    <p style={{ marginTop: '-10px' }}>This plan includes:</p>
                                    <p style={{ marginTop: '-10px' }}>- 5 days a week</p>
                                    <p style={{ marginTop: '-10px' }}>- 120 sessions for 6 months</p>
                                    <p style={{ marginTop: '-10px' }}>- One on one session</p>
                                    <button type="button" className={`btn ${styles.btnColorOutline} py-2 px-3 w-100`}>Book Your Trial | ₹ 2729 /mo.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
