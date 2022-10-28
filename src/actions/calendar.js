export function loadMeetingsAction(meetings) {
  return {
    type: 'loadMeetings',
    payload: { meetings }
  }
}

export function saveMeetingAction(meeting) {
  return {
    type: 'saveMeeting',
    payload: { meeting }
  }
}

export function removeMeetingAction(id) {
  return {
    type: 'removeMeeting',
    payload: { id }
  }
}