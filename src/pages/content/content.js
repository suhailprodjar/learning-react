import React, { useState } from 'react';

const Content = () => {
    const [isClosed, isClosedState] = useState(false);

    const modalCloseAction = () => {
        isClosedState(true)
    }

    return (
        <div className="home">
            <div className="how-to-works">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>How to works?</h3>
                            <p>LearnGrow is India’s largest online platform with a network of most trusted <br />local Tutors across India. Post and connect with the tutors in your locality.</p>

                            <div className="row">
                                <div className="col-4">
                                    <div className="card-wrap active">
                                        <p>
                                            <span>Post your learning requirement</span>
                                            Want to learn something? Just enter details such as subject or category, locality and preference.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Get customised responses</span>
                                            Based on your requirement you will start getting customised responses from tutors and institutes.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Compare &amp; select the best</span>
                                            Once you get responses, you can compare them and choose the ones that fit your learning requirement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="quality-courses">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Qulity courses instructed by the <br />Experienced Professionals.</h3>
                            <p>Browse through all the courses right from designing to devlopment and marketing, <br />content writing etc.</p>

                            <div className="row">
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-wrap">
                                        <p>
                                            <span>Enterprise Software Development</span>
                                            Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                                        </p>
                                        <a href="#">Explore More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="about-us">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="content">
                                            <h3>Learnonline is a platform where you have access to multiple courses.</h3>
                                            <p>It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rgtside-img">
                                            <img src="https://i.imgur.com/aFIqJRz.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-us">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="rgtside-img">
                                            <img src="https://i.imgur.com/aFIqJRz.png" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="content">
                                            <h3>To provide the best quality teaching with Hands-on project Experience.</h3>
                                            <p>If you are going to use of a loreum ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the lorem ipsum generators on the internet tend to repeat predefined generator on the internet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Testimonial</h3>
                            <p>A brand is more than a logo. It is a unified combination of elements that make your business and brand successful.</p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="testimonial-card">
                                        <div className="info">
                                            <img src="https://ca.slack-edge.com/T02B68RPW-U6XSHU79T-d9fe20ffac65-72" alt=""/>

                                            <p>
                                                <span>Suhail mohamed</span>
                                                Lorem ipsum Lorem ipsum 
                                            </p>
                                        </div>
                                        <p className="txt">Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="testimonial-card">
                                        <div className="info">
                                            <img src="https://ca.slack-edge.com/T02B68RPW-U6XSHU79T-d9fe20ffac65-72" alt=""/>

                                            <p>
                                                <span>Suhail mohamed</span>
                                                Lorem ipsum Lorem ipsum 
                                            </p>
                                        </div>
                                        <p className="txt">Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="alert-info d-none">
                <p>
                    <span>Info</span>
                    Anyone with access can view your invited visitors.
                </p>
            </div>

            <div className={`pdg-modal three ${isClosed ? '' : 'in'}`}>
                <div className="content-wrapper">
                    <span 
                        className="pdg-close"
                        onClick={modalCloseAction}
                    >Close</span>

                    <h2>What type of <b>PHP Training</b> do you want to take?</h2>
                    <div className="pdgcard-outer">
                        <div className="pdg-card vertical-center">
                            <p>
                                <span>PHP CMS</span>
                                The definition of a CMS is an application that provides capabilities for multiple users with different permission levels to manage content, data or information of a website project, or internet / intranet application.
                            </p>
                        </div>
                        <div className="pdg-card vertical-center">
                            <p>
                                <span>PHP CMS</span>
                                The definition of a CMS is an application that provides capabilities for multiple users with different permission levels to manage content, data or information of a website project, or internet / intranet application.
                            </p>
                        </div>
                        <div className="pdg-card vertical-center">
                            <p>
                                <span>PHP CMS</span>
                                The definition of a CMS is an application that provides capabilities for multiple users with different permission levels to manage content, data or information of a website project, or internet / intranet application.
                            </p>
                        </div>
                        <div className="pdg-card vertical-center">
                            <p>
                                <span>PHP CMS</span>
                                The definition of a CMS is an application that provides capabilities for multiple users with different permission levels to manage content, data or information of a website project, or internet / intranet application.
                            </p>
                        </div>
                        <div className="pdg-card vertical-center">
                            <p>
                                <span>PHP CMS</span>
                                The definition of a CMS is an application that provides capabilities for multiple users with different permission levels to manage content, data or information of a website project, or internet / intranet application.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper d-none">
                    <span 
                        className="pdg-close"
                        onClick={modalCloseAction}
                    >Close</span>

                    <h2>Which location would you prefer for <b>PHP Training</b> classes?</h2>
                    <div className="pdgcard-outer">
                        <div className="pdg-card">
                            <img src="https://i.imgur.com/TmmbaIJ.png" />
                            <p>
                                <span>My Home</span>
                            </p>
                        </div>
                        <div className="pdg-card">
                            <img src="https://i.imgur.com/jc3LHBD.png" />
                            <p>
                                <span>I am willing to travel</span>
                            </p>
                        </div>
                        <div className="pdg-card">
                            <img src="https://i.imgur.com/BF756bC.png" />
                            <p>
                                <span>Institute or Coaching Center</span>
                            </p>
                        </div>
                        <div className="pdg-card">
                        <img src="https://i.imgur.com/y3c7Mk2.png" />
                            <p>
                                <span>Want to learn Online via Internet?</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;