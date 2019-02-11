import React, {Component} from 'react';
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

const emptyState = {
  time: "",
  title: "",
  location: "",
  description: ""
}

class Modal extends Component {
  clearState() {
    this.setState(emptyState)
  }

  constructor(props) {
    super(props)
    this.state = emptyState
    console.log("foo")
  }

  handleInputChange(inputName) {
    return value => {
      this.setState({
        [inputName]: value
      })
    }
  }

  handleSubmit() {
    this.props.addEvent(this.state)
    this.clearState()
    this.props.toggle()
  }

  render() {
    return (
      <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <MDBModalHeader
          className="text-center"
          titleClass="w-100 font-weight-bold"
          toggle={this.props.toggle}
        >
          Add new event
        </MDBModalHeader>
        <MDBModalBody>
          <form className="mx-3 blue-text">
            <MDBInput
              name="time"
              label="Time"
              icon="clock"
              hint="12:30"
              group
              type="text"
              getValue={this.handleInputChange("time")}
            />
            <MDBInput
              name="title"
              label="Title"
              icon="edit"
              hint="Briefing"
              group
              type="text"
              getValue={this.handleInputChange("title")}
            />
            <MDBInput
              name="location"
              label="Location (optional)"
              icon="map"
              hint="Video-conf room"
              group
              type="text"
              getValue={this.handleInputChange("location")}
            />
            <MDBInput
              name="description"
              label="Description (optional)"
              icon="sticky-note"
              group
              type="textarea"
              getValue={this.handleInputChange("description")}
            />
            <div className="d-flex justify-content-center">
              <MDBBtn
                color="info"
                rounded
                onClick={this.handleSubmit.bind(this)}
              >
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBModalBody>
        <MDBModalFooter></MDBModalFooter>
      </MDBModal>
    )
  }
}

export default Modal;
