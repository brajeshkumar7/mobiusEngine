import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-us-main'>
            <div className='heading'>About Us</div>
            <div className='main-container'>
                <img src="/Group 127.png" alt="" />
            </div>
            <div className='links'>
                <a href="#">Learn More about our Board of Advisors ↗</a>
                <a href="#" className='second-link'>Follow us on linkedin page ↗</a>
            </div>
        </div>
    )
}

export default AboutUs