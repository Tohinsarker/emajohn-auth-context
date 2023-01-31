import React from 'react';
import './Login.css';

import { Form, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email,password)
        .then(result => {
            const user = result.user;
            navigate('/');
            console.log(user);
        })
        .catch(error => {
            console.log(error)
        });

        console.log(email, password)
    }
    return (

        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                             <div className="form-control">
                               <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label> */}
                            </div>  
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <label className="label">
                                    <p>Dont you have an account? <Link className=" link link-hover" to='/register'> Register first</Link></p>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Login;