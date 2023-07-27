import styles from '../../../styles/TeachWithUs/Section1.module.css';

export default function Section1() {
    return (
        <>
            <div className="px-3">
                <div className={`row ${styles.section1Container}`} style={{ paddingTop: '180px', paddingBottom: '100px', background: '#F6F5EE' }}>
                    <div className="col-xl-6">
                        <div className={styles.leftSideContainer}>
                            <h1 className={styles.mainHeading}><b>Become a Clapingo <br /> <span style={{ color: '#50B9A7' }}>Instructor</span></b></h1>
                            <img src="https://clapingo.com/_next/static/media/Girl.1279abb7.svg" alt="#ImgNotFound" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={styles.rightSideContainer}>
                            <p className={`${styles.subHeading} py-3`}>We are looking for a dynamic crowd from different backgrounds. If you have excellent English communication skills and some free time, join us and help Learners across the globe tackle their English speaking challenges. This part-time job is flexible and will help you upskill yourself while making a steady weekly income.</p>
                            <button type="button" className={`btn ${styles.btnColorOutline} py-3 px-4`}>Book Your Trial @99</button>
                            <p className="text-muted mt-4">
                                <b>Download the App</b>
                                <br />
                                <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/gplay.png&w=135&h=40&output=webp" alt="#ImgNotFound" />
                                <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/apple.png&w=135&h=40&output=webp" alt="#ImgNotFound" className="mx-2" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
