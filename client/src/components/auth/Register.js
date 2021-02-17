import React, {useState, useContext, useEffect, useMemo} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import {Link} from 'react-router-dom'
import './LoginRegister.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    // const options = useMemo(() => countryList().getData(), [])
    
    const {setAlert} = alertContext
    const {register, error, clearErrors, isAuthenticated} = authContext

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/')
        }
        if(error ==='User already exists') {
            setAlert(error,'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        country: '',
        club: '',
        password:'',
        password2:''
    })

    const {name, email, country, club, password, password2} = user;

    const onChange = e => setUser({ ...user, [e.target.name]  : e.target.value})

    // const [value, setValue] = useState('')

    // const onChangeSelect = value => {
    //     setValue(value)
    // }
    // const addCountry = () =>{
    //     setUser({...user, country : value.label})
    // }

    const onSubmit = e => {
        e.preventDefault();
        //addCountry()
        if (name === '' || email ==='' || password === '') {
            setAlert('Please enter all fields', "danger")
        } else if (password !== password2) {
            setAlert('Passwords do not match', "danger")
        } else {
            register({
                name,
                email,
                password,
                // country
            });
        }
    }

    return (
        <div id="register">
            <div className="container">
                <div id='register-row' className="row justify-content-center align-items-center">
                    <div id='register-column' className="col-md-6">
                        <div id='register-box' className="col-md-12">
                            <form onSubmit={onSubmit}>
                                <h3 className='text-center text-4'>Account Register</h3>
                                <div className="form-group">
                                <label htmlFor="name" className='text-2'>Name</label><br/>
                                <input 
                                    className='form-control'
                                    // id="username"
                                    type="name" 
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={onChange}/>
                                <label htmlFor="email" className='text-2'>Email Address</label><br/>
                                <input 
                                    className='form-control'
                                    // id="username"
                                    type="email" 
                                    name="email"
                                    placeholder='email@email.com'
                                    required
                                    value={email}
                                    onChange={onChange}/>
                                <label htmlFor="password" className='text-2'>Password</label><br/>
                                {/* <Select 
                                    options={options} 
                                    name="country" 
                                    value={value} 
                                    onChange={onChangeSelect} /> */}
                                <input 
                                    className='form-control'
                                    // id="password"
                                    type="password" 
                                    name="password"
                                    required
                                    value={password}
                                    onChange={onChange}/>
                                <label htmlFor="password2" className='text-2'>Confirm Password</label><br/>
                                <input 
                                    className='form-control'
                                    // id="password"
                                    type="password" 
                                    name="password2"
                                    required
                                    value={password2}
                                    onChange={onChange}/>
                                </div>
                                <div className='form-group'>
                                    <input 
                                        type="submit" 
                                        value='Register'
                                        className='btn bg-4 btn-md text-light'
                                        onClick={onSubmit}/>
                                </div>
                                {/* <button onClick={addCountry}>Test</button> */}
                                <div id='login-link' className='text-right font-weight-bold'>
                                    <Link to={'/login'} className='text-3 link '>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
