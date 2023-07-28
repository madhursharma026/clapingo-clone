import styles from '../../../styles/Homepage/Section3.module.css';

export default function Section3() {
    return (
        <>
            <div className={`${styles.section3Container} py-5`}>
                <div className={`row`}>
                    <div className="col-lg-7">
                        <div className={styles.leftSideContainer}>
                            <h1 className={styles.mainHeading}>Why <b>EnglishN</b> is your best option?</h1>
                            <ul className='mt-4'>
                                <li className={`my-3 ${styles.liStyle}`}>☑ Practice Speaking Skills</li>
                                <li className={`my-3 ${styles.liStyle}`}>☑ Recorded Sessions</li>
                                <li className={`my-3 ${styles.liStyle}`}>☑ Friendly Environment</li>
                                <li className={`my-3 ${styles.liStyle}`}>☑ Learn at your Own Pace</li>
                                <li className={`my-3 ${styles.liStyle}`}>☑ Undivided Attention</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.rightSideContainer}>
                            <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/whyclapingo.png&w=542&h=484&output=webp" alt="#ImgNotFound" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4' style={{textAlign: 'center'}}>
                <button type="button" className={`btn ${styles.btnColorOutline} py-3 px-4`}>Book Your Trial</button>
            </div>
        </>
    )
}
