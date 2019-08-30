export default function getUserDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    const tutor = JSON.parse(localStorage.getItem('tutor'));
    return dispatch => {
        if (user.userCode) {
            dispatch({
                type: 'LEAD_DETAILS',
                payload: {
                    type: 'USER',
                    userCode: user.userCode,
                    name: user.name
                }
            })
        } else if (tutor.tutorCode) {
            dispatch({
                type: 'LEAD_DETAILS',
                payload: {
                    type: tutor.isInstitute ? 'INSTITUTOR' : 'TUTOR',
                    tutorCode: tutor.tutorCode,
                    name: tutor.name
                }
            })
        }
    }
}
