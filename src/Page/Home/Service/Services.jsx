// import { useEffect, useState } from "react";
import useServices from "../../../Hookes/useServices";
import ServicesCard from "./ServicesCard";

// DRY__Do not reapete yourself
const Services = () => {
    const services=useServices()  
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('https://car-doctor-server-six-sooty.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data)
    //         })

    // }, [])
    return (
        <div>
            <div>
                <div className=' space-y-2 text-center'>
                    <h1 className='text-xl font-mono text-red-600 font-bold'>Service</h1>
                    <h1 className="text-5xl font-bold ">Our Service Area</h1>
                    <p className=" text-red-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero ipsum est, <br /> officiis quisquam nulla hic ipsa laboriosam, ex qui dolor tempore id laudantium!  ,<br />Totam fuga doloribus dolorum expedita nam debitis dolor
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* <h2> {services.length}</h2> */}

                        {

                            services.map(service => <ServicesCard
                                key={service._id}
                                service={service}
                            ></ServicesCard>)
                        }
                    </div>

                    <div className="mx-auto ">
                        <button className="btn mt-7 btn-outline btn-secondary">More Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;