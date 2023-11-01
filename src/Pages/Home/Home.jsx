import About from "./About/About";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Service from "./Service/Service";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-4">
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Service></Service>


        </div>
    );
};

export default Home;