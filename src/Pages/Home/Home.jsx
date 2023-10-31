import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-4">
            <Nav></Nav>
            <Banner></Banner>
        </div>
    );
};

export default Home;