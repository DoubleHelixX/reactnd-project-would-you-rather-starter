export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userAddAnswer(users) {
  return {
    type: USER_ADD_ANSWER,
    users,
  }
}
