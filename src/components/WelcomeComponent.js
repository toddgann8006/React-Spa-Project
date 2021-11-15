import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (

            <React.Fragment>
                <WelcomeHeader />
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6 my-5 py-5">
                            <h2 className="text-center header-text mt-5 pt-5">Our Goal</h2>
                            <p className="text-center paragraph-text pt-3 pb-5 mb-5">
                                Our Mission is to take care of the customer – plain and simple. We believe a complete
                                service
                                offering,
                                delivered by friendly, professional, and knowledgeable providers is the best way to
                                accomplish
                                this. Our relaxing environment allows our clients to decompress from the daily demands of
                                life –
                                and feel right at home while they receive their service. We are confident that our people,
                                complete offering, and warm-friendly environment will deliver an experience that will keep
                                you
                                coming back.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function WelcomeHeader(props) {
    return (
        <div className="bg-image first-image img-fluid" style={{ height: '80vh' }}>
            <h1 className="text-light">We're Glad You're Here</h1>
        </div>
    )
}

export default Welcome;