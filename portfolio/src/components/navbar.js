import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navibar extends React.Component {
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
  render() {
    return (
      <div id="navbar">
        <Navbar color="light" light expand="md" sticky="top">
          <NavbarBrand href="/">AIKOL</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com"> My LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com">My Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Templates
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Template
                  </DropdownItem>
                  <DropdownItem>
                    Template
                  </DropdownItem>
                  <DropdownItem>
                    Template
                  </DropdownItem>
                  <DropdownItem>
                    Template
                  </DropdownItem>
                  <DropdownItem>
                    Template
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="header">
          <h1>Freelance Web Developer</h1>
          <p>I'm eager to work, deliver sweet websites.
            I have actively delivered beautifull user interfaces</p>
        </div>
        <div id="footer">
          <h2>Hire me</h2>
          <p>Together we will build website for your bussiness<br /> and together we will grow bigger, starbucks is on me ;)</p>
          <hr />
          <div id="copyright">
            Copyright&copy; 2019 open source | Designed by: <a href="https://github.com/SolderingKnowledge">Aikol</a>
          </div>
        </div>
      </div>
    );
  }
}
