import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa';

const Teams = () => {
    return (
        <div > 
              <div className=' text-center space-y-3 mt-10'>
              <h1 className='text-xl font-mono text-red-600 font-bold'>Teams</h1>
                    <h1 className="text-5xl font-bold ">Meet Our Team</h1>
                    <p className=" text-red-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero ipsum est, <br /> officiis quisquam nulla hic ipsa laboriosam, ex qui dolor tempore id laudantium!  ,<br />Totam fuga doloribus dolorum expedita nam debitis dolor
                    </p>
              </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div id="slide11" className="carousel-item relative ">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className='font-bold text-slate-900'>Engine Expert</p>
                            <div className='flex justify-center gap-5'>
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaInstagram></FaInstagram>
        <FaLinkedin></FaLinkedin>
      </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide33" className="btn btn-circle">❮</a>
                      
                    </div>
                </div>
                <div id="slide22" className="carousel-item relative ">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className='font-bold text-slate-900'>Engine Expert</p>
                            <div className='flex justify-center gap-5'>
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaInstagram></FaInstagram>
        <FaLinkedin></FaLinkedin>

      </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
                    </div>
                </div>
                <div id="slide33" className="carousel-item relative ">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={team3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className='font-bold  text-slate-900'>Engine Expert</p>
                            <div className='flex justify-center gap-5'>
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaInstagram></FaInstagram>
        <FaLinkedin></FaLinkedin>
      </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                        {/* <a href="#slide22" className="btn btn-circle">❮</a> */}
                        <a href="#slide11" className="btn btn-circle">❯</a>
                    </div>
                    
                </div>
                






                
            </div>

        </div>
    );
};

export default Teams;