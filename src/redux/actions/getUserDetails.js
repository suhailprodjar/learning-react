export default function getUserDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    const tutor = JSON.parse(localStorage.getItem('tutor'));
    return dispatch => {
        if (user && user.userCode) {
            dispatch({
                type: 'LEAD_DETAILS',
                payload: {
                    type: 'USER',
                    userCode: user.code,
                    name: user.name
                }
            })
        } else if (tutor && tutor.code) {
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
