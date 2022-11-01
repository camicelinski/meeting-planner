import styled from 'styled-components'

const StyledCalendarForm = styled.form`
  //background-color: #66a0ad;
 // margin: 10px;
  //padding: 15px;
  //border-radius: 15px;

  align-items: center;
  border-radius: var(--radius-primary);
  box-shadow: 0.8rem 0.8rem 1.4rem var(--color-shadow-primary), -0.2rem -0.2rem 1.8rem var(--color-shadow-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //max-width: 450px;
  //min-height: 450px;
  padding: 1.25rem;
  transition: box-shadow var(--transition-style);
  width: 100%;

  @media screen and (min-width: 768px) {      
    
  }
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`

export default StyledCalendarForm