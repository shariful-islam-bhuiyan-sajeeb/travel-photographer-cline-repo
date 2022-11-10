import { Result } from 'postcss';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login.jpg';
import { AuthContext } from '../../../Contexts/AuthProviders';
import { IconName } from "react-icons/hi2";



const Login = () => {
    const { login, signInWithGoogle }=useContext(AuthContext)

    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
           const currentUser ={
            email: user.email
           }
           console.log(currentUser);
            form.reset();

            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('travelToken', data.token);

            })
            // navigate('/')
        }).catch(err =>console.error(err));
    }
   


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
   



    return (
        <div className="hero w-full h-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img}  alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-4">
                            <input className="btn btn-primary pb-2" type="submit" value="Login" /> <br />
                            <span className='text-center text-2xl font-semibold mb-4'><h2>Or</h2></span>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full"> <span className='mr-2  '> <FaGoogle></FaGoogle>  </span> Sign Up with Google</button>

                        </div>
                    </form>
                    <p className='text-center'>New to  Sign in <Link className='text-orange-600 font-bold' to="/register"> Sign in</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;