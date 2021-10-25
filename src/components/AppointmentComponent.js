import React from "react";

function Appointment(props) {
    return (
        <div class="bg-image appointment-image mb-5" style={{ height: '80vh' }}>
            <div class="container">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <h2 class="text-dark h2-services">You Owe Yourself This Moment</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <a href="./" class="make-appointment p-3 mt-5">
                            MAKE AN APPOINTMENT
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment;