import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            About Me
          </SidebarLink>
          <SidebarLink to='resume' onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
