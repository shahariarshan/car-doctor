// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";


// const CheckOut = () => {
//     const service = useLoaderData()
//     const {user} =useContext(AuthContext)
//     console.log(user);
//     const { _id, title, price,img } = service;
    



//     const handelCheckOut =event =>{
//         event.preventDefault()

//         const form = event.target
//         const name =form.name.value
//         const date =form.date.value
//         const email =user?.value
//         const phone =form.phone.value
//         const amount =user?.value
//         const description =form.description.value
//         const order={
//             name,
//             email,
//             date,
//             phone,
//             img,
//             service:title,
//             service_id:_id,
//             amount,
//             description
//         }
//         console.log(order)

//         fetch('http://localhost:5000/bookings', {
//             method: 'POST', 
//             headers: {
//                 'content-type': 'application/json'
//             }, 
//             body: JSON.stringify(order)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if(data.insertedId){
//                 // alert('service book successfully')
//                 Swal.fire({
//                     title: 'Success',
//                     text: 'service book successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                   })
//             }
//         })
//     }
    
//     return (
//         <div className="border">
//             <h2 className="text-center text-3xl text-red-600 mt-4">Booking Now:{title}</h2>



           
//                         <form onSubmit={handelCheckOut}>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Date</span>
//                                 </label>
//                                 <input type="date" name="date"  className="input input-bordered" required />
                               
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" defaultValue={user?.email } placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Phone</span>
//                                 </label>
//                                 <input type="number" name="phone" placeholder="Number" className="input input-bordered" required />
                               
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Due Amount</span>
//                                 </label>
//                                 <input type="text" name="amount" defaultValue={'$'+price} className="input input-bordered" required />
                               
//                             </div>
//                             <div className="form-control ">
//                                 <label className="label">
//                                     <span className="label-text">Description</span>
//                                 </label>
//                                 <input type="text" name="description" placeholder="Your Message" className="input w-full input-bordered" required />
                               
//                             </div>

//                             </div>
//                             <div className="form-control mt-6">
                                
//                                 <input className="btn btn-primary" type="submit" value="Order Confirmed" />
//                             </div>
//                         </form>
//                     </div>
       

//     );
// };

// export default CheckOut;

import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
            img,
            date, 
            service: title,
            service_id: _id, 
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success',
                    'Order Successfully added',
                    'success'
                  )
            }
        })

    }

    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service: {title} </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default CheckOut;