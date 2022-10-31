import styled from 'styled-components'

const StyledCalendarItem = styled.li`
  margin: 10px;
  width: 250px;
  height: 250px;
  //background-color: #66a0ad;
  //border-radius: 15px;

  //align-items: center;
  border-radius: var(--radius-primary);
  box-shadow: 0.8rem 0.8rem 1.4rem var(--color-shadow-primary), -0.2rem -0.2rem 1.8rem var(--color-shadow-secondary);
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //max-width: 450px;
  //min-height: 450px;
  //padding: 1.25rem;
  transition: box-shadow var(--transition-style);
  //width: 90%;

  div {
    padding: 15px;    

    &.meeting__info-guest {
      background-color: #cecece;
      border-top-left-radius: var(--radius-primary);
      border-top-right-radius: var(--radius-primary);

      a {
      text-decoration: none;
      color: var(--text-primary);

        h3 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    &.meeting__info-date {
      padding: 15px;
      display: flex;
      flex-direction: column;

      span {          
        padding: 5px 0;
        font-family: 'Rubik', Arial, sans-serif;
        font-size: 0.9rem;
        //letter-spacing: 0.1rem;
        display: flex;
        align-items: center;

        * {          
          &.meeting__icon {
            margin-right: 10px;
            color: var(--text-user);
            padding-right: 5px;

            background: transparent;
            border-radius: 50%;
            border: none;
            box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
            color: var(--text-user);
            height: 1.2rem;
            letter-spacing: 0.1rem;
            outline: 1px solid transparent;
            padding: 10px;
            //width: 100%;
            transition: box-shadow var(--transition-style);
          }          
        }
      }

      div {
        display: flex;
        justify-content: end;
      }       
    }
  } 
`

export default StyledCalendarItem