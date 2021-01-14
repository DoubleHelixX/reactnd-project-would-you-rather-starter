import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'sarahedo';
//tylermcginnis

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers()
      .then((users) => {
          console.log('GOT USERS: ', users);
        _getQuestions()
            .then((questions) => {
                console.log('GOT QUESTIONS: ',  questions);

                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
      })
  }
}