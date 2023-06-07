import './Login.css'
import { useContext } from 'react'
import { LoggedContext } from '../../context/LoggedContext'

function Login() {

    const { logged, setLogged } = useContext(LoggedContext);

    function handleLog() {
        
    }

    return (
        <div id='Login-page-conatiner'>
            <div id='logSignContainer'>
                <div id='loginContainer' className='dualContainer'>
                    <h1 className='headers'>Login</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <input className='inputs' type="text" />
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <input className='inputs' type="text" />
                    </div>
                    <button id='login-submit' className='sub-btns' onClick={handleLog}>Submit</button>
                </div>

                <div id='breaker'>
                    <span id='or'>Or</span>
                </div>

                <div id='mediaBreaker'>
                    <span id='or'>Or</span>
                </div>

                <div id='signupContainer' className='dualContainer'>
                    <h1 className='headers'>Sign-Up</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <input className='inputs' type="text" />
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <input className='inputs' type="text" />
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO1XTWsTYRB+C1EQvxPCvs/zbhII1ko8iKYi+A+8WL2K0Kb+Btur0PYPqAcFS/FnaIygoAet56onsb1a0NjmpJFpZnEt+9V0tSAdGAg7X8/szM5MjNmnjERyDMAsgGckV0h+V14B0AYwIzomb7LWjgPokOxnYQCvSF7edeBms3kAwH2SP9XxF5KPSF6VTD3POyysb2YCwKLq9NXmnjGmMFTwarV6EsBzdbYBYK5YLB5LsxMdAPMANhV0R3wNk3lHHaxJCXaagHPuHMlPmsDLRqNxMLMxBq9dgn+uVCo0Q5LYAlhVEHczGVlrx7V+GyTPR6iMALhF8h2AnjDJZZItkUUkc0HL8UN+pwLA71c/FxP8cUL3L0WBILmg8nZicJJjQbdHNZxmLsG+kpyq1WonhElO6zORTW23q9frxwGsi9w5N5qU/awCWIwBuBwXREGI7E2M7yWV304C0FYAEzFyqXdfst4uk09NbXsxttcVwNMkAB9Fyff9U1HyoNZx9knyUHnfxwIg2RWlcrl8JG8A4lPl3SQA3/4WgCxyA+CDKp3eKwDt3TZhhibdTAIwk/IZvtUgrYQZESlP+0wzDaKQExk6rWAQafCt/gnJp2MG1aRJIgyuHQExHzOKg4ESxQ+VdzSq/yAATVlGUquY5TEik1DKoctI9F5ba28GCvJbnqmsp6WbTA0ekFwyinjV931n9oAKoVLIQXLxnyOoDk6yYDXLPl+QrZZmVyqVjgK4kReOglwyoaN0XRoJwDUAZ2Ri+r5/yFpb06P0QbB2rbVX8gJh9KrZGlIZ+YVz7pLJm5xzo7LPZaXqH5OudvoayScA7niedzb3wPv039Mv2m449ye7LZQAAAAASUVORK5CYII=" alt="private2" />
                        <input className='inputs' type="text" />
                    </div>
                    <div id='terms'>
                        <input type="checkbox" /> Agree to <span id='termsLink'>terms & conditions</span>
                    </div>
                    <button id='signup-submit' className='sub-btns'>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Login