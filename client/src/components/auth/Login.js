import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import {Link} from 'react-router-dom'
import './LoginRegister.css'

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext
    const {login, error, clearErrors, isAuthenticated} = authContext

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/')
        }
        if(error ==='Invalid Credentials') {
            setAlert(error,'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    
    const [user, setUser] = useState({
        email: '',
        password:''
    })

    const {email, password} = user;

    const onChange = e => setUser({ ...user, [e.target.name] : e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if(email ==='' || password ==='') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }
    }

    return (
        <div id="login">
            {/* <h3 className="text-center text-white pt-5">Login Form</h3> */}
            <div className="container">
                <div id='login-row' className="row justify-content-center align-items-center">
                    <div id='login-column' className="col-md-6">
                        <div id='login-box' className="col-md-12">
                            <form onSubmit={onSubmit}>
                                <h3 className='text-center text-4'>Login</h3>
                                <div className="form-group">
                                <label htmlFor="email" className='text-2'>Email Address</label><br/>
                                <input 
                                    className='form-control'
                                    id="username"
                                    type="email" 
                                    name="email"
                                    required
                                    value={email}
                                    onChange={onChange}/>
                                <label htmlFor="password" className='text-2'>Password</label><br/>
                                <input 
                                    className='form-control'
                                    id="password"
                                    type="password" 
                                    name="password"
                                    required
                                    value={password}
                                    onChange={onChange}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="forgot_password" className='text-2'>
                                        <span>Forgot password?</span>
                                    </label><br/>
                                    <input 
                                        type="submit" 
                                        value='Login'
                                        className='btn bg-4 btn-md text-light'/>
                                </div>
                                <div id='register-link' className='text-right'>
                                    <Link to={'/register'} className='text-3 font-weight-bold link'>Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="main">
            
        //     <div className='form-container col-8 col-md-4'>
        //     <div className="row form-heading mx-auto p-0 ">
        //         <h1>
        //             Account Login
        //         </h1>
        //     </div>
            
        //     <form onSubmit={onSubmit}>
        //         <div className='form-group'>
        //             <label htmlFor="email">Email Address</label>
        //             <input 
        //                 type="email" 
        //                 name="email"
        //                 value={email}
        //                 onChange={onChange}/>
        //         </div>
        //         <div className='form-group'>
        //             <label htmlFor="password">Password</label>
        //             <input 
        //                 type="password" 
        //                 name="password"
        //                 value={password}
        //                 onChange={onChange}/>
        //         </div>
        //         <input type="submit" value='Login'/>
        //     </form>
        // </div>
        // <br/>
        
        // </div>
        
    )
}

export default Login;
