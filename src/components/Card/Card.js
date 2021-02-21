import React from 'react'
import './Card.css'

const Card = ({ title, repo, image, alt }) => {
    return (
        <div className='catwrap'>
            <div className='maintitle'>
                <a href={repo}> {title} </a>
            </div>

            <div className='fwrap-flex'>
                <img src={image} alt={alt} />
            </div>
        </div>
    )
}

export default Card
