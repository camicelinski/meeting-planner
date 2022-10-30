import styled from 'styled-components'

const StyledCalendarItem = styled.li`
  margin: 10px;
  width: 250px;
  height: 250px;
  background-color: #66a0ad;
  border-radius: 15px;

  div {
    padding: 15px;    

    &.meeting__info-guest {
      background-color: #497c87;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      a {
      text-decoration: none;
      color: #000;

      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
    }

    &.meeting__info-date {
      padding: 25px 15px;
      display: flex;
      flex-direction: column;

      span {                
        padding: 5px 0;
        //font-family: 'Rubik', Arial, sans-serif;
        font-size: 1rem;
        letter-spacing: 0.1rem;

        * {          
          &.meeting__icon {
            margin-right: 5px;
            color: #196575;
            padding-right: 5px;
          }          
        }
      }

      button * {
        &.meeting__icon--delete {
            margin-left: 15px;
          }
      }
    }   
  }
`

export default StyledCalendarItem