import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    
    return (
        <div id='header-container'>
            
            <Link to='/'><div id='logo'>Envirum</div></Link>
            <Link to='/RecyclePage'><div className='header-links' id='recycle-link'>Recycle</div></Link>
            <Link to='/Environment'><div className='header-links' id='env-link'>Environment</div></Link>
            <Link to='/SecondHand'><div className='header-links' id='shand-link'>Second Hand</div></Link>
            <Link to='/Login'><div className='header-links' id='login-link'>Login</div></Link>
        </div>
    )
}

export default Header