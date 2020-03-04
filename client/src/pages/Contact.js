import React, { Component } from "react";
import axios from "axios";
// import superagent from "superagent";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class Contact extends Component {
  constructor() {
    // super() is called to set the this.props to undefined.
    super();

    // Setting the component's initial state
    this.state = {
      modalIsOpen: false,
      ariaHideApp: false,

      name: null,
      email: null,
      message: null
    };
  }
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    if (
      this.refs.name.value === "" ||
      this.refs.email.value === "" ||
      this.refs.message.value === ""
    ) {
      alert(
        "Sorry.  Message not submitted.  Form requires Name, Email, & Message."
      );
    } else {
      this.setState({ modalIsOpen: true });
      let payload = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      console.log(payload);
      axios.post("/api/send", { payload })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      };

      // axios({
      //   method: "POST",
      //   url: "/api/send",
      //   data: {
      //     payload
      //   }
      // });
    }
  

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3>Contact Pat</h3>
            <div className="card">
              <br />
              <div id="card-header">
                <br />
                <h4>Questions or Comments?</h4>
              </div>
              <p>Send Pat a quick note. He will respond to you A.S.A.P.</p>
              <form id="form">
                Name:*
                <br />
                <input
                  type="text"
                  ref="name"
                  onChange={(this.handleName = this.handleName.bind(this))}
                />
                <br />
                Email:*
                <br />
                <input
                  columns="100"
                  type="email"
                  ref="email"
                  onChange={(this.handleEmail = this.handleEmail.bind(this))}
                />
                <br />
                Message:*
                <br />
                <textarea
                  rows="5"
                  columns="1000"
                  type="text"
                  ref="message"
                  onChange={
                    (this.handleMessage = this.handleMessage.bind(this))
                  }
                />
                <br />
                <button
                  className="btn2"
                  // method="POST"
                  onClick={(this.submit = this.submit.bind(this))}
                >
                  S U B M I T
                </button>
              </form>
              <br />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <br />

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Message Sent!</h2>
          {/* <form> */}
          Thank you!! Pat will be back to you shortly.
          <br />
          <br />
          <div className="text-center">
            <button className="btn2" onClick={this.closeModal.bind(this)}>
              C L O S E
            </button>
            <hr />
          </div>
          {/* </form> */}
        </Modal>
      </div>
    );
  }
}

export default Contact;
