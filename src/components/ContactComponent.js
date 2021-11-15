import React from "react";
import Contactform from "./ContactformComponent";

function Contact(props) {
    return (
        <React.Fragment>
            <ContactHeader />
            <div class="container">
                <div class="row my-5 py-5">
                    <div class="col-md-5 text-center mb-5">
                        <h3 class="header-text mb-5">Healing Touch Day Spa</h3>
                        <p class="paragraph-text">Knoxville, TN</p>
                        <p class="paragraph-text">865-555-5555</p>
                        <p class="paragraph-text">Mon-Sat 9am-9pm</p>
                        <p class="paragraph-text">Sun 10am-7pm</p>
                        <p class="paragraph-text">healingtouch@ggmmail.com</p>
                    </div>
                    <div class="col-md-7">
                        <p class="paragraph-text mb-4 fs-5">
                            Please contact us by filling out the form or calling us at 865-555-5555, if you have any questions
                            or would like assistance with your reservation. We will respond to all emails and inquiries in the
                            order they were received. We look forward to hearing from you.
                        </p>
                        <Contactform />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function ContactHeader(props) {
    return (
        <div className="bg-image contact-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">ABOUT US</h1>
        </div>
    )
}

export default Contact;