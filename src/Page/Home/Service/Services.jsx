import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServices]=useState()
    useEffect(()=>{
        fetch('/public/services.json')
        .then(res =>res.json())
        .then(data=>{
            setServices(data)
        })
        
    },[])
    return (
        <div>
            <div>
            <div className=' space-y-2 text-center'>
                    <h1 className='text-xl font-mono text-red-600 font-bold'>Service</h1>
                    <h1 className="text-5xl font-bold ">Our Service Area</h1>
                    <p className=" text-red-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero ipsum est, <br /> officiis quisquam nulla hic ipsa laboriosam, ex qui dolor tempore id laudantium!  ,<br />Totam fuga doloribus dolorum expedita nam debitis dolor
                    </p>
                    <div>

                        {/* {

                        services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        ></ServicesCard>)
                       } */}
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Services;