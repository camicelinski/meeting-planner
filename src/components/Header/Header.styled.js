import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    height: 8rem;
    mix-blend-mode: darken;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  h1 {    
    padding: 0 15px;
    font-family: 'Rubik', Arial, sans-serif;
    //color: var(--text-highlight);
    font-size: 3.4rem;
    
    letter-spacing: 0.1rem;
    margin: 0 0 1.5rem;
    //transition: text-shadow var(--transition-style), color var(--transition-style);

    @media screen and (min-width: 768px) {
      line-height: 8rem;
    }
  }
`

export default StyledHeader