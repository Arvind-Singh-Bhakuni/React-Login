



import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar () {

  

    return (
        <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Immunefi</Link>
          <form className="d-flex">
            <Link className="btn btn-light" to="/">Log in</Link>
            <Link className="btn btn-light" to="/sign-up">Sign up</Link>
          </form>
        </div>
      </nav>
    );
}

export default Navbar;