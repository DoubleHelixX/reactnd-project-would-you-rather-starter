import { RECEIVE_QUESTIONS, ADD_QUESTION, RECEIVE_QUESTIONS_ANSWER, QUESTION_ADD_ANSWER} from '../actions/questions'

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
        // questions: action.questions
        // [action.users] : action.users,
        // [action.questions]: action.questions
        // ['users'][action.authedUser]['answers']={
        //   ...['users'][action.authedUser]['answers'],
        //   action.qid : action.option 
        // },
        // ['questions'][action.qid][action.option]['votes'].concat([action.authedUser])
      }

    case QUESTION_ADD_ANSWER :{
      console.log('geejuz: ', state, '\n' ,action);
      return {
        ...state,
        ...action.questions,
        // [action.users] : action.users
        // [action.questions]: action.questions,
        
      } }

    default :
      return state
  }
}


// users = {
//   ...users,
//   [authedUser]: {
//     ...users[authedUser],
//     answers: {
//       ...users[authedUser].answers,
//       [qid]: option
//     }
//   }
// }

// questions = {
//   ...questions,
//   [qid]: {
//     ...questions[qid],
//     [option]: {
//       ...questions[qid][option],
//       votes: questions[qid][option].votes.concat([authedUser])
//     }
//   }
// }


//QUESTIONS ARE GETTING SAVED AS STATE SOMEHOW 'GEEJUS' AND MAYBE STATE IS MORE THAN ONE THING LIKE IT SHOULD?