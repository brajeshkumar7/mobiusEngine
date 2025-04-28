import React from 'react'
import './WhyChooseUs.css'
const WhyChooseUs = () => {
    return (
        <div className='why-choose-us'>
            <div className='heading-why'>Why Choose Us?</div>
            <div className='main-container-why'>
                <div className='first-box-why'>
                    <div className='logo-why'>
                        <img src="/Asset 3 1.png" alt="" />
                    </div>
                    <div className='line-why'>Tried, Tested, Trusted</div>
                    <div className='text-why'>
                        Built by folks with 40+ years in tech and hiring - we know the game, and we've got your back.
                    </div>
                </div>
                <div className='second-box-why'>
                    <div className='logo-why'><img src="/Profile 1.png" alt="" /></div>
                    <div className='line-why'>Real People, Real Help</div>
                    <div className='text-why'>
                        A hands-on team that actually cares -- guiding you through every twist in your career path.
                    </div>
                </div>
                <div className='third-box-why'>
                    <div className='logo-why'>
                        <img src="/Star 1.png" alt="" />
                    </div>
                    <div className='line-why'>Beat the Line</div>
                    <div className='text-why'>
                        We search, shortlist, and apply for you, so your name shows up first -- every single day.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs