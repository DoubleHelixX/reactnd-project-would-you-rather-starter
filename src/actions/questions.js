import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { userAddVote} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS_ANSWER = 'RECEIVE_QUESTIONS_ANSWER'
export const QUESTION_ADD_ANSWER = 'QUESTION_ADD_ANSWER'


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

  function questionAddAnswer(questions) {
    return {
      type: QUESTION_ADD_ANSWER,
      questions,
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
        .then(({users,questions}) => {
          console.log('wtf ', users, '\n quest: ', questions)
          dispatch(questionAddAnswer(questions));
          dispatch(userAddVote(users));
        
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
  


