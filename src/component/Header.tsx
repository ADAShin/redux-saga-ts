import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';

export const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: '10px' }}>
              <MDBIcon fas icon="book-open" />
            </span>
            Contact
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/addUser" className="nav-link text-white">
                  Add User
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/about" className="nav-link text-white">
                  About
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MDBBtn color="dark" type="submit">
                Search
              </MDBBtn>
            </form>
            <MDBBtn
              color="info"
              style={{ marginLeft: '4px' }}
              type="button"
              onClick={() => {}}
            >
              Reset
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
