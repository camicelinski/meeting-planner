import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTrash } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button'

import StyledCalendarItem from './CalendarItem.styled'

class CalendarItem extends React.Component {  
  render() {
    const { item, deleteMeeting } = this.props

    return (
      <StyledCalendarItem
        className='meeting__item'
      >
        <div className='meeting__info-guest'>          
          <a href={`mailto: ${item.email}`}>
            <h3 className='meeting__guest'>{item.firstName} {item.lastName}</h3>
            <p className='meeting__email'>{item.email}</p>
          </a>
        </div> 
        <div className='meeting__info-date'>
          <span className='meeting__date'>
            <FontAwesomeIcon icon={faCalendarDays} className='meeting__icon' />
            {item.date}
          </span>
          <span className='meeting__time'>
            <FontAwesomeIcon icon={faClock} className='meeting__icon' />
            {item.time}
          </span>    
          <div>      
            <Button 
              onClick={() => deleteMeeting(item.id)}
              className='btn btn--delete'
            >
              <FontAwesomeIcon icon={faTrash} className='meeting__icon--delete' />
            </Button>
          </div>
        </div>
      </StyledCalendarItem>
    )
  }  
}
/*
const mapStateToProps = (state, props) => {
  return {
    meetings: state.meetings
  }
}

const mapActionToProps = {
  deleteMeeting: removeMeetingAction
}

CalendarItem.propTypes = {
  item: PropTypes.object,
  deleteMeeting: PropTypes.func,
  className: PropTypes.string
}
*/
export default CalendarItem
