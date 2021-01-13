import { RECEIVE_QUESTIONS, ADD_QUESTION, RECEIVE_QUESTIONS_ANSWER, ADD_QUESTION_ANSWER} from '../actions/questions'

export default function Questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case RECEIVE_QUESTIONS_ANSWER :
      return {
        ...state,
        ...action.answer
        }
      
    case ADD_QUESTION :
      return {
        ...state,
        [action.questions.id]: action.questions
      }

    case ADD_QUESTION_ANSWER :
        return {
          ...state,
          [action.qid]: action.answers
        } 

    default :
      return state
  }
}


// id: generateUID(),
//     timestamp: Date.now(),
//     author,
//     optionOne: {
//       votes: [],
//       text: optionOneText,
//     },
//     optionTwo: {
//       votes: [],
//       text: optionTwoText,
//     }

// {authedUser, qid, answer}
