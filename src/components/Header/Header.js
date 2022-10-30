import React from 'react';

import StyledHeader from './Header.styled';

const Header = (props) => {
    return (
        <StyledHeader>{props.children}</StyledHeader>
    );
}

export default Header;