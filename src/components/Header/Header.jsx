import './Header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoggedContext } from '../../context/LoggedContext'
import { LoginContext } from '../../context/LoginContext'
import { IndexContext } from '../../context/IndexContext'

function Header() {

    const { login, setLogin } = useContext(LoginContext);
    const { userIndex, setUserIndex } = useContext(IndexContext);

    function handleLogout() {
        if (login === 'Logout') {
            setUserIndex('')
            setLogin('Login')
        }
    }
    
    return (
        <div id='header-container'>
            
            <Link to='/'><div id='logo'>Envirum</div></Link>
            <Link to='/RecyclePage'><div className='header-links' id='recycle-link'>Recycle</div></Link>
            <Link to='/Environment'><div className='header-links' id='env-link'>Environment</div></Link>
            <Link to='/SecondHand'><div className='header-links' id='shand-link'>Second Hand</div></Link>
            <Link to='/Login'><div className='header-links' id='login-link' onClick={handleLogout}>{login}</div></Link>
        </div>
    )
}

export default Header