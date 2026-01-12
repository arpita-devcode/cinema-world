import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const {singinInUser} = use(AuthContext)
    const handlelogin =(e)=>{
     e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     singinInUser(email,password)
     .then(result => {
        console.log("Logged in:", result.user);
        form.reset();
      })
      .catch(error => {
        console.error(error.message);
      });
    }
    return (
        
        <div className='flex items-center justify-center min-h-screen bg-base-100'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
               <form onSubmit={handlelogin}> <legend className="fieldset-legend text-4xl">Login</legend>

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button></form>
            </fieldset>
        </div>
    );
};

export default Login;