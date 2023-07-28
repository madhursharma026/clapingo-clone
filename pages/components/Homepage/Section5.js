import styles from '../../../styles/Homepage/Section5.module.css';

export default function Section5() {
    return (
        <>
            <div className={`${styles.section5Container} py-5`}>
                <div className="text-center">
                    <h1 className={styles.mainHeading}>Just don't take our word for it.</h1>
                    <h1 className={styles.mainHeading} style={{ marginTop: '-15px' }}>Look what our <span style={{ color: '#4A6EE0' }}>Learners</span> have to say.</h1>
                </div>
                <div className="row">
                    <div className={`col-xl-4 my-3 ${styles.container1}`}>
                        <div class={styles.imgContainer}>
                            <img src="https://clapingo.com/_next/static/media/feedback-left.b4113833.svg" alt="ImgNotFound" className={styles.imageContainer} />
                            <div class={styles.imgText}>
                                <h5>Shahbaz Shaikh, Pune</h5>
                                <p>EnglishN helped me a lot in improving my english speaking skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-xl-4 my-3 ${styles.container2}`}>
                        <div class={styles.imgContainer}>
                            <img src="https://clapingo.com/_next/static/media/feedback-center.db4f675d.svg" alt="#ImgNotFound" className={styles.imageContainer} />
                            <div class={styles.imgText}>
                                <h5>Ajanti, Ghaziabad</h5>
                                <p>What a Unique and Realistic way of coaching and mentoring!!! It is a well-known fact in the universe that practice makes a man perfect and so is the mantra of EnglishN. Awesome speakers, patient, give ample tips and guide you throughout the sessions. Lifetime opportunity - worth to invest.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-xl-4 my-3 ${styles.container3}`}>
                        <div class={styles.imgContainer}>
                            <img src="https://clapingo.com/_next/static/media/feedback-right.dae40e86.svg" alt="#ImgNotFound" className={styles.imageContainer} />
                            <div class={styles.imgText}>
                                <h5>kirti, Delhi</h5>
                                <p>EnglishN not only helped me to improve my speaking skills but it also helped me to boost my confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
