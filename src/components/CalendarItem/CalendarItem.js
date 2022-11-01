import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTrash } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button'

import StyledCalendarItem from './CalendarItem.styled'

class CalendarItem extends React.Component {  
  render() {
    const { item, deleteMeeting, className } = this.props

    return (
      <StyledCalendarItem
        className={className}
      >
        <div className={`${className} meeting__info-guest`}>          
          <a 
            className={className}
            href={`mailto: ${item.email}`}
            >
            <h3>{item.firstName} {item.lastName}</h3>
            <p>{item.email}</p>
          </a>
        </div> 
        <div className='meeting__info-date'>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} className='meeting__icon' />
            {item.date}
          </span>
          <span>
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

export default CalendarItem
