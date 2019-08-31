export function removeClass(tag = 'CLASS', keyValue = '', className = '') {
    try {
        switch (tag) {
            case 'CLASS':
                document.getElementsByClassName(keyValue)[0].classList.remove(className);
                break;
            case 'TAG':
                document.getElementsByTagName(keyValue)[0].classList.remove(className);
                break;
            default:
                document.getElementById(keyValue).classList.remove(className);
        }
    } catch {

    }
}