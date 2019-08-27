import { FETCH_ARTICLES } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
      case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
export const setMessage = messageText => ({
  type: 'SET_MESSAGE',
  message: messageText
});