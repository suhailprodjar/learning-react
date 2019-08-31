export default function getUserDetails() {
    const user = JSON.parse(localStorage.getItem('learner-details'));
    const tutor = JSON.parse(localStorage.getItem('tutor-details'));
    return dispatch => {
        if (user && user.userCode) {
            dispatch({
                type: 'LEARNER',
                payload: {
                    type: 'USER',
                    code: user.code,
                    name: user.name
                }
            })
        } else if (tutor && tutor.code) {
            dispatch({
                type: 'TUTOR',
                payload: {
                    type: tutor.isInstitute ? 'INSTITUTOR' : 'TUTOR',
                    code: tutor.tutorCode,
                    name: tutor.name
                }
            })
        }
    }
}
