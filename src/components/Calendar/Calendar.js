import React from 'react'
import { connect } from 'react-redux'

import { loadMeetingsAction, saveMeetingAction, removeMeetingAction } from '../../actions/calendar'
import Switcher from '../Switcher'
import Header from '../Header/Header'
import CalendarList from '../CalendarList/CalendarList'
import CalendarForm from '../CalendarForm/CalendarForm'
import CalendarAPI from '../../providers/calendarProvider'

import StyledCalendar from './Calendar.styled'

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
        const { isDarkMode, toggleTheme } = this.props
        return (
            <StyledCalendar>
                <Switcher
                    name={'themeSwitcher'}
                    isOn={isDarkMode}
                    handleChange={toggleTheme}
                />
                <Header isDarkMode={isDarkMode}>
                    <h1>my meetings</h1>
                    <img src="../../img/schedule.png" alt="logo" />
                </Header>
                <main>
                    <CalendarList 
                        meetings={ this.props.meetings }
                        deleteMeeting={ this.deleteMeeting }
                    />
                    <CalendarForm saveMeeting={ this.sendMeetingToApi }/>
                </main>
            </StyledCalendar>
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
