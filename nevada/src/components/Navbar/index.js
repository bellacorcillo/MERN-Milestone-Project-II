import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./index.css";
 
const Navbar = () => {
    return (
        <>
        <div id='navbar'>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <div className="col">
                            <div className="row">
                                Home
                            </div>
                            <div className="row">
                                <img src='/images/homepage-icon.png' alt="homepage-icon" className="homepage-icon"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/food" activeStyle>
                        <div className="col">
                            <div className="row">
                                Food
                            </div>
                            <div className="row">
                                <img src='/images/food-icon.png' alt="food-icon" className="food-icon"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/adventure" activeStyle>
                        <div className="col">
                            <div className="row">
                                Adventure
                            </div>
                            <div className="row">
                                <img src='/images/adventure-icon.png' alt="adventure-icon" className="adventure-icon"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/shopping" activeStyle>
                        <div className="col">
                            <div className="row">
                                Shopping
                            </div>
                            <div className="row">
                                <img src='/images/shopping-icon.png' alt="shopping-icon" className="shopping-icon"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/historical" activeStyle>
                        <div className="col">
                                <div className="row">
                                History
                            </div>
                            <div className="row">
                                <img src='/images/historical-icon.png' alt="historical-icon" className="historical-icon"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/nightlife" activeStyle>
                        <div className="col">
                            <div className="row">
                                Nightlife
                            </div>
                            <div className="row">
                                <img src='/images/nightlife-icon.png' alt="nightlife-icon" className="nightlife-icon"/>
                            </div>
                        </div>
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
        </>
    );
};
 
export default Navbar;