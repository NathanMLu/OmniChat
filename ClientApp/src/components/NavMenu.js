import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export class NavMenu extends Component {
    
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar id = "navbar" className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <span className = "text-center mx-lg-5">
                            <a href="https://ibb.co/HqDM47J"><img src="https://i.ibb.co/cQcp3Jm/Omni-Chat-2.png" alt="Omni-Chat-2" border="0" width = "50px"/></a>
                        </span>
                        </NavbarBrand>
                        
                        <NavbarBrand id = "navbar-title" className = "text-xl-center "tag={Link} to="/">
                            <span>
                                <h2>OmniTalk</h2>
                            </span>
                        </NavbarBrand>

                        
                        
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                                  navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem id = "addfriend"className = "border rounded-3 border-dark border-3">
                                    <NavLink tag={Link} className="text-dark" to="/friend">Add Friend</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
