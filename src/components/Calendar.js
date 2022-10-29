import React from 'react';
import { connect } from 'react-redux';

import { loadMeetingsAction, saveMeetingAction, removeMeetingAction } from '../actions/calendar';
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm'
import CalendarAPI from '../providers/calendarProvider';

class Calendar extends React.Component {
    calendarProvider = new CalendarAPI()

    sendMeetingToApi = (meetingData) => {
        this.calendarProvider.add(meetingData)
            .then(meetingData => {
                this.props.addMeetingToState(meetingData);
            })
    }

    loadMeetingsList = () => {
        this.calendarProvider.load()
            .then((meetings) => {
                this.props.loadMeetings(meetings)
            })
    }

    componentDidMount = () => {
        this.loadMeetingsList()
    }

    deleteMeeting = (id) => {
        this.calendarProvider.remove(id)            
            .then(() => {
                this.loadMeetingsList()
            })    
    }

    render() {
        return (
            <section>
                <CalendarList 
                    meetings={ this.props.meetings }
                    deleteMeeting={ this.deleteMeeting }
                />
                <CalendarForm saveMeeting={ this.sendMeetingToApi }/>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        meetings: state.meetings
    }
}

const mapActionToProps = {
    loadMeetings: loadMeetingsAction,
    addMeetingToState: saveMeetingAction,
    deleteMeeting: removeMeetingAction
}

export default connect(
    mapStateToProps, mapActionToProps
)(Calendar);
