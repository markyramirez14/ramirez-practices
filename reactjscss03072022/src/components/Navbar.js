import {Outlet, Link} from "react-router-dom";
import '../styles/Style1.css';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Homepage</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to ="/Page1" className="nav-link active" aria-current="page" >Saturday</Link>
        </li>
        <li className="nav-item">
            <Link to ="/Page2" className="nav-link active" aria-current="page" >Sunday</Link>
        </li>
        
        </ul>
        </div>
    </div>
    </nav>
    <Outlet/>
        
        </>
    );
}
export default Navbar