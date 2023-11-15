import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

import PropTypes from 'prop-types';


export const Sidebar = ({isOpen, toggle}) => {


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>
                   Signup
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' onClick={toggle}>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
  
}
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

