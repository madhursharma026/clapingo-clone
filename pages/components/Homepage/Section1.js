import styles from '../../../styles/Homepage/Section1.module.css';

export default function Section1() {
    return (
        <>
            <div className="px-3">
                <div className={`row ${styles.section1ContainerBeforeLGScrn}`} style={{ paddingTop: '280px', paddingBottom: '200px', background: '#F6F5EE' }}>
                    <div className="col-6">
                        <div className={styles.leftSideContainerBeforeLGScrn}>
                            <h1 className={styles.mainHeadingBeforeLGScrn}><b>Live, one-on-one online classes for English.</b></h1>
                            <p className={`${styles.subHeadingBeforeLGScrn} py-3`}>Practice English conversation with excellent communicators across the country and speak like a <b>PRO</b> 😎.</p>

                            <button type="button" className={`btn ${styles.btnColorOutline} py-3 px-4`}>Book Your Trial @99</button>
                            <p className="text-muted mt-4">
                                <b>Download the App</b>
                                <br />
                                <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/gplay.png&w=135&h=40&output=webp" alt="#ImgNotFound" />
                                <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/apple.png&w=135&h=40&output=webp" alt="#ImgNotFound" className="mx-2" />
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={styles.rightSideContainer}>
                            <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/top.png&w=542&h=484&output=webp" alt="#ImgNotFound" className={styles.rightSideContainerImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`px-4 ${styles.section1ContainerAfterLGScrn}`} style={{ paddingTop: '280px', paddingBottom: '200px', background: '#F6F5EE' }}>
                <h1><b>Live, one-on-one online classes for English.</b></h1>
                <p className={`py-3 ${styles.subHeadingAfterLGScrn}`}>Practice English conversation with excellent communicators across the country and speak like a <b>PRO</b> 😎.</p>
                <button type="button" className={`btn ${styles.btnColorOutline} py-3 px-4 w-100`}>Book Your Trial @99</button>
                <p className="text-muted mt-4">
                    <b>Download the App</b>
                    <br />
                    <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/gplay.png&w=135&h=40&output=webp" alt="#ImgNotFound" />
                    <img src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/apple.png&w=135&h=40&output=webp" alt="#ImgNotFound" className="mx-2" />
                </p>
            </div>
        </>
    )
}
