import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'


export const Navbar = ({toggle}) => {
    return (
   <>
   <Nav>
    <NavbarContainer>
      <NavLogo to='/'>dollars</NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
      <NavItem>
        <NavLinks to='about'>About</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to='discover'>Discover</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to='services'>Services</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to='signup'>Sign Up</NavLinks>
      </NavItem>
      <NavBtn>
        <NavBtnLink to='/singnin'>Sign In </NavBtnLink>
      </NavBtn>
      </NavMenu>
    </NavbarContainer>
   </Nav>
   </>
    )
  }

  Navbar.propTypes = {
    toggle: PropTypes.func.isRequired,
  }
  