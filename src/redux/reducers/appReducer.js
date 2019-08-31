
export default (state = {}, action) => {
  const { type = '', payload = {} } = action;
  switch (type) {
    case 'LEARNER': {
      const { type = 'USER', code, name } = action.payload;
      return {
        ...state,
        userDetails: {
          type,
          code,
          name
        }
      }
    }
    case 'TUTOR': {
      const { type, code, name } = action.payload;
      return {
        ...state,
        tutorDetails: {
          type,
          code,
          name
        }
      }
    }
    case 'NOTIFICATION':
      return {
        ...state,
        notification: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};