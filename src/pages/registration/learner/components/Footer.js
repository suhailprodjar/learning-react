import React from 'react';
function Footer({
    onPrev,
    onNext
}) {
    return (
        <div className="pdg-modal-footer">
            <ul className="list-unstyled footer-arrow">
                <li><i className={`pyt-arrow-left-16 ${onPrev ? '' : 'd-none'}`} onClick={onPrev}></i></li>
                <li><i className={`pyt-arrow-right-16  ${onNext ? '' : 'd-none'}`} onClick={onNext}></i></li>
            </ul>
        </div>
    )
}
export default Footer;