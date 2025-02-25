import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignup = () =>{
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" />
            </div>
            <form className="absolute p-6 bg-black w-3/12 mx-auto my-36 right-0 left-0 bg-opacity-75">
                <h1 className="text-white text-3xl border-gray-400  my-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input className=" my-2 px-2 w-full rounded-sm  bg-gray-700" type="text" placeholder="Full Name" />}
                <input className=" my-2 px-2 w-full rounded-sm  bg-gray-700" type="text" placeholder="Email address" />
                <input className=" my-2 px-2 w-full rounded-sm  bg-gray-700" type="password" placeholder="Password" />
                <button className=" my-4 bg-red-600 text-white w-full rounded-sm">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="my-4 text-white w-full cursor-pointer" onClick={toggleSignup}>
                  {isSignIn ? "Do you want to signUp? SignUp" : "Already registered ? Sign In"}
                </p>
            </form>
        </div>
        
    )
};

export default Login;