import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" className="mb-5">
          <NavbarBrand href="/">Github Search</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Here</NavLink>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    );
  }
}

export default Header;
