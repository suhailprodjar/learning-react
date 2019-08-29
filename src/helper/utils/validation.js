export function validateEmail(email) {
    let reg = new RegExp(
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return reg.test(email);
}

export function validateMobile(number) {
    return number.length === 10;
}

export function checkMandatoryFields({ email, name, mobileNumber}) {
    return {
        hasError: !(validateEmail(email) && validateMobile(mobileNumber) && name),
        emailError: !validateEmail(email),
        mobileError: !validateMobile(mobileNumber),
        nameError: name ? false : true,
    }
}