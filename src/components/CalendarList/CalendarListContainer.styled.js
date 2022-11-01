import styled from 'styled-components'

const StyledCalendarListContainer = styled.div`  

  h2 {    
    font-family: 'Rubik', Arial, sans-serif;
    color: var(--text-user);
    margin-top: 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) { 

    h2 {
      margin-bottom: 15px;
      margin-left: 15px;
    }
  }
`

export default StyledCalendarListContainer