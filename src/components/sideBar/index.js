import React from 'react'
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBtnWrap } from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {

    return(
        <SideBarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarMenu>
                <SideBarLink>Pizza</SideBarLink>
                <SideBarLink>Shawarma</SideBarLink>
                <SideBarLink>Fura da Nono</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute>Order Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default Sidebar;