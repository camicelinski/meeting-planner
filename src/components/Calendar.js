import React from 'react';
import { connect } from 'react-redux';

import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';

class Calendar extends React.Component {
    apiUrl = 'http://localhost:3005/meetings';

    loadMeetingsFromApi() {
        fetch(this.apiUrl)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
                
                throw new Error('Network error!');
            })
            .then(resp => {
                this.props.loadMeetings(resp)
            })
            .catch(err => {
                console.error(err);
            });
    }

    sendMeetingToApi = (meetingData) => {
        fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(meetingData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
                
                throw new Error('Network error!');
            })
            .then(meetingData => {
                this.props.addMeetingToState(meetingData);
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.loadMeetingsFromApi();
    }

    render() {
        return (
            <section>
                <CalendarList meetings={ this.props.meetings } />
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
    addMeetingToState: saveMeetingAction
}

export default connect(
    mapStateToProps, mapActionToProps
)(Calendar);
