import {
  RECEIVE_USERS,
  UPDATE_USER_VOTES,
  UPDATE_USER_QUESTIONS,
  ADD_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case UPDATE_USER_VOTES: {
      return {
        ...state,
        ...action.users,
        // [action.questions]: action.questions,
      };
    }

    case UPDATE_USER_QUESTIONS: {
      // console.log('geejuz: state\n', state, '\ns.quest: ', state.users, '\n s.users ',state.users, action.users);
      return {
        ...state,
        ...action.users,
        // [action.questions]: action.questions,
      };
    }

    case ADD_USER: {
      // console.log(
      //   "geejuz: state\n",
      //   state,
      //   "\ns.quest: ",
      //   state.users,
      //   "\n s.users ",
      //   state.users,
      //   action.users
      // );
      return {
        ...state,
        ...action.users,
        // [action.questions]: action.questions,
      };
    }

    default:
      return state;
  }
}
