import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid col-12">
                <NavLink className="navbar-brand" to="/">
                    <button id="button" className="btn btn-primary" type="button"><h2 className="d-inline-block align-text-top">
                        Digital Futures News</h2>
                    </button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;