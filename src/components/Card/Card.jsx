import React from 'react'
import './card.css'
import { assets } from '../Asset/asset'

const Card = () => {
    return (
        <div className='card-holder'>
            {assets.map((asset) => {
                return (
                    <div key={asset.id}>
                        <img src={asset.icon} alt="Icon" />
                        <h1>{asset.title}</h1>
                        <p>{asset.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
