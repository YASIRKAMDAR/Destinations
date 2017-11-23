import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import logo from '../images/Emirates_Logo_global.svg' 
import searchImg from '../images/search.png' 

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  focusInput(event) {
    document.getElementById('searchtext').focus();
  }
  render() {
    return (
      <div className="HeaderBlock">
        <div className="container">
          <Navbar light expand="xs">
            <NavbarBrand href="/">
              <img src={logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Nav className="ml-auto" navbar>
                <NavItem>
                      <form className="form-inline my-2 my-lg-0">
                        <div className="input-group search-button"> 
                            <div className="input-group-btn"> 
                                <img src={searchImg} alt="search" onClick={(event) => this.focusInput(event)}  />
                              <input id="searchtext" className="form-control" aria-label="search" placeholder="Search" /> 
                            </div> 
                          </div>
                      </form>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;