
export default (state = {}, action) => {
  const { type = '', payload = {} } = action;
  switch (type) {
    case 'LEARNER_CREATED':
    case 'TUTOR_CREATED':
      return payload;
    case 'NOTIFICATION':
      return payload;
    case 'LEAD_DETAILS': {
      if (payload.type === 'USER') {
        return {
          ...payload
        }
      } else {
        return {
          ...payload
        }
      }
    }
    default:
      return state;
  }
};