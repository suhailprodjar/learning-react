export function addClass(tag = 'CLASS', keyValue = '', className = '') {
    try {
        switch (tag) {
            case 'CLASS':
                document.getElementsByClassName(keyValue)[0].classList.add(className);
                break;
            case 'TAG':
                document.getElementsByTagName(keyValue)[0].classList.add(className);
                break;
            default:
                document.getElementById(keyValue).classList.add(className);
        }
    } catch { }
}