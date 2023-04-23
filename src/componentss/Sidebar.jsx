import React, { useState } from 'react'
import './sidebar.css'
import styled from 'styled-components'
import {FaBars, FaBookOpen, FaIcons, FaTimes} from 'react-icons/fa'
import {Sidebardata} from './sidedata'
import * as AiIcons from 'react-icons/ai';
import SideNav,{Toggle,NavItem,NavIcon,NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import {Nav} from "react-bootstrap";
import SidebarMenu,{Body} from 'react-bootstrap-sidebar-menu';
import Sidebarrow from '../pages/Sidebarrow'
import { MDBIcon } from 'mdb-react-ui-kit'
import { IconContext } from 'react-icons/lib'
import SubMenu from './SubMenu'
function Sidebar() {

    const Nav = styled.div`
    background: #15171c;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
  `;
  
  const NavIcon = styled(Link)`
    margin-left: 1rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

    const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
 return(
<div>
<IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {Sidebardata.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>


</div>

 )

    

   

	
  
}

export default Sidebar
