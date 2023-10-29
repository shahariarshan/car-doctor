import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServicesCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const {_id,title,price,img} =service;
    return (
        <div>
            <div className="mt-5">
            <div className="card w-96 bg-gray-300  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{title}</h2>
                <p className="text-start font-bold text-red-400">Price:${price}</p>
                
            </div>
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-active  btn-primary">Book Now</button>
            </Link>
        </div>
        
        </div>
        
        </div>
    );
};

export default ServicesCard;