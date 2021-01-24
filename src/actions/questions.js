import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import { updateUserVotes, updateUserQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS_ANSWER = "RECEIVE_QUESTIONS_ANSWER";
export const QUESTION_ADD_ANSWER = "QUESTION_ADD_ANSWER";

function addQuestion(questions) {
  return {
    type: ADD_QUESTION,
    questions,
  };
}

function questionAddAnswer(questions) {
  return {
    type: QUESTION_ADD_ANSWER,
    questions,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .catch((e) => {
        console.warn("Error in saving question: ", e);
        // dispatch(toggleTweet(info))
        // alert('The was an error liking the tweet. Try again.')
      })
      .then(({ questions, users }) => {
        dispatch(addQuestion(questions));
        dispatch(updateUserQuestions(users));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestionAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return _saveQuestionAnswer({
      authedUser,
      qid,
      option,
    })
      .then(({ users, questions }) => {
        dispatch(questionAddAnswer(questions));
        dispatch(updateUserVotes(users));
      })
      .catch((e) => {
        console.warn("Error in saving question: ", e);
        // dispatch(toggleTweet(info))
        // alert('The was an error liking the tweet. Try again.')
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function receiveQuestionsAnswer(answers) {
  return {
    type: RECEIVE_QUESTIONS_ANSWER,
    answers,
  };
}
