import styled from 'styled-components'

const StyledCalendarListContainer = styled.div`  
  //width: 55%;
  //min-width: 150px;

  h2 {    
    font-family: 'Rubik', Arial, sans-serif;
    color: var(--text-user);
    margin-top: 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) { 
    //list-style: none;
    //display: flex;
    //flex-wrap: wrap; 
    //margin-top: 0;
    //justify-content: space-between;

    h2 {
      margin-bottom: 15px;
      margin-left: 15px;
    }
  }
`

export default StyledCalendarListContainer