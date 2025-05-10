import Links from "./Links";

import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar-frame">
            <nav>
                <div id="logo">In Another Bookland</div>
                <Links />
            </nav>
        </div>
    );
}

export default Navbar;
