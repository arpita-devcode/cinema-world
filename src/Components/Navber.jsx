import React, { use} from 'react';
import { NavLink } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm} from '@fortawesome/free-solid-svg-icons';



const Navber = () => {
    // const[darkMode,setDarkmode] = useState("dark")
    // useEffect(()=>{
    //     const html = document.documentElement
    //     if(darkMode) html.classList.add("dark-mode")
    //         else html.classList.remove("dark-mode")
    // })
    const { user } = use(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>All Movies</NavLink></li>

        {
            user ? 
            <>
                <li><NavLink to='/movies/add'>Add movies</NavLink></li>
                <li><NavLink to='/movies/my-collection'>My Collection</NavLink></li>
                <li><NavLink to='/movies/my-watchlist'>My Watchlist</NavLink></li>
            </> :
             <>
                    <li><NavLink to='movies/login'>Log In</NavLink></li>
                    <li><NavLink to='movies/register'>Register</NavLink></li>
                </>
                
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                        <FontAwesomeIcon icon={faFilm} className='text-yellow-500 h-2' />
                        <a className="text-xl text-yellow-500">MovieMaster Pro</a>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                 <div className="navbar-end flex items-center gap-2">
                    {/* Theme Toggle Button */}
                    {/* <button
                        onClick={() => setDarkmode(!darkMode)}
                        className="btn btn-ghost rounded-full p-2"
                        title="Toggle Dark/Light Mode"
                    >
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </button> */}
                    </div>
                <div className="navbar-end">
                    {
                        user ? <a className="btn">signout</a> : <a className="btn">signin</a>
                    }
                </div>
            </div>
            
        </div>
        
    );
};

export default Navber;