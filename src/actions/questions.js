import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS_ANSWER = 'RECEIVE_QUESTIONS_ANSWER'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addQuestionAnswer(answer) {
    return {
      type: ADD_QUESTION_ANSWER,
      answer,
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
      .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestionAnswer ( qid, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
  
      dispatch(showLoading())
  
      return _saveQuestionAnswer({
        authedUser, 
        qid, 
        answer
      })
        .then(() => dispatch(addQuestionAnswer({authedUser, qid, answer})))
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
  


