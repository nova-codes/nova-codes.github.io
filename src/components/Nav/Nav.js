import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div id='toplinks'>
            <div class='buttons'>

            <Link to='/'> home </Link>

            <Link to='/portfolio'> portfolio </Link>

            <Link to='/about'> about </Link>

            <Link to='/contact'> contact </Link>
            
            </div>
        </div>
    )
}

export default Nav
