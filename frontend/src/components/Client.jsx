import React from 'react'
import './Client.css'

const Client = () => {
    return (
        <div className='main-client'>
            <div className='heading'>What our clients have to say</div>
            <div className='main-container'>
                <div className='first-box-client'>
                    <div>
                        <div className='playbtn'><img src="/Polygon 2.png" alt="" />
                        </div>
                    </div>
                    <p>Holly is a <span>senior executive</span> who got over <span>10 jobs interviews</span> and an offer she accepated</p>
                </div>
                <div className='first-box-client'>
                    <div>
                        <div className='playbtn'><img src="/Polygon 2.png" alt="" />
                        </div>
                    </div>
                    <p>Holly is a <span>senior executive</span> who got over <span>10 jobs interviews</span> and an offer she accepated</p>
                </div>
                <div className='first-box-client'>
                    <div>
                        <div className='playbtn'><img src="/Polygon 2.png" alt="" />
                        </div>
                    </div>
                    <p>Holly is a <span>senior executive</span> who got over <span>10 jobs interviews</span> and an offer she accepated</p>
                </div>
            </div>
            <div className='buttons'>
                <button className='btn1-client'>More custom Testimonials ↗</button>
                <button className='btn2-client'>Get started ➔</button>
            </div>
        </div>
    )
}

export default Client