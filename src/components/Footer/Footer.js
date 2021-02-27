import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaTumblr } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='contact'>
            <footer>
                <div className='links-con'>
                    <ul className='he-links'>
                        
                        <li className='he-li'>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/hgelliott/'> <FaLinkedin /> </a>
                        </li>

                        <li className='he-li'>
                            <a target='_blank' rel='noreferrer' href='https://nova-codes.tumblr.com/'> <FaTumblr /> </a>
                        </li>

                        <li className='he-li'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/nova-codes'> <FaGithub /> </a>
                        </li>

                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
