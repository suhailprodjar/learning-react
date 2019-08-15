import React, { Component, Fragment } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

export default class CBR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      show: false
    };
    this.nameInstance = React.createRef();
    this.emailInstance = React.createRef();
    this.messageInstance = React.createRef();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.nameInstance.current.value = "";
    this.emailInstance.current.value = "";
    this.messageInstance.current.value = "";
    this.setState({
      name: "",
      email: "",
      message: "",
      show: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;

    return new Promise((resolve, rej) => {
      axios
        .post("https://prodjar.herokuapp.com/api/form", {
          name,
          email,
          message
        })
        .then(res => {
          this.handleShow();
        })
        .catch(err => {
          this.handleShow();
        });
    });
  };

  render() {
    return (
      <Fragment>
        <div name="CBR" className="right-col vertical-center">
          <div className="form-sec">
            <p>Ready to get started?</p>
            <form onSubmit={this.handleSubmit} id="prodjar_template">
              <div className="form-group">
                <input
                  ref={this.nameInstance}
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={this.handleChange}
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  ref={this.emailInstance}
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="form-group">
                <textarea
                  ref={this.messageInstance}
                  className="form-control"
                  id="feedback-entry"
                  name="message"
                  onChange={this.handleChange}
                  required
                  placeholder="What problem are you trying to solve?"
                  rows="5"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send now
              </button>
            </form>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose} className="success-msg-txt">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            Thank you for your mail. We will get back to you soon
            <span role="img" aria-label="smile">&#128516;</span>             
            </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}
