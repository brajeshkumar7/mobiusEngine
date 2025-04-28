import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='upper-part'>
                    <div className='icon'>
                        <img src="/Group 24.png" />
                    </div>
                    <div>
                        <ul className='link'>
                            <li><a href="#home">home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#plans">Plans</a></li>
                            <li><a href="#testimonial">Testimonial</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li className='more'>
                                More ▼
                            </li>
                        </ul>
                    </div>
                    <button className='get-started-btn'>getStarted</button>
                </div>
                <div className='lower-part'>
                    <div><img src="/Group 47.png" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Header