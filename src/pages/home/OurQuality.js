import React, { useState } from 'react';
import isMobile from '../../helper/utils/isMobile';


function MobileAccordian() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCollapsing, setCollapsing] = useState(false);
    const [height, setHeight] = useState('0px');
    const handleClick = (value) => {
        setCollapsing(true);
        setTimeout(() => {
            setHeight('0px');
            setActiveIndex(value === activeIndex ? null : value);
            setCollapsing(true);
            setTimeout(() => {
                setHeight('112px');
            }, 100);
            setTimeout(() => {
                setCollapsing(false);
            }, 500)
        }, 100);
    }
    return (
        <div class="quality-accordian" id="accordion">
            <div class="card" onClick={() => handleClick(0)}>
                <div class="card-header">
                    <a class={`card-link ${activeIndex === 0 ? '' : 'collapsed'}`}
                        data-toggle="collapse" href="#collapseOne" onClick={e => e && e.preventDefault()} aria-expanded={activeIndex === 0}>
                        <i class="pyt-badge-24"></i> Enterprise Software Development
                    </a>
                </div>
                <div id="collapseOne" className={
                    `${isCollapsing && activeIndex === 0 ? 'collapsing' : `${activeIndex === 0 ? 'collapse show' : 'collapse'}`
                    }`}
                    data-parent="#accordion" style={
                        isCollapsing ? { height } : {}
                    }>
                    <div className="card-body">
                        Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                    </div>
                </div>
            </div>


            <div class="card" onClick={() => handleClick(1)}>
                <div class="card-header">
                    <a class={`card-link ${activeIndex === 1 ? '' : 'collapsed'}`}
                        data-toggle="collapse" href="#collapseTwo" onClick={e => e && e.preventDefault()} aria-expanded={activeIndex === 1}>
                        <i class="pyt-badge-24"></i> Enterprise Software Development
                    </a>
                </div>
                <div id="collapseTwo" className={
                    `${isCollapsing && activeIndex === 1 ? 'collapsing' : `${activeIndex === 1 ? 'collapse show' : 'collapse'}`
                    }`}
                    data-parent="#accordion" style={
                        isCollapsing ? { height } : {}
                    }>
                    <div className="card-body">
                        Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                    </div>
                </div>
            </div>

            <div class="card" onClick={() => handleClick(2)}>
                <div class="card-header">
                    <a class={`card-link ${activeIndex === 2 ? '' : 'collapsed'}`}
                        data-toggle="collapse" href="#collapseThree" onClick={e => e && e.preventDefault()} aria-expanded={activeIndex === 2}>
                        <i class="pyt-badge-24"></i> Enterprise Software Development
                    </a>
                </div>
                <div id="collapseThree" className={
                    `${isCollapsing && activeIndex === 2 ? 'collapsing' : `${activeIndex === 2 ? 'collapse show' : 'collapse'}`
                    }`}
                    data-parent="#accordion" style={
                        isCollapsing ? { height } : {}
                    }>
                    <div className="card-body">
                        Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                    </div>
                </div>
            </div>




        </div>
    )
}

function Quality() {
    return (
        <div className="quality-courses">
            <div className="container">
                <h3 className="heading-txt">
                    Qulity courses instructed by the <br />Experienced
                    Professionals.
                </h3>
                <p className="heading-txt">
                    Browse through all the courses right from designing to
                    devlopment and marketing, content writing etc.
                </p>
                {isMobile() ?
                    <MobileAccordian />
                    :
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                            </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                        </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                    </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                    </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                    </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card-wrap">
                                <i className="pyt-badge-24"></i>
                                <p>
                                    <span>Enterprise Software Development</span>
                                    Create complex enterprise software, ensure reliable
                                    software integration, modernise your legacy system.
                    </p>
                                <a href="/">Explore More</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Quality;