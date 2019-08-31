import is_server from './isServer';
export default function isTab() {
    if (!is_server()) {
        return window.innerWidth <= 991;
    }
}