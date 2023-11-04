
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav/Nav";
import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";



const Chekout = () => {

   const{user} = useContext(AuthContex)

   const {_id, title, price, img} =  useLoaderData()


   const orderHandle = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const price = form.price.value;
    const email = form.email.value;
    const phoneNumber = form.phone.value;
    const message = form.message.value;
    const date = form.date.value;
    const id= {_id}
    const order = {
        customeName: name,
        serviceName: title,
        price,
        email,
        phone: phoneNumber,
        message,
        img,
        id,
        date   
    }

    console.log(order);

    fetch('http://localhost:5000/orderBook',{

     method: 'POST',
     headers:{
        'content-type': 'application/json'
     },
     body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if (data.insertedId) {
           alert('your service order sucessfully') 
        }
    })
   }



    return (
        <div className="w-11/12 mx-auto">
           <Nav></Nav>
           <div>
                <figure>
                    <img src="/assets/images/services/5.jpg" alt="" className="h-52 w-[100%] object-cover"/>
                </figure>
                <div className="flex rounded-tl-[50%] rounded-tr-[30%] bg-orange-600 text-white w-96 py-7 items-center justify-center relative bottom-20 left-[40%]">
                    <li className="list-none"><Link>Home</Link></li>
                    <li className="list-none">/</li>
                    <li className="list-none"><Link>Chekout</Link></li>
                </div>
              </div>

              {/* contact form */}

              <div>
              <form onSubmit={orderHandle}>
          <div className="grid grid-cols-3 gap-8">

            {/* Full name input */}
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
                  placeholder="name"
                  defaultValue={user?.displayName}
                  
                />
              </div>

              {/* Service name Input */}

              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  defaultValue={title}
                  
                />
              </div>

              {/* Price Input */}


              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="price"
                  defaultValue={price}
                  
                />
              </div>
          </div>
              <div className="grid grid-cols-3 gap-8">

                {/* Email Input */}
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
                  defaultValue={user?.email}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone number"
            
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Order Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Date"
            
                />
              </div>
              </div>

              {/* Text Area Input */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Message
                </label>
                <textarea name="message" id="message" cols="150" rows="10"></textarea>
              </div>

              <input
                type="submit"
                placeholder="Confirm Order"
                value="Confirm Order"
                className="bg-orange-500 cursor-pointer border border-gray-300
     text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </form>
              </div>
        </div>
    );
};

export default Chekout;