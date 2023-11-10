
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements'


export const Navbar = () => {
    return (
   <>
   <Nav>
    <NavbarContainer>
      <NavLogo to='/'>dollars</NavLogo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
      <NavMenu>
      <NavItem>
        <NavLinks to='about'>about</NavLinks>
      </NavItem>

      </NavMenu>
    </NavbarContainer>
   </Nav>
   </>
    )
  }