import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveUser } from '../utils/_DATA'







export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_VOTES = 'UPDATE_USER_VOTES'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'
export const ADD_USER = 'ADD_USER'




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

export function addUser(users) {
    return {
      type: ADD_USER,
      users,
    }
}


export function handleAddUser (id, username, img) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveUser({
     id,
     username,
     img
    })
    .catch((e) => {
      console.warn('Error in saving user: ', e)
      // dispatch(toggleTweet(info))
      // alert('The was an error liking the tweet. Try again.')
    })
      .then(({users}) => {
        dispatch(addUser(users));

      })
      .then(() => dispatch(hideLoading()))
     
  }
}