import React from 'react';

import CalendarItem from './CalendarItem';

class CalendarList extends React.Component {   
    render() {
        return <ul>{ this.renderMeetingsList() }</ul>
    }

    renderMeetingsList() {
        return this.props.meetings
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(item => 
                <CalendarItem item={item} key={item.id} />
            )
    }
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