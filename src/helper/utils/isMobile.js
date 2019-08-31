import is_server from './isServer';
export default function isMobile() {
    if (!is_server()) {
        return window.innerWidth <= 767;
    }
}