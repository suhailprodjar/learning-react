
export default (state = {}, action) => {
  switch (action.type) {
    case 'TUTOR_CREATED':
      return action.payload;
    case 'NOTIFICATION':
      return action.payload;
    default:
      return state;
  }
};