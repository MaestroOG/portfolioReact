import React from 'react'
import './footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <div className="copyright">{date.getFullYear()} © Muneeb-Ur-Rehman</div>
            <div className="rights">All Rights Reserved.</div>
        </footer>
    )
}

export default Footer
