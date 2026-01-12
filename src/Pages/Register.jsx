import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { signinwithgoogle,createUser } = use(AuthContext)
  const handleregister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email =form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result => {
        // ✅ Update name & photo
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        form.reset();
        
        console.log("Registered user:", result.user);
      })
      .catch(err => {
        console.log(err.message);
      });

  }
  const handlegooglesignin = () => {
    signinwithgoogle()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl w-full max-w-md border p-8 shadow-lg">
        <form onSubmit={handleregister}>
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">
            Register
          </h2>

          {/* Name input */}
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Your Name"
            required
          />

          {/* Email input */}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full mb-4"
            placeholder="Email"
            required
          />

          {/* Password input */}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            className="input input-bordered w-full mb-4"
            placeholder="Password"
            required
          />

          {/* Profile picture input */}
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          <input
            type="text"
            name="photoURL"
            className=" input input-bordered  w-full mb-6"
            placeholder="Enter the photourl"
            required
          />

          {/* Register button */}
          <button className="btn btn-primary w-full mb-4">
            Register
          </button>

          {/* Gmail Sign-in button */}
          <button onClick={handlegooglesignin} className="btn btn-outline btn-error w-full flex items-center justify-center gap-2">
            <img
              src=""
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Gmail
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Register;
