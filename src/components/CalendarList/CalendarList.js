import React from 'react';

import CalendarItem from '../CalendarItem';

import StyledCalendarList from './CalendarList.styled';

const CalendarList = props => {
    const { meetings, deleteMeeting, ...otherProps } = props 

    const renderMeetingsList = () => {
        const sortedMeetings = meetings.sort((a, b) => new Date(b.date) - new Date(a.date))
        return sortedMeetings.map(item => {
                return (
                    <CalendarItem
                        key={item.id}
                        item={item}                    
                        deleteMeeting={deleteMeeting}
                    />
                )
            })                   
    }

    return (
        <StyledCalendarList>{ renderMeetingsList() }</StyledCalendarList>
    )   
}

export default CalendarList

/*
<li key={itemData.id}>
                {itemData.date} {itemData.time} => 
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
            </li>
            */