import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className='main-container'>
            <h1 className="main-heading">
                Hello, I'm a Web <span id='h-diff'>Developer</span>.
            </h1>
            <p className='main-para'>Proficient in the world of Node.js and React.js to build dynamic and user-friendly websites.<br /> With a keen eye for design and a love for clean code, I'm dedicated to delivering top-notch <br />web solutions. Let's create something awesome together.
            </p>
            <button className='main-btn'>Let's Craft Together</button>
        </div>
    )
}

export default Home
