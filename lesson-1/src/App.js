import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Event from './components/Event';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
                        />
                      )
                    }
                  </MDBCol>
                  <MDBCol style={this.style} lg="3">
                    
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </React.Fragment>;
  }
}

export default App;