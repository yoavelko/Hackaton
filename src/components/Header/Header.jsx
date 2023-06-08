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
        <div>
        <div id='header-container'>
            <Link to='/'><div id='logo'>Envirum</div></Link>
            <Link to='/RecyclePage'><div className='header-links' id='recycle-link'>Recycle</div></Link>
            <Link to='/Environment'><div className='header-links' id='env-link'>Environment</div></Link>
            <Link to='/SecondHand'><div className='header-links' id='shand-link'>Second Hand</div></Link>
            <Link to='/Login'><div className='header-links' id='login-link' onClick={handleLogout}>{login}</div></Link>
        </div>
        <div>
            <div id="dropdown-navbar">
            <input type="checkbox" id="check"/>
            <label for="check" class="button">
        <span></span>
        <span></span>
        <span></span>
            </label>
            <nav> 
            <Link to='/'><option ><div id='logo'>Envirum</div></option></Link>
            <Link to='/RecyclePage'><option ><div className='header-links' id='recycle-link'>Recycle</div></option></Link>
            <Link to='/Environment'><option ><div className='header-links' id='env-link'>Environment</div></option></Link>
            <Link to='/SecondHand'><option ><div className='header-links' id='shand-link'>Second Hand</div></option></Link>
            <Link to='/Login'><option ><div className='header-links' id='login-link' onClick={handleLogout}>{login}</div></option></Link>
            </nav>
            </div>
        </div>
        </div>
    )
}

export default Header