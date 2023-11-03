

import { Link } from "react-router-dom";
import Nav from "../Home/Nav/Nav";


const ServiceDetails = () => {
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
                    <li className="list-none"><Link>Service Details</Link></li>
                </div>
              </div>
             
        </div>
    );
};

export default ServiceDetails;