import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProviders';


const Header = () => {
 const {user, logOut}=useContext(AuthContext)


    const handleLogout =()=>{
        logOut()
        .then()
        .catch()
    }

    return (
        <div className="navbar h-8 mb-12 pt-8 bg-base-100 sticky top-0  shadow-xl">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-semibold'><Link to='/'>Home</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <li className='font-semibold'><Link to='/MyPhoto'>Photo Services</Link></li>
                                        <li className='font-semibold'><Link to='/packageReview'> <button>Review</button> </Link></li>
                                        <li className='font-semibold'><Link> <button>Logout</button> </Link></li>
                                    </> :
                                    <li className='font-semibold'><Link to='/login'>Login</Link></li>

                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case font-semibold text-xl">Our Tours & Travel Guidelines</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        {
                            user?.email?
                            <>
                                    <li className='font-semibold'><Link to='/MyPhoto'>Photo Services</Link></li>                                  
                                    <li className='font-semibold'><Link to='/packageReview'> <button>Review</button> </Link></li>
                                    <li className='font-semibold'><Link> <button onClick={handleLogout}>Logout</button> </Link></li>
                            </> :
                                <li className='font-semibold'><Link to='/login'>Login</Link></li>

                        }
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/register'> <button className="btn btn-outline btn-success">Registration</button></Link>
                    <Link to='login'> <button className="btn btn-outline btn-success">Google</button></Link>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Header;