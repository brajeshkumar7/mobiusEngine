import React from 'react'
import './HowWeWork.css'

const HowWeWork = () => {
    return (
        <div className='how-we-work-main'>
            <div className='first-container'><a href='#steps'>How We Work?</a></div>
            <div className='second-container'>
                <div className='first-box'>
                    <div className='number'>
                        <p>1</p>
                    </div>
                    <div className='line'></div>
                    <div className='text'>Submit Intake Form</div>
                </div>
                <div className='second-box'>
                    <div className='number'>
                        <p>2</p>
                    </div>
                    <div className='line'></div>
                    <div className='text'>We do the search and curation for list of jobs</div>
                </div>
                <div className='third-box'>
                    <div className='number'>
                        <p>3</p>
                    </div>
                    <div className='line'></div>
                    <div className='text'>You approve, we do the tedious part (Applying)</div>
                </div>
                <div className='fourth-box'>
                    <div className='number'>
                        <p>4</p>
                    </div>
                    <div className='line'></div>
                    <div className='text'>You get the interviews</div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork