import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTrash } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

class CalendarItem extends React.Component {  
  render() {
    const { item, deleteMeeting } = this.props

    return (
      <li
        className='meeting__item'
      >
        <div className='meeting__info'>
          <h3 className='meeting__guest'>{item.firstName} {item.lastName}</h3>
          <p className='meeting__email'>{item.email}</p>
          <span className='meeting__date'><FontAwesomeIcon icon={faCalendarDays} className='meeting__icon' />{item.date}</span>
          <span className='meeting__time'><FontAwesomeIcon icon={faClock} className='meeting__icon' />{item.time}</span>
        </div>   
        <Button 
          onClick={() => deleteMeeting(item.id)}
          className='btn btn--delete'
        >
          delete
          <FontAwesomeIcon icon={faTrash} className='meeting__icon--delete' />
        </Button>
      </li>
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
