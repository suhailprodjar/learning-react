import React, { Component } from 'react';
import { connect } from "react-redux";
import SmartImage from '../../components/SmartImage';
import { setInterval } from 'timers';
import isMobile from '../../helper/utils/isMobile';

class TestimoialCard extends Component {
    state = {
        start: 0,
        end: 1
    }
    componentDidMount() {
        const { testimonials = [] } = this.props;
        const length = testimonials.length - 1;
        this.timer = setInterval(() => {
            const { start, end } = this.state;
            if (end >= length) {
                this.setState({
                    start: 0,
                    end: 1
                })
            } else {
                this.setState({
                    start: start + 1,
                    end: end + 1
                })
            }
        }, 10000)
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { start, end } = this.state;
        const { testimonials = [] } = this.props;
        const isMob = isMobile();
        return testimonials.map((testimonial, index) => {
            return (
                <div className={`col-12 col-sm-6`} style={isMob ? { 
                    'display': start !== index ? 'none' : 'block' 
                } : { 
                    'display': start === index || end === index ? 'block' : 'none' 
                }} key={index}>
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
        name: 'Akbar mohamed',
        subText: 'Lorem ipsum Lorem ipsum',
        content: 'Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.'
    }, {
        src: '',
        name: 'Sasi mohamed',
        subText: 'Lorem ipsum Lorem ipsum',
        content: 'Social proof is a psychological phenomenon where people conform to the actions of others under the assumption that those actions are reflective of the correct behavior.'
    }, {
        src: '',
        name: 'Karthi mohamed',
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