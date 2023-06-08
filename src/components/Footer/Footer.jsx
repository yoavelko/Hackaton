import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <div id='extra-container'>
            <div id='footer-container'>
                <div className='footer-containers'>
                    <div className='footer-headers'>General Information</div>
                    <div className='footer-elements'>About Us</div>
                    <div className='footer-elements'>Contact Us</div>
                    <div className='footer-elements'>Frequently Asked Questions (FAQ)</div>
                    <div className='footer-elements'>Advertising and Sponsorship</div>
                </div>
                <div className='footer-containers'>
                    <div className='footer-headers'>User Guidelines and Policies</div>
                    <div className='footer-elements'>Forum Guidelines</div>
                    <div className='footer-elements'>Community Rules</div>
                    <div className='footer-elements'>Terms of Service</div>
                    <div className='footer-elements'>Privacy Policy</div>
                </div>
                <div className='footer-containers'>
                    <div className='footer-headers'>Navigate</div>
                    <Link to='/'><div className='footer-elements' onClick={() => window.scrollTo(0, 0)}>Homepage</div></Link>
                    <Link to='/RecyclePage'><div className='footer-elements' onClick={() => window.scrollTo(0, 0)}>Recycle Forum</div></Link>
                    <Link to='/Environment'><div className='footer-elements' onClick={() => window.scrollTo(0, 0)}>Environment Maintance Forum</div></Link>
                    <Link to='/SecondHand'><div className='footer-elements' onClick={() => window.scrollTo(0, 0)}>Second Hand Forum</div></Link>
                    <Link to='/Login'><div className='footer-elements' onClick={() => window.scrollTo(0, 0)}>Login / Signup</div></Link>
                </div>
            </div>
            <div id='rights'>כל הזכויות שמורות לנו ©</div>
        </div>
    )
}

export default Footer