import React, { useEffect, useRef, useState } from 'react'

import {links} from './navdata'
import {FaBars} from 'react-icons/fa'
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter as Router} from 'react-router-dom'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Sidebar from './Sidebar';
import Sidebar1 from './Sidebar1';
// import { Navbar, Nav } from "react-bootstrap";

function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  
  
  return (

<div>
<MDBNavbar  expand='lg' light bgColor='dark'>
      <MDBContainer fluid >
<Sidebar/>
       

        <MDBNavbarBrand href='#' style={{color:'white'}}>
          My app
        </MDBNavbarBrand>
       
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' style={{color:'white'}}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/signin'style={{color:'white'}}>Sign in</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink href='/login' style={{color:'white'}}>Log in</MDBNavbarLink>
             
            </MDBNavbarItem>

          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      
    </MDBNavbar>
</div>
    








      
    






























  
  )
}

export default Navbar
