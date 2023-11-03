import { Link } from "react-router-dom";
import LogNav from "../LoginForm/LogNav";
import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";


const Singup = () => {

   const {creatUser} = useContext(AuthContex)

    const singupHandle = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const users = [name, email, password]
        // console.log(users);

        creatUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .then(error => console.log(error))

    }
    return (
        <div>
            <div className="w-11/12 mx-auto mt-4">
        <LogNav></LogNav>

        <div className="grid grid-cols-2 justify-center items-center mt-10">
          <div className="grid items-center justify-center">
            <figure>
              <img
                src="/assets/images/login/login.svg"
                alt=""
                className="h-80"
              />
            </figure>
          </div>

          <div className="border-gray-100 border-2 w-10/12 py-10 px-2">
            <h2 className="text-center text-3xl font-bold mt-4 mb-10 text-dark-200">
              Pls Sign Up
            </h2>

            <form onSubmit={singupHandle}>
            <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Password"
                  required
                />
              </div>

              <input
                type="submit"
                placeholder="Submit"
                className="bg-orange-500 cursor-pointer border border-gray-300
     text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </form>

            <div className="mt-10">
                <h2 className="text-center">Or Sign In with</h2>
                <div>
                  
                </div>

            </div>


          </div>
        </div>
        <h2 className="text-center text-2xl font-bold">Alreay Registation <Link to={"/login"} className="text-orange-600">Login</Link></h2>
      </div>
        </div>
    );
};

export default Singup;