import React from 'react';
import Appointment from './AppointmentComponent';
import Services from './ServicesComponent';
import Welcome from './WelcomeComponent';

function Home(props) {
    return (
        <React.Fragment>
            <Welcome />
            <Services />
            <Appointment />
        </React.Fragment>
    )
};

export default Home;