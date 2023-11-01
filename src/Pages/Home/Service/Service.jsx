import { useEffect, useState } from "react";


const Service = () => {

    const [serviceCard, setServiceCrad] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServiceCrad(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-orange-500 font-bold mt-4">Sevice</h2>
            <h1 className="text-center text-4xl font-bold mt-4">Our Service Area</h1>
            <p className="text-center text-gray-500 mt-4">he majority have 
            suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
             {/* service Card */}
            <div className="text-center grid grid-cols-3 mt-8 gap-10">


            {
                serviceCard.map(item => 
                    <div className="mt-4" key={item.id}>
                        <figure>
                            <img src={item.img} alt={item.title} className="h-96 rounded-2xl"/>
                        </figure>
                        <div>
                          <h2 className="text-justify text-3xl font-bold">{item.title}</h2>
                          <div className="flex justify-between">
                          <p className="text-orange-700 font-bold">Price: ${item.price}</p>
                          <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg></button>
                          </div>
                        </div>
                    </div>)
            }
                

            </div>
        </div>
    );
};

export default Service;