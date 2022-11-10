import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProviders';
import header from '../../Home/images/photography-logo-png-logo-png-2.png'


const Header = () => {
    const { user, logOut }=useContext(AuthContext)


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
                            <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <li className='font-semibold'><Link to='/MyPhoto'>Photo Services</Link></li>
                                        <li className='font-semibold'><Link to='/packageReview'> <button>Review</button> </Link></li>
                                        <li className='font-semibold'><Link to='/login'> <button>Logout</button> </Link></li>
                                    </> :
                                    <li className='font-semibold'><Link to='/login'>Login</Link></li>

                            }
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-20' src={header} alt="header" />
                        <Link to='/about' className="  btn btn-ghost lg:w-full md:w-20 normal-case font-semibold sm:text-lg  md:text-xl xl:tex-3xl px-4 text-green-600">Travel Photographer </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                        {
                            user?.email?
                            <>
                                    <li className='font-semibold'><Link to='/MyPhoto'>Photo Services</Link></li>                                  
                                    <li className='font-semibold'><Link to='/packageReview'> <button>Review</button> </Link></li>
                                    <li className='font-semibold'><Link to='/login'> <button onClick={handleLogout}>Logout</button> </Link></li>
                            </> :
                                <li className='font-semibold'><Link to='/login'>Login</Link></li>

                        }
                       
                    </ul>
                </div>
                {/* <div className="navbar-end">
                     <Link to='/register'> <button className="btn btn-outline btn-success">Registration</button></Link>
                    
                </div> */}
            </div>
        </div>
    );
};

export default Header;