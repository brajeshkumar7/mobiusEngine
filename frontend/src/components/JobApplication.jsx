import React from 'react'
import './JobApplication.css'
const JobApplication = () => {
    return (
        <div className="inner">
            <div className="job-apply">
                <span>Job Application Service Plans</span>
            </div>
            <div className="apply">
                <div className="table">
                    <div className="content">
                        <div className="head"><span>April Promo</span></div>
                        <div className="money">35$<span>/Week</span></div>
                        <div className="line4"><hr /></div>
                        <div className="desc"><img src="Group 137.png" alt="img" /></div>
                        <button className="btn">Get Started ➔</button>
                    </div>
                </div>
                <div className="table">
                    <div className="content">
                        <div className="head"><span>Starter</span></div>
                        <div className="money">50$<span>/Week</span></div>
                        <div className="line4"><hr /></div>
                        <div className="desc"><img src="Group 138.png" alt="img" /></div>
                        <button className="btn">Get Started ➔</button>
                    </div>
                </div>
                <div className="table">
                    <div className="content">
                        <div className="head"><span>Plus</span></div>
                        <div className="money">100$<span>/Week</span></div>
                        <div className="line4"><hr /></div>
                        <div className="desc"><img src="Group 142.png" alt="img" /></div>
                        <button className="btn">Get Started ➔</button>
                    </div>
                </div>
            </div>
            <div className="advance">
                <div className="money2">150$<span>/Week</span></div>
                <img src="Group 105.png" alt="img" />
                <button className="btn2">Get Started ➔</button>
            </div>
            <div classname="line2"><hr /></div>
        </div>
    )
}

export default JobApplication