import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Event from './components/Event';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "Breakfast with Simon",
          location: "Lounge Caffe",
          description: "Discuss Q3 targets"
        },
        {
          id: 2,
          time: "10:30",
          title: "Daily Standup Meeting (recurring)",
          location: "Warsaw Spire Office"
        },
        { id: 3, time: "11:00", title: "Call with HRs" },
        {
          id: 4,
          time: "11:00",
          title: "Lunch with Timmoty",
          location: "Canteen",
          description:
            "Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
        }
      ]
    }
  }

  deleteEvent(eventId) {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({events});
  }

  addEvent(eventData) {
    const newEvents = [
      ...this.state.events,
      {
        ...eventData,
        id: Math.max(...this.state.events.map(e => e.id)) + 1
      }
    ]

    this.setState({events: newEvents})
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="9">
            {
              this.state.events.map(event => 
                <Event
                  key={event.id}
                  id={event.id}
                  time={event.time}
                  title={event.title}
                  location={event.location}
                  description={event.description}
                  onDelete={this.deleteEvent.bind(this)}
                />
              )
            }
          </MDBCol>
          <MDBCol style={this.style} lg="3">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="d-flex justify-content-center">
        <MDBBtn
          color="info"
          rounded onClick={this.toggleModal.bind(this)}
          className=""
        >
          Add Event
        </MDBBtn>
      </div>

      <Modal
        isOpen={this.state.isModalOpen}
        toggle={this.toggleModal.bind(this)}
        addEvent={this.addEvent.bind(this)}
      ></Modal>
    </React.Fragment>;
  }
}

export default App;