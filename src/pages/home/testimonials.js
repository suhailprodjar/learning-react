import React from 'react';
import { connect } from "react-redux";
import SmartImage from '../../components/SmartImage';

function TestimoialCard({ testimonials = [] }) {
    return testimonials.map((testimonial, index) => {
        return (
            <div className="col-12 col-sm-6" key={index}>
                <div className="testimonial-card">
                    <div className="info">
                        <SmartImage
                            src={testimonial.src}
                            alt={'testimonial'}
                            placeHolder={"https://ca.slack-edge.com/T02B68RPW-U6XSHU79T-d9fe20ffac65-72"}
                        />
                        <p>
                            <span>{testimonial.name}</span>
                            {testimonial.subText}
                        </p>
                    </div>
                    <p className="txt">
                        {testimonial.content}
                    </p>
                </div>
            </div>
        )
    })
}
function Testimonials({ testimonials = [] }) {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="heading-txt">Testimonial</h3>
                        <p className="heading-txt">
                            A brand is more than a logo. It is a unified combination of
                            elements that make your business and brand successful.
                        </p>

                        <div className="row">
                            <TestimoialCard testimonials={testimonials} />
                            <div className="col-12 text-right">
                                <ul className="list-unstyled textimonial-arrow">
                                    <li><i className="pyt-arrow-left-16"></i></li>
                                    <li><i className="pyt-arrow-right-16"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ app = {} }) {
    const { testimonials = [{
        src: '',
        name: 'Suhail mohamed',
        subText: 'Lorem ipsum Lorem ipsum',
        content: 'Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.'
    }, {
        src: '',
        name: 'Suhail mohamed',
        subText: 'Lorem ipsum Lorem ipsum',
        content: 'Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.'
    }] } = app;
    return {
        testimonials
    };
}

export default connect(
    mapStateToProps,
    null
)(Testimonials);