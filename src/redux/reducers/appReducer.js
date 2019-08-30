
export default (state = {}, action) => {
  const { type = '', payload = {} } = action;
  switch (type) {
    case 'TUTOR_CREATED':
      return payload;
    case 'NOTIFICATION':
      return payload;
    case 'LEAD_DETAILS': {
      if (payload.type === 'USER') {
        return {
          ...payload,
          messageText: `Hi ${payload.name}..! Welcome Back..`
        }
      } else {
        return {
          ...payload,
          messageText: `Hey ${payload.name}..! Thanks for Register`
        }
      }
    }
    default:
      return state;
  }
};