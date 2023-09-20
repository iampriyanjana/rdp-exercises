// import './App.css';
import { AiFillCustomerService } from "react-icons/ai";

function Nav(){
    return (
      <>
        <div className="container">
            <div className="list">
              <div className="icon">
                <li><AiFillCustomerService/></li>
                <li>Paynet.io</li>
              </div>
            
              <div className="menu">
                <li>Fees</li>
                <li>Careers</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>About</li>
              </div> 
              <li>Sign Up/Log In</li>
            </div>
            <hr></hr>
        </div>
      </>
    );
}
export default Nav;