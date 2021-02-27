import React from 'react'
import './Header.css'
import ScrollReveal from 'scrollreveal'

const Header = () => {

    React.useEffect(() => {
        ScrollReveal().reveal('.header', { delay: 700});
        ScrollReveal().reveal('.header span', {delay: 2600});
    }, [])

    return (
        <div id='home'>
            <header>
                <big className='header load-hidden'> 
                    <span>c</span>osmic <br/>
                    ch<span>i</span>ll <br/>
                    loun<span>g</span>e
                </big>
            </header>
        </div>
    )
}

export default Header