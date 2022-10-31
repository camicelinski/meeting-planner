import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    height: 8rem;
    mix-blend-mode: darken;
  }

  h1 {    
    padding: 0 15px;
    font-family: 'Rubik', Arial, sans-serif;
    //color: var(--text-highlight);
    font-size: 3.4rem;
    line-height: 8rem;
    letter-spacing: 0.1rem;
    margin: 0 0 1.5rem;
    //transition: text-shadow var(--transition-style), color var(--transition-style);
  }
`

export default StyledHeader