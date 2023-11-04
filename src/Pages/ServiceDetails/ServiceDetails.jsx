
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav/Nav";


const ServiceDetails = () => {
    const {_id, title, img, description, facility} = useLoaderData()
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

              {/* Data colect from database */}

              <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div>
                        <figure>
                            <img src={img} className="h-[300px] w-[100%] object-cover" alt="" />
                        </figure>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="mt-4">{description}</p>
                    </div>

                    <div className="grid grid-cols-2  gap-4 mt-6">
                        <div className="bg-gray-200">
                            <h2 className="text-2xl font-bold">{facility[0].name}</h2>
                            <p>{facility[0].details}</p>
                        </div>
                        <div className="bg-gray-200">
                            <h2 className="text-2xl font-bold">{facility[1].name}</h2>
                            <p>{facility[1].details}</p>
                        </div>
                        <div className="bg-gray-200">
                            <h2 className="text-2xl font-bold">{facility[2].name}</h2>
                            <p>{facility[2].details}</p>
                        </div>
                        <div className="bg-gray-200">
                            <h2 className="text-2xl font-bold">{facility[3].name}</h2>
                            <p>{facility[3].details}</p>
                        </div>
                    </div>


                    <div className="mt-6">
                        <p>{description}</p>
                        <Link to={`/checkout/${_id}`}><button className="text-3xl bg-orange-600 font-bold px-4 py-2 my-4 text-white rounded-xl">Book Now</button></Link>
                    </div>



                </div>
              </div>


             
        </div>
    );
};

export default ServiceDetails;