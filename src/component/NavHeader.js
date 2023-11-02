import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavHeader = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ReactJs</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/about/">Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Menu
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                List
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Create
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavHeader
