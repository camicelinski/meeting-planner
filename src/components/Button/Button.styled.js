import styled from 'styled-components'

const StyledButton = styled.button`
  //background: var(--bg-primary);
  //border-radius: var(--radius-primary);
  //box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  //color: var(--text-primary);
  //font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.75rem 0;
  //transition: color var(--transition-style), background-color var(--transition-style), box-shadow var(--transition-style);  
  min-width: 100px;
  padding: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.btn--submit {
    width: 70%;
    margin: 10px 15%;
    color: #000;
    background-color: #f6b93b;
    text-transform: uppercase;

    &:hover {
      background-color: #e58e26;
    }
  }

  &.btn--delete {
    margin: 15px auto;
    width: 70%;
    height: min-content;
    color: #e3e3e3;
    background-color: #497c87;  
    font-size: 0.9rem;
    text-transform: uppercase;

    &:hover {
      background-color: #3c6382;
    }
  }
  
  :active {
    //box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary), inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  }
  
  @media screen and (min-width: 960px) {
    :hover {
      //color: var(--text-highlight);
    }
  }
`

export default StyledButton