import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
    const toggleNavbar = () => {
        console.log('Navbar toggled');
    }

    return <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            <Container>
                <NavbarBrand tag={Link} to="/">Unified Messenger</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <ul className='nav-list'>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark nav-item" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark nav-item" to="/twilio">Twilio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark nav-item" to="/discord">Discord</NavLink>
                    </NavItem>
                </ul>
            </Container>
        </Navbar>
    </header>;
};

export default NavMenu;
