import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <h1>Connect With <span id='h-diff'>Me</span>.</h1>
            <form>
                <input type="text" placeholder='Enter name' />
                <input type="email" placeholder='Enter email' />
                <button className='btn'>Let's Connect</button>
            </form>
        </div>
    )
}

export default Contact
