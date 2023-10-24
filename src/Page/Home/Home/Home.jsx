import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Service/Services";
import Teams from "../Teams/Teams";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div >
            <Services></Services>
            </div>
           <Teams></Teams>
        </div>
    );
};

export default Home;