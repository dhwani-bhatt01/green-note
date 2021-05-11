import React from 'react'
import './Header-Sign-up'
import Button from '../Button/Button'

function HeaderSignUp() {
    return (
        <div className='header'>
            <h1 className="header-heading">
                Accomplish more with better notes
            </h1>
            <p className="header-subheading">
                Evernote helps you capture ideas and find them fast.
            </p>
            <button className='btn sign-up'>Sign up for free</button>
            <p className="header-login">
                Already have an account? Log in
            </p>
        </div>
    )
}

export default HeaderSignUp
