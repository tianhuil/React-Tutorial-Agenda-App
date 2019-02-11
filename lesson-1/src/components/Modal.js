import React, {Component} from 'react';
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class Modal extends Component {
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
        <MDBModalBody>Body</MDBModalBody>
        <MDBModalFooter></MDBModalFooter>
      </MDBModal>
    )
  }
}

export default Modal;
