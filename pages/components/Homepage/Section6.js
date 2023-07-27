import styles from '../../../styles/Homepage/Section6.module.css';

export default function Section6() {
    return (
        <div className={styles.section6Container}>
            <div className={`row py-5`}>
                <div className="col-lg-6">
                    <h1 className={styles.mainHeading}>Download our App now!</h1>
                    <div className="row">
                        <div className="col-6 my-4">
                            <h3>100k+</h3>
                            <h6 style={{ marginTop: '-5px', fontSize: '14px' }}>Mobile Downloads</h6>
                        </div>
                        <div className="col-6 my-4">
                            <h3>100k+</h3>
                            <h6 style={{ marginTop: '-5px', fontSize: '14px' }}>Mobile Downloads</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 my-4">
                            <div style={{ marginTop: '-5px', fontSize: '14px' }}>
                                <h3>100k+</h3>
                                <h6 style={{ marginTop: '-5px', fontSize: '14px' }}>Mobile Downloads</h6>
                            </div>
                        </div>
                        <div className="col-6 my-4">
                            <h3>100k+</h3>
                            <h6 style={{ marginTop: '-5px', fontSize: '14px' }}>Mobile Downloads</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.rightSideContainer} style={{ maxHeight: '350px', overflow: 'hidden' }}>
                        <img src="https://clapingo.com/_next/image?url=https%3A%2F%2Fimages.weserv.nl%2F%3Furl%3Dhttps%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fcdn.clapingo.com%2FclapingoWeb%2Fbottom.png%26w%3D735%26h%3D836%26output%3Dwebp&w=750&q=75" alt="#ImgNotFound" style={{ maxHeight: '600px', marginTop: '-100px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
