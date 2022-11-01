import React from 'react';

import CalendarItem from '../CalendarItem';
import { getCurrentDate } from '../../helpers/helpersFunctions'

import StyledCalendarList from './CalendarList.styled';
import StyledCalendarListContainer from './CalendarListContainer.styled';

const CalendarList = props => {
    const { meetings, deleteMeeting, ...otherProps } = props 

    const renderMeetingsList = () => {
        const currentDate = getCurrentDate()
        const futureMeetings = meetings.filter(meeting => new Date(meeting.date) >= new Date(currentDate))
        console.log(futureMeetings)
        const sortedMeetings = futureMeetings.sort((a, b) => new Date(a.date) - new Date(b.date))
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

    const renderOldMeetingsList = () => {
        const currentDate = getCurrentDate()
        const pastMeetings = meetings.filter(meeting => new Date(meeting.date) <= new Date(currentDate))
        const sortedMeetings = pastMeetings.sort((a, b) => new Date(b.date) - new Date(a.date))
        return sortedMeetings.map(item => {
                return (
                    <CalendarItem
                        className={'old-meeting'}
                        key={item.id}
                        item={item}                    
                        deleteMeeting={deleteMeeting}
                    />
                )
            })                   
    }

    return (
        <StyledCalendarListContainer>
            <StyledCalendarList>{ renderMeetingsList() }</StyledCalendarList>
            <h2>przeszłe spotkania</h2>
            <StyledCalendarList>{ renderOldMeetingsList() }</StyledCalendarList>
        </StyledCalendarListContainer>
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