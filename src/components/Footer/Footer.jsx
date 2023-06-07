import './Footer.css'

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
                    <div className='footer-elements'>Recycle Forum</div>
                    <div className='footer-elements'>Environment Maintance Forum</div>
                    <div className='footer-elements'>Second Hand Forum</div>
                </div>
            </div>
            <div id='rights'>כל הזכויות שמורות לנו ©</div>
        </div>
    )
}

export default Footer