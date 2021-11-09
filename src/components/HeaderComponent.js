import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="lg">
                <div className="container mb-4">
                    <NavbarBrand className="mr-auto mr-5" href="/"><img src="/assets/images/bf29e52dbe054dd181da0d3d14f38e7f.png" alt="Healing Logo" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{ fontSize: "25px" }} className="ml-5" nav caret>
                                    Services
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/massage">
                                            Massages
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/facials">
                                            Facials
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/waxing">
                                            Waxing
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/bodytreatments">
                                            Body Treatments
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/giftcards">
                                    Gift Cards
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ fontSize: "25px" }} className="nav-link ml-5 pl-3" to="/contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;