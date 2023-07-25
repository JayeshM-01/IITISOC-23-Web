import { useState, React } from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Navbar } from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Registeration = () => {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const register = () => {
    if (usernameReg == "" || passwordReg == "") {
      alert('Please fill out all fields before submitting');
      return;
    }
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    })
    .then(navigate('/login'));
  };

  const notify = () => {
    toast.success('🦄 Account Successfully created.Please login!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="loginpage">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="nav-none">
        < Navbar />
      </div>
      <div class=" w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://th.bing.com/th/id/OIP.LSZDzHyeYI8sgwJpP15o1AHaIZ?w=142&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Username" aria-label="Username"  onChange={(e) => {
                setUsernameReg(e.target.value);
              }}/>
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" onChange={(e) => {
                setPasswordReg(e.target.value);
              }}/>
            </div>

            <div class="flex items-center justify-between mt-4">

                <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={register}>
                    Register
                </button>
            </div>
        </form>
    </div>

    <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">Do you already have an account? </span>

        <a href="/login" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</a>
    </div>
</div>
      
    </div>);
}

export default Registeration