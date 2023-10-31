import Appointment from "./Appointment";
import Logo from "./Logo";
import Navbar from "./Navbar";


const Nav = () => {
    return (
        <div>
           <nav className="grid grid-cols-12 justify-center items-center">

            {/* logo  */}


            <div className="col-span-3">
                <Logo></Logo>
            </div>


            {/* NavBar Menu */}

            <div className="col-span-6">
                <Navbar></Navbar>
            </div>

            {/* Appointment Menu */}


        <div className="col-span-3">
          <Appointment></Appointment>
        </div>


          
           </nav>
        </div>
    );
};

export default Nav;