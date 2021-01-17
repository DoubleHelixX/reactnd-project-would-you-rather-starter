export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_VOTES = 'UPDATE_USER_VOTES'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'



export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserVotes(users) {
  return {
    type: UPDATE_USER_VOTES,
    users,
  }
}

export function updateUserQuestions(users) {
  return {
    type: UPDATE_USER_QUESTIONS,
    users,
  }
}
