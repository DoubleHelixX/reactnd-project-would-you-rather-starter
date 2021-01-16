import { RECEIVE_USERS, USER_ADD_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case USER_ADD_ANSWER :{
      console.log('geejuz: state\n', state, '\ns.quest: ', state.questions, '\n s.users ',state.users, action.users);
      return {
        ...state,
        ...action.users 
        // [action.questions]: action.questions,
        
      } }
      
    default :
      return state
  }
}