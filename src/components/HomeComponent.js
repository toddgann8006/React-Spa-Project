import React, { Component } from 'react';
import Appointment from './AppointmentComponent';
import Services from './ServicesComponent';
import Welcome from './WelcomeComponent';

class Home extends Component{
    render(){
    return (
        <div>
          <Welcome />
          <Services />
          <Appointment />
          </div>
    )};
}

export default Home;   