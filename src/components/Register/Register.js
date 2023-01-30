import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    
    const [name, setNmae] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPas, setConfirmPas] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordError2, setPasswordErro2] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("");

    const handlePassword = e => {
       
        const password = e.target.value;
       
        console.log(password);
        
        if(/(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$)/.test(e.target.value)){
            
            setPassword(password);
            setPasswordError("");
        }else{
            setPasswordError(" password should beMinimum eight characters, at least one letter and one number")
            
            return;
        }
       
    }
    const handleConfirmPassword = e => {
       
   
        const confirmPass = e.target.value;
        console.log(confirmPass);
        if(/(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$)/.test(e.target.value)){
            
            setConfirmPas(confirmPass);
            setPasswordErro2("");
        }else{
            setPasswordErro2(" password should beMinimum eight characters, at least one letter and one number")
            
            return;
        }

        if(password !== confirmPas){
            setPasswordMatch("Paswword doesnt match");
            
        }else{
            setPasswordMatch("")
        }
 
    }

    const handleEmail = e => {
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(e.target.value)){
            setEmailError("Please enter valid email")
            return;
        }else{
            setEmail(e.target.value);
            setEmailError("");
        }
    }
    const handleSubmit = e => {
    //     e.preventDefault();

    //    createUser(email, password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })


    }

    const handleSignWithGoogle = () => {
        // signInWithGoogle()
        // .then(result => {
        //     const googleUser = result.user;
        //     console.log(googleUser)
        // })
        // .catch(error => {
        //     console.log(error)
        // });
    }
    return (
        <div>
          
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                   </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="label">
                                <span className="label-text text-red-600">{emailError}</span>
                            </label>
                            <input onBlur={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <span className="label-text text-red-600">{passwordError}</span>
                            </label>
                            <label className="label">
                                <span className="label-text ">Confirm Password</span>
                            </label>
                            <input onBlur={handleConfirmPassword} type="password" name='confirmPass' placeholder="Confirm password" className="input input-bordered" required/>
                            <label className="label">
                                <span className="label-text text-red-600">{passwordError2}{passwordMatch}</span>
                            </label>
                            <label className="label">
                                <p>All ready have an Account? <Link className=" link link-hover" to='/login'>Please Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleSignWithGoogle} className="btn btn-primary">Sign In With Google</button>
                    
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;