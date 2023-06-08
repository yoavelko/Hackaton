import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { LoggedContext } from '../../context/LoggedContext'
import { IndexContext } from '../../context/IndexContext'
import { LoginContext } from '../../context/LoginContext';
import usersData from '../../user.json'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Login() {

    const { logged, setLogged } = useContext(LoggedContext);
    const { userIndex, setUserIndex } = useContext(IndexContext);
    const { login, setLogin } = useContext(LoginContext);
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
    const [checked, setChecked] = useState(false);
    const [checkErr, setCheckErr] = useState('');
    const [avatar, setAvatar] = useState("https://static.thenounproject.com/png/2643408-200.png")

    function handleCheck() {
        setChecked(!checked)
    }

    function handleLog() {
        const user = usersData.users.find(
            (u) => u.username === username && u.password === password
        );
        setLogged(username);
        for (let i = 0; i < usersData.users.length; i++) {
            if (usersData.users[i].username === username) {
                setUserIndex(i)
            }
        }
        if (user) {
            setError('');
            setLogged(username);
            navigate('/');
            setLogin('Logout')
        } else {
            setError('Invalid username or password');
        }
    }

    function handleSign() {
        if (checked) {
            setCheckErr('')
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
                        "profilepic": avatar,
                        "email": signMail,
                        "rank": "",
                        "score": ""
                    }
                )
            }
        } else {
            setCheckErr('Please agree to terms & condition to continue')
        }
    }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mail', 'template_7jhpypd', form.current, 'yQOjrcezbeaiAmq2V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div id='login-page-conatiner'>
            <div id='logSignContainer'>
                <div id='loginContainer' className='dualContainer'>
                    <h1 className='headers'>Login</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <input className='inputs' type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                    </div>
                    <div className='inputContainers'>
                        <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <input className='inputs' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </div>
                    <div className='error-msg'>{error}</div>
                    <button id='login-submit' className='sub-btns' onClick={handleLog}>Submit</button>
                </div>

                <div id='breaker'>
                    <span id='or'>Or</span>
                </div>

                <div id='mediaBreaker'>
                    <span id='or1'>Or</span>
                </div>

                <div className='dualContainer'>
                    <form ref={form} onSubmit={sendEmail}>
                    <h1 className='headers' id='signup-header'>Sign-Up</h1>
                    <div id='signupContainer'>
                        <div className='signup-split'>
                            <div className='inputContainers'>
                                <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                                <input className='inputs' type="text" onChange={(e) => setSignName(e.target.value)} placeholder='Username' />
                            </div>
                            <div className='error-msg'>{userErr}</div>
                            <div className='inputContainers'>
                                <img id='pass-icon' className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                                <input className='inputs' type="password" onChange={(e) => setSignPass(e.target.value)} placeholder='Password' />
                            </div>
                            <div className='error-msg'>{passErr}</div>
                            <div className='inputContainers'>
                                <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO1XTWsTYRB+C1EQvxPCvs/zbhII1ko8iKYi+A+8WL2K0Kb+Btur0PYPqAcFS/FnaIygoAet56onsb1a0NjmpJFpZnEt+9V0tSAdGAg7X8/szM5MjNmnjERyDMAsgGckV0h+V14B0AYwIzomb7LWjgPokOxnYQCvSF7edeBms3kAwH2SP9XxF5KPSF6VTD3POyysb2YCwKLq9NXmnjGmMFTwarV6EsBzdbYBYK5YLB5LsxMdAPMANhV0R3wNk3lHHaxJCXaagHPuHMlPmsDLRqNxMLMxBq9dgn+uVCo0Q5LYAlhVEHczGVlrx7V+GyTPR6iMALhF8h2AnjDJZZItkUUkc0HL8UN+pwLA71c/FxP8cUL3L0WBILmg8nZicJJjQbdHNZxmLsG+kpyq1WonhElO6zORTW23q9frxwGsi9w5N5qU/awCWIwBuBwXREGI7E2M7yWV304C0FYAEzFyqXdfst4uk09NbXsxttcVwNMkAB9Fyff9U1HyoNZx9knyUHnfxwIg2RWlcrl8JG8A4lPl3SQA3/4WgCxyA+CDKp3eKwDt3TZhhibdTAIwk/IZvtUgrYQZESlP+0wzDaKQExk6rWAQafCt/gnJp2MG1aRJIgyuHQExHzOKg4ESxQ+VdzSq/yAATVlGUquY5TEik1DKoctI9F5ba28GCvJbnqmsp6WbTA0ekFwyinjV931n9oAKoVLIQXLxnyOoDk6yYDXLPl+QrZZmVyqVjgK4kReOglwyoaN0XRoJwDUAZ2Ri+r5/yFpb06P0QbB2rbVX8gJh9KrZGlIZ+YVz7pLJm5xzo7LPZaXqH5OudvoayScA7niedzb3wPv039Mv2m449ye7LZQAAAAASUVORK5CYII=" alt="private2" />
                                <input className='inputs' type="text" name='email' onChange={(e) => setSignMail(e.target.value)} placeholder='E-Mail' />
                            </div>
                            <div className='error-msg'>{mailErr}</div>
                        </div>
                        <div className='signup-split'>
                            <div className='inputContainers'>
                                <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO2WPU7DQBCFXaUDIVuy9701ckWKPQIcIogjIM6Cw01CQRrCBYCcAQ4QqCCClGlAI9aSFRxs5F1T4CdNM7Pr+TzrnxcEvXptyBgzIHkB4Jnkh4sA8ERyLNcO6kRy7KpxReS1APiilcWHgSMBOComUbuYltZV819flz0A60dFckhySnJl40prfdDJEZAcAlhWvGovaZrqLgCmtuG1NJQAMLO5yy4AVlIv3y3JfQvw1gXAu9S11umfAACY2GYzgZAAcGNzE+8ASqkMwLriIVxLzStAHMcJybsfvvW3SZLEXgCMMQMAc1t/ADCKomhHAsAxgEdbu6/667UGAHBWNM+ybG+zLrkSxKkPgLk969G2vUqpk2IKPgCWkpeRb9sbhuGuhXx1DtBWPQCbThbWkomNaj3375ZsUbuYZO7RlJ43teV5yZy6sOULad7Ilvf6d/oEH8s3bDf8m0MAAAAASUVORK5CYII=" alt="private2" />
                                <input className='inputs' type="text" name='firstName' onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
                            </div>
                            <div className='inputContainers'>
                                <img id='pass-icon' className='icons' width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO2WPU7DQBCFXaUDIVuy9701ckWKPQIcIogjIM6Cw01CQRrCBYCcAQ4QqCCClGlAI9aSFRxs5F1T4CdNM7Pr+TzrnxcEvXptyBgzIHkB4Jnkh4sA8ERyLNcO6kRy7KpxReS1APiilcWHgSMBOComUbuYltZV819flz0A60dFckhySnJl40prfdDJEZAcAlhWvGovaZrqLgCmtuG1NJQAMLO5yy4AVlIv3y3JfQvw1gXAu9S11umfAACY2GYzgZAAcGNzE+8ASqkMwLriIVxLzStAHMcJybsfvvW3SZLEXgCMMQMAc1t/ADCKomhHAsAxgEdbu6/667UGAHBWNM+ybG+zLrkSxKkPgLk969G2vUqpk2IKPgCWkpeRb9sbhuGuhXx1DtBWPQCbThbWkomNaj3375ZsUbuYZO7RlJ43teV5yZy6sOULad7Ilvf6d/oEH8s3bDf8m0MAAAAASUVORK5CYII=" alt="private2" />
                                <input className='inputs' type="text" name='lastName' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
                            </div>
                            <div className='inputContainers'>
                                <img  width="32" height="32" id='avatar-img' className='icons' src={avatar} alt="" />
                                <select className='inputs' name="" id="profile-select" onChange={(e) => setAvatar(e.target.value)}>
                                    <option selected disabled>Profile Picutre</option>
                                    <option value="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png">Male</option>
                                    <option value="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png">Female</option>
                                    <option value="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png">Cat</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id='terms'>
                        <input type="checkbox" onChange={handleCheck} /> Agree to <span id='termsLink'>terms & conditions</span>
                        <div className='error-msg'>{checkErr}</div>
                    </div>
                    <button id='signup-submit' type='submit'  value="send" className='sub-btns' onClick={handleSign}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login