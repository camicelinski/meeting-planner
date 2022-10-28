const initState = {
  meetings: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'loadMeetings':
      const { meetings } = action.payload
      return { ...state, meetings: meetings }
    case 'saveMeeting':
      const { meeting } = action.payload
      return { ...state, meetings: [...state.meetings, meeting] }
    case 'removeMeeting':
      const { id } = action.payload
      return { ...state, meetings: state.meetings.filter((meeting) => meeting.id !== id) }
    default:
      return state
  }
}

export default reducer
