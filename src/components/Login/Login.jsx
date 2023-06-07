import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { LoggedContext } from '../../context/LoggedContext'
import { IndexContext } from '../../context/IndexContext'
import usersData from '../../user.json'
import { Link } from 'react-router-dom';

function Login() {

    const { logged, setLogged } = useContext(LoggedContext);
    const { userIndex, setUserIndex } = useContext(IndexContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passErr, setPassErr] = useState('')
    const [userErr, setUserErr] = useState('')
    const [mailErr, setMailErr] = useState('')
    const [signName, setSignName] = useState('');
    const [signPass, setSignPass] = useState('');
    const [signMail, setSignMail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    function handleLog() {

        const user = usersData.users.find(
            (u) => u.username === username && u.password === password
        );
        setLogged(username);
        for (let i = 0; i < usersData.users.length; i++) {
            if (usersData.users[i].username === username) {
                setUserIndex(i)
                console.log(i);
            }
        }

        if (user) {
            setError('');
            setLogged(username);
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    }

    function handleSign() {

        let checker = false

        if (signName < 4 || signName > 12) {
            setUserErr('Username must be 4 to 12 characters long.');
            checker = false
        } else {
            setUserErr('');
            checker = true
        }
        if (signPass.length < 7 || signPass.length > 12) {
            setPassErr('Password must be 8 to 12 characters long.');
            checker = false
        } else {
            setPassErr('');
            checker = true
        }
         if (signMail.includes('@') === false) {
            setMailErr('Invalid E-Mail.');
            checker = false
        } else {
            setMailErr('');
            checker = true
        }
        if (checker) {
            usersData.users.push(
                {
                    "username": signName,
                    "password": signPass,
                    "firstName": firstName,
                    "lastName": lastName,
                    "profilepic": "",
                    "email": signMail,
                    "rank": "",
                    "score": ""
                }
            )
        }
        console.log(usersData.users);
    }

    return (
        <div id='Login-page-conatiner'>
            <div id='logSignContainer'>
                <div id='loginContainer' className='dualContainer'>
                    <h1 className='headers'>Login</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <input className='inputs' type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <input className='inputs' type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    </div>
                    <div className='error-msg'>{error}</div>
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
                        <input className='inputs' type="text" onChange={(e) => setSignName(e.target.value)} placeholder='Username'/>
                    </div>
                        <div className='error-msg'>{userErr}</div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <input className='inputs' type="text" onChange={(e) => setSignPass(e.target.value)} placeholder='Password'/>
                    </div>
                        <div className='error-msg'>{passErr}</div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO1XTWsTYRB+C1EQvxPCvs/zbhII1ko8iKYi+A+8WL2K0Kb+Btur0PYPqAcFS/FnaIygoAet56onsb1a0NjmpJFpZnEt+9V0tSAdGAg7X8/szM5MjNmnjERyDMAsgGckV0h+V14B0AYwIzomb7LWjgPokOxnYQCvSF7edeBms3kAwH2SP9XxF5KPSF6VTD3POyysb2YCwKLq9NXmnjGmMFTwarV6EsBzdbYBYK5YLB5LsxMdAPMANhV0R3wNk3lHHaxJCXaagHPuHMlPmsDLRqNxMLMxBq9dgn+uVCo0Q5LYAlhVEHczGVlrx7V+GyTPR6iMALhF8h2AnjDJZZItkUUkc0HL8UN+pwLA71c/FxP8cUL3L0WBILmg8nZicJJjQbdHNZxmLsG+kpyq1WonhElO6zORTW23q9frxwGsi9w5N5qU/awCWIwBuBwXREGI7E2M7yWV304C0FYAEzFyqXdfst4uk09NbXsxttcVwNMkAB9Fyff9U1HyoNZx9knyUHnfxwIg2RWlcrl8JG8A4lPl3SQA3/4WgCxyA+CDKp3eKwDt3TZhhibdTAIwk/IZvtUgrYQZESlP+0wzDaKQExk6rWAQafCt/gnJp2MG1aRJIgyuHQExHzOKg4ESxQ+VdzSq/yAATVlGUquY5TEik1DKoctI9F5ba28GCvJbnqmsp6WbTA0ekFwyinjV931n9oAKoVLIQXLxnyOoDk6yYDXLPl+QrZZmVyqVjgK4kReOglwyoaN0XRoJwDUAZ2Ri+r5/yFpb06P0QbB2rbVX8gJh9KrZGlIZ+YVz7pLJm5xzo7LPZaXqH5OudvoayScA7niedzb3wPv039Mv2m449ye7LZQAAAAASUVORK5CYII=" alt="private2" />
                        <input className='inputs' type="text" onChange={(e) => setSignMail(e.target.value)} placeholder='E-Mail'/>
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO2WPU7DQBCFXaUDIVuy9701ckWKPQIcIogjIM6Cw01CQRrCBYCcAQ4QqCCClGlAI9aSFRxs5F1T4CdNM7Pr+TzrnxcEvXptyBgzIHkB4Jnkh4sA8ERyLNcO6kRy7KpxReS1APiilcWHgSMBOComUbuYltZV819flz0A60dFckhySnJl40prfdDJEZAcAlhWvGovaZrqLgCmtuG1NJQAMLO5yy4AVlIv3y3JfQvw1gXAu9S11umfAACY2GYzgZAAcGNzE+8ASqkMwLriIVxLzStAHMcJybsfvvW3SZLEXgCMMQMAc1t/ADCKomhHAsAxgEdbu6/667UGAHBWNM+ybG+zLrkSxKkPgLk969G2vUqpk2IKPgCWkpeRb9sbhuGuhXx1DtBWPQCbThbWkomNaj3375ZsUbuYZO7RlJ43teV5yZy6sOULad7Ilvf6d/oEH8s3bDf8m0MAAAAASUVORK5CYII=" alt="private2" />
                        <input className='inputs' type="text" onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'/>
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO2WPU7DQBCFXaUDIVuy9701ckWKPQIcIogjIM6Cw01CQRrCBYCcAQ4QqCCClGlAI9aSFRxs5F1T4CdNM7Pr+TzrnxcEvXptyBgzIHkB4Jnkh4sA8ERyLNcO6kRy7KpxReS1APiilcWHgSMBOComUbuYltZV819flz0A60dFckhySnJl40prfdDJEZAcAlhWvGovaZrqLgCmtuG1NJQAMLO5yy4AVlIv3y3JfQvw1gXAu9S11umfAACY2GYzgZAAcGNzE+8ASqkMwLriIVxLzStAHMcJybsfvvW3SZLEXgCMMQMAc1t/ADCKomhHAsAxgEdbu6/667UGAHBWNM+ybG+zLrkSxKkPgLk969G2vUqpk2IKPgCWkpeRb9sbhuGuhXx1DtBWPQCbThbWkomNaj3375ZsUbuYZO7RlJ43teV5yZy6sOULad7Ilvf6d/oEH8s3bDf8m0MAAAAASUVORK5CYII=" alt="private2" />
                        <input className='inputs' type="text" onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'/>
                    </div>
                        <div className='error-msg'>{mailErr}</div>
                    <div id='terms'>
                        <input type="checkbox" /> Agree to <span id='termsLink'>terms & conditions</span>
                    </div>
                    <button id='signup-submit' className='sub-btns' onClick={handleSign}>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Login