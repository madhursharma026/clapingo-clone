import styles from '../../../styles/Homepage/Section7.module.css';

export default function Section7() {
    return (
        <div className={styles.section7Container}>
            <div className="py-5">
                <h1 className={styles.mainHeading2}>Have a question? <br /> Find the answers in our <span style={{ color: '#24A791' }}>FAQ:</span></h1>
                <div className='p-4 mt-3' style={{ background: '#E5E5E5', borderRadius: '20px' }}>
                    <h4><span style={{ background: '#2EB5A1', borderRadius: '100%', color: 'white', fontSize: '20px', marginRight: '20px' }} className='py-2 px-3'>1</span>What is EnglishN?</h4>
                    <p className='px-5 py-3' style={{ fontSize: '18px' }}><b>EnglishN</b> is a unique platform where you practice conversations live with various tutors across the country. This is a judgment-free space where people can freely speak with a diverse set of people from different backgrounds</p>
                    <h5 className='px-5'>Why EnglishN?</h5>
                    <ul style={{ paddingLeft: '70px' }}>
                        <li>You get one-on-one tutoring so you have the freedom to ask for whatever help you need.</li>
                        <li>The tutors on EnglishN are excellent communicators, they also help learners identify their weak areas and suggest ways to transform.</li>
                        <li>Regular conversation practice automatically helps anyone master speaking skills.</li>
                        <li>Get access to all your recorder videos so that you can analyse yourself later</li>
                        <li>Talk on a different topic in each session using EnglishN's Session Documents.</li>
                    </ul>
                </div>

                <div className='p-4 mt-3' style={{ background: '#E5E5E5', borderRadius: '20px' }}>
                    <h4><span style={{ background: '#2EB5A1', borderRadius: '100%', color: 'white', fontSize: '20px', marginRight: '20px' }} className='py-2 px-3'>2</span>How to book your EnglishN Sessions?</h4>
                </div>

                <div className='p-4 mt-3' style={{ background: '#E5E5E5', borderRadius: '20px' }}>
                    <h4><span style={{ background: '#2EB5A1', borderRadius: '100%', color: 'white', fontSize: '20px', marginRight: '20px' }} className='py-2 px-3'>3</span>How many sessions can I book in a week?</h4>
                </div>

                <div className='p-4 mt-3' style={{ background: '#E5E5E5', borderRadius: '20px' }}>
                    <h4><span style={{ background: '#2EB5A1', borderRadius: '100%', color: 'white', fontSize: '20px', marginRight: '20px' }} className='py-2 px-3'>4</span>What is included in the Subscription?</h4>
                </div>

                <div className='p-4 mt-3' style={{ background: '#E5E5E5', borderRadius: '20px' }}>
                    <h4><span style={{ background: '#2EB5A1', borderRadius: '100%', color: 'white', fontSize: '20px', marginRight: '20px' }} className='py-2 px-3'>5</span>Can I choose a tutor of my choice OR change a tutor at any point?</h4>
                </div>
            </div>
        </div>
    )
}
