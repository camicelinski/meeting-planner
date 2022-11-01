import styled from 'styled-components'

const StyledCalendarList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  //width: 55%;
  //min-width: 150px;

  @media screen and (min-width: 768px) {      
    margin-top: 0;
    margin-right: 20px;
    justify-content: space-between;
  }
`

export default StyledCalendarList