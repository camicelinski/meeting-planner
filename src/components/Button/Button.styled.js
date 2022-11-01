import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--bg-primary);
  border-radius: var(--radius-primary);
  box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  color: var(--text-primary);
  letter-spacing: 0.1rem;
  padding: 0.75rem 0;
  transition: color var(--transition-style), background-color var(--transition-style), box-shadow var(--transition-style);  
  font-size: 1rem;
  border: none;

  :active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary), inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  }

  &.btn--submit {
    width: max-content;
    margin: 20px auto 10px;
    padding: 8px 20px;
    text-transform: uppercase;

    &:hover {   
      background-color: var(--text-highlight);
      color: #fff;
    }

    @media screen and (min-width: 768px) {      
      margin-top: 25px;
    }
  }

  &.btn--delete {
    min-width: 0;
    width: max-content;
    font-size: 1rem;
    color: var(--text-user);
    background: transparent;
    border-radius: var(--radius-secondary);
    border: none;
    outline: 1px solid transparent;
    padding: 10px 12px;    

    &:hover {
      color: var(--text-primary);
    }
  }
  
  @media screen and (min-width: 960px) {
    :hover {
      color: var(--text-highlight);
    }
  }
`

export default StyledButton
