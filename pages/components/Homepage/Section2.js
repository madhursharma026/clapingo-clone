import styles from '../../../styles/Homepage/Section2.module.css';

export default function Section2() {
    return (
        <div className={styles.section2Container}>
            <div className={`row mb-5`}>
                <div className="col-lg-6 mt-5">
                    <div className={styles.leftSideContainer}>
                        <h1 className={styles.mainHeading}>Conversations are easily forgotten.</h1>
                        <h1 className={styles.mainHeading2}>Recall and share every detail with <span style={{ color: '#24A791' }}>Clapingo.</span></h1>
                        <button type="button" className={`btn ${styles.btnColorOutline} py-3 px-4 mt-2`}>Book Your Trial</button>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className={styles.rightSideContainer}>
                        <iframe width="100%" height="304" src="https://www.youtube.com/embed/EnFqoUEKoHE" title="Join Clapingo to Improve Your English Speaking Skills. Book A Trial today!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
