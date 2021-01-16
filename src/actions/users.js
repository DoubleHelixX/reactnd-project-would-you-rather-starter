export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_VOTE = 'USER_ADD_VOTE'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userAddVote(users) {
  return {
    type: USER_ADD_VOTE,
    users,
  }
}
