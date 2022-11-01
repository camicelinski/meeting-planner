import React from 'react'

import StyledHeader from './Header.styled'

const Header = (props) => {
    const { isDarkMode } = props
    return (
        <StyledHeader isDarkMode={isDarkMode}>{props.children}</StyledHeader>
    );
}

export default Header