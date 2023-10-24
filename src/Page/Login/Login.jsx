import { FaFacebook,FaLinkedin,FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelLogIn =event=>{
        event.preventDefault()
    }



    return (
        <div className="hero min-h-screen bg-red-400 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/CQMT47C/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh-removebg-preview.png" alt=""  className="text-black lg:w-3/6 mr-9"/>
    <div className="card w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl  bg-green-100">
      <form onSubmit={handelLogIn} className="card-body space-y-6">
        <h2 className="text-center font-bold ">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
     <div className='py-6 space-y-5 text-bold'>
     <p className="text-center">Or Sign in with</p>
      <div className='flex justify-center gap-5'>
        <FaFacebook></FaFacebook>
        <FaGoogle></FaGoogle>
        <FaLinkedin></FaLinkedin>
      </div>
      <h2 className='text-center  mb-6'>New here? <Link to='/signup' className='text-red-400'>Sign Up</Link></h2>
     </div>
    </div>
  </div>
</div>
    );
};

export default Login;