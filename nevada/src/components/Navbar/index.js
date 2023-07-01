import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/food" activeStyle>
                        Food
                    </NavLink>
                    <NavLink to="/adventure" activeStyle>
                        Adventure
                    </NavLink>
                    <NavLink to="/shopping" activeStyle>
                        Shopping
                    </NavLink>
                    <NavLink to="/historical" activeStyle>
                        Historical
                    </NavLink>
                    <NavLink to="/nightlife" activeStyle>
                        Nightlife
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;