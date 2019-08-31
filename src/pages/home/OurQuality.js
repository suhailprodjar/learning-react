import React from 'react';
import isMobile from '../../helper/utils/isMobile';

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
                    <div class="quality-accordian" id="accordion">
                        <div class="card">
                            <div class="card-header">
                                <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="false">
                                    <i class="pyt-badge-24"></i> Enterprise Software Development
                    </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-parent="#accordion" style={{}}>
                                <div className="card-body">
                                    Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                    </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false">
                                    <i className="pyt-badge-24"></i> Mobile App Development
                    </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion" style={{}}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                    <i className="pyt-badge-24"></i> UX / UI Design
                    </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                    <i className="pyt-badge-24"></i> Mobile App Development
                    </a>
                            </div>
                            <div id="collapseFour" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                    <i className="pyt-badge-24"></i> UX / UI Design
                    </a>
                            </div>
                            <div id="collapseFive" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                                    <i className="pyt-badge-24"></i> Mobile App Development
                    </a>
                            </div>
                            <div id="collapseSix" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            </div>
                        </div>
                    </div>
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