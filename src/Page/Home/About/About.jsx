import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='lg:w-1/2 relative'>
                <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={img1} className="w-1/2 absolute right-20 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h1 className='text-xl font-mono text-red-600 font-bold'>About us</h1>
                    <h1 className="text-5xl font-bold space-y-2">We are qualified <br /> & of experience 
                    <br /> in this field</h1>
                    <p className="py-6 text-red-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero ipsum est, officiis quisquam nulla hic ipsa laboriosam, ex qui dolor tempore id laudantium! Totam fuga doloribus dolorum expedita nam debitis dolor
                    <br />
                    <br />
                    natus. Doloribus illum delectus optio cumque explicabo voluptatum ab vitae beatae quisquam! Dolores ut inventore tenetur animi possimus.</p>
                    <button className="btn btn-primary bg-red-600 mr-4 text-white">Get More Info</button>
                    
                </div>
            </div>
        </div>
    );
};

export default About;