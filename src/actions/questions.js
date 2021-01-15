import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS_ANSWER = 'RECEIVE_QUESTIONS_ANSWER'
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function userAddAnswer(users) {
    return {
      type: USER_ADD_ANSWER,
      users
    }
  }


export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .catch((e) => {
      console.warn('Error in saving question: ', e)
      // dispatch(toggleTweet(info))
      // alert('The was an error liking the tweet. Try again.')
    })
      .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
      .then(() => dispatch(hideLoading()))
     
  }
}

export function handleAddQuestionAnswer ( qid, option) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
  
      dispatch(showLoading())
  
      return _saveQuestionAnswer({
        authedUser, 
        qid, 
        option
      })
        .then((users) => {
          dispatch(userAddAnswer({users}));
          // dispatch(questionAddAnswer({users}));
        
        })
        .catch((e) => {
          console.warn('Error in saving question: ', e)
          // dispatch(toggleTweet(info))
          // alert('The was an error liking the tweet. Try again.')
        })
        .then(() => dispatch(hideLoading()))
    }
  }

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function receiveQuestionsAnswer (answers) {
    return {
      type: RECEIVE_QUESTIONS_ANSWER,
      answers,
    }
  }
  


