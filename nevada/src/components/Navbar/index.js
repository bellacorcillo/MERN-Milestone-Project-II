import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Food" activeStyle>
                        Food
                    </NavLink>
                    <NavLink to="/Adventure" activeStyle>
                        Adventure
                    </NavLink>
                    <NavLink to="/Shopping" activeStyle>
                        Shopping
                    </NavLink>
                    <NavLink to="/Historical" activeStyle>
                        Historical
                    </NavLink>
                    <NavLink to="/Nightlife" activeStyle>
                        Nightlife
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;