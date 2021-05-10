import React from 'react'
import './Hero-Section'

function HeroSection() {
    return (
        <div className = 'hero-section'>
            <div className="hero-img">
                <img src="" alt="" />
            </div>
            <div className="hero-content">
                <h2 className="hero-heading">
                    WORK ANYWHERE
                </h2>
                <p className="hero-para">
                    Keep important info handy by syncing your notes to all your devices.
                </p>
                <h2 className="hero-heading">
                    CAPTURE WHAT MATTERS
                </h2>
                <p className="hero-para">
                    Add text, images, audio, scans, PDFs, and documents to your notes.
                </p>
                <h2 className="hero-heading">
                    YOUR NOTES, YOUR WAY
                </h2>
                <p className="hero-para">
                    Express yourself with formatting tools that help you write how you think.
                </p>
                <h2 className="hero-heading">
                    FIND THINGS FAST
                </h2>
                <p className="hero-para">
                    Get what you need, when you need it. Search gives you results as you type.
                </p> 
            </div>
        </div>
    )
}

export default HeroSection
