import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'


export const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>
                    About
                </SidebarLink>
                <SidebarLink to='discover'>
                    Discover
                </SidebarLink>
                <SidebarLink to='services'>
                    Services
                </SidebarLink>
                <SidebarLink to='signup'>
                   Signup
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}
