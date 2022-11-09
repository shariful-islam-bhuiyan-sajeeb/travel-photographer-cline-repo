import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/register.jpg';
import { AuthContext } from '../../../Contexts/AuthProviders';


const Register = () => {
    const {createUser}=useContext(AuthContext)
    console.log();

    const handleRegister = event =>{
        event.preventDefault();
       const form = event.target;
       const name = form.name.value
       const email = form.email.value;
       const password = form.password.value;
        const image  = form.imgUrl.value;

        createUser(email, password, name, image)
           .then(result => {
               const user = result.user;
               console.log(user);
           })
           .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-20 pb-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-3xl text-center font-bold">Please Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your last name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="url" name='imgUrl' placeholder="Img URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-orange-600 font-bold' >Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;