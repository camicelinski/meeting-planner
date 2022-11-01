import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--bg-primary);
  border-radius: var(--radius-primary);
  box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  color: var(--text-primary);
  //font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.75rem 0;
  transition: color var(--transition-style), background-color var(--transition-style), box-shadow var(--transition-style);  
  //min-width: 100px;
  //padding: 8px;
  font-size: 1rem;
  border: none;
  //border-radius: 5px;
  //cursor: pointer;
  transition: all 0.5s ease-in-out;

  :active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary), inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
  }

  &.btn--submit {
    width: max-content;
    margin: 20px auto 10px;
    padding: 8px 20px;
    //color: #000;
    //background-color: #f6b93b;
    text-transform: uppercase;

    &:hover {
      //background-color: #e58e26;      
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
    //text-align: right;
    //margin-bottom: 20px;
    //width: 70%;
    //height: min-content;
    //color: #e3e3e3;
    //background-color: #497c87;  
    font-size: 1rem;
    //text-transform: uppercase;

    color: var(--text-user);
    //padding-right: 5px 0;
    background: transparent;
    border-radius: var(--radius-secondary);
    border: none;
    //box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    //color: var(--text-user);
    //height: 1.2rem;
    outline: 1px solid transparent;
    padding: 10px 12px;
    //width: 100%;
    //transition: box-shadow var(--transition-style);    

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
