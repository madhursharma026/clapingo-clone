import styles from '../../../styles/TeachWithUs/Section1.module.css';

export default function Section2() {
    return (
        <div className='mb-5'>
            <div className="p-xl-5">
                <div className={`row ${styles.section1Container}`}>
                    <div className="col-xxl-5">
                        <h1>Perks of being an <span style={{ color: '#50B9A7' }}>Awesome</span> Instructor</h1>
                        <p className="text-muted">
                            Our platform provides the learners with a safe space to communicate their insecurities and weaknesses. They are looking to have a conversation with people who are fluent in English. We provide them with credible, actionable and practical advice to reach their desired goals. We accept applications from anyone with excellent Communication & conversational skills. No prior experience or degree required.
                        </p>
                    </div>
                    <div className="col-xxl-7">
                        <div className="row">
                            <div className="col-xxl-4 col-md-6 mt-3">
                                <div class="card" style={{ background: '#EDF1FC' }}>
                                    <div class="card-body p-4">
                                        <img src="https://clapingo.com/_next/static/media/home.3fe4c887.svg" alt="#ImgNotFound" style={{ width: '50px' }} />
                                        <br />
                                        <h5 className='mt-2' style={{ color: '#4A99EB' }}>Work from anywhere</h5>
                                        <p>Teach learners from the comfort of your own home. Whenever you want and from wherever you want!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6 mt-3">
                                <div class="card" style={{ background: '#EEF4E8' }}>
                                    <div class="card-body p-4">
                                        <img src="https://clapingo.com/_next/static/media/home.3fe4c887.svg" alt="#ImgNotFound" style={{ width: '50px' }} />
                                        <br />
                                        <h5 className='mt-2' style={{ color: '#778873' }}>Work from anywhere</h5>
                                        <p>Teach learners from the comfort of your own home. Whenever you want and from wherever you want!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6 mt-3">
                                <div class="card" style={{ background: '#E8DDCD' }}>
                                    <div class="card-body p-4">
                                        <img src="https://clapingo.com/_next/static/media/home.3fe4c887.svg" alt="#ImgNotFound" style={{ width: '50px' }} />
                                        <br />
                                        <h5 className='mt-2' style={{ color: '#B88B52' }}>Work from anywhere</h5>
                                        <p>Teach learners from the comfort of your own home. Whenever you want and from wherever you want!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6 mt-3 offset-xxl-4">
                                <div class="card" style={{ background: '#EEF4E8' }}>
                                    <div class="card-body p-4">
                                        <img src="https://clapingo.com/_next/static/media/home.3fe4c887.svg" alt="#ImgNotFound" style={{ width: '50px' }} />
                                        <br />
                                        <h5 className='mt-2' style={{ color: '#E57A38' }}>Work from anywhere</h5>
                                        <p>Teach learners from the comfort of your own home. Whenever you want and from wherever you want!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
