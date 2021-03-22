import React from 'react'
import './Card.css'

const Card = ({ title, repo, image, alt, desc, tech, feature }) => {
    return (
        <div className='catwrap'>
            <div className='maintitle'>
                <a title={title}> {title} </a>
            </div>
            
            <div className='wrap-flex-col'>
                <img src={image} alt={alt} />
            </div>

            <div className='wrap-flex-col'>
                <div className='desc'>
                <ul>
                    <li> {desc} </li>
                    <li> {feature} </li>
                    <li> <a target='_blank' rel='noreferrer' href={repo}> view on github </a> </li>
                </ul>
                </div>
                
                <div className='technologies'> <span> {tech} </span> </div>
            </div>
        </div>
    )
}

export default Card
