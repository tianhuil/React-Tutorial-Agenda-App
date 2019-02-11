import React, {Component} from 'react';
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader,
    MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol}
    from "mdbreact";

class Event extends Component {
    render() {
        return (<React.Fragment>
            <div className="media mt-1 mb-4">
                <h3 className="h3-responsive font-weight-bold mr-3">
                    {this.props.time}
                </h3>
                <div className="media-body mb-3 mb-lg-3">
                    <MDBBadge color="danger" className="ml-2 float-right">
                        -
                    </MDBBadge>
                    <h6 className="mt-0 font-weight-bold">
                        {this.props.title}
                    </h6>
                    <hr className="hr-bold my-2" ></hr>
                    {this.props.location &&
                        <p className="font-smaller mb-0">
                            <MDBIcon icon="location-arrow" className="mr-1"></MDBIcon>
                            {this.props.location}
                        </p>
                    }
                    {this.props.description && 
                        <div className="p-2 blue-grey lighten-5">
                            <p className="m-0">Desc: {this.props.description}</p>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>)
    }
}

export default Event;