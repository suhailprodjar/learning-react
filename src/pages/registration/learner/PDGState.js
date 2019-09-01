
const PDGState = (state, action) => {
    switch (action.type) {
        case 'SELECT_COURSE_TYPE':
        case 'MODE_GENERATED':
        case 'SELECT_COURSE':
        case 'SET_COURSES':
        case 'REST_ITEMS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default PDGState;