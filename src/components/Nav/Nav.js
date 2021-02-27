import './Nav.css'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <div id='toplinks'>
            <div className='buttons'>

            <Link activeClass='active'
                  to='home'
                  smooth={true}
                  offset={0} 
                  duration={500}
                  spy={true}> home </Link>

            <Link activeClass='active'
                  to='about'
                  smooth={true}
                  offset={-80} 
                  duration={500}
                  spy={true}> about </Link>

            <Link activeClass='active'
                  to='portfolio'
                  smooth={true}
                  offset={-80} 
                  duration={500}
                  spy={true}> portfolio </Link>

            <Link activeClass='active'
                  to='contact'
                  smooth={true}
                  offset={0} 
                  duration={500}
                  spy={true}> contact </Link>

            </div>
        </div>
    )
}

export default Nav