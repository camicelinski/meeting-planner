import styled from 'styled-components'

const StyledCalendar = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;

  main {
    display: flex;
    flex-wrap: wrap-reverse;

    @media screen and (min-width: 768px) {      
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`

export default StyledCalendar