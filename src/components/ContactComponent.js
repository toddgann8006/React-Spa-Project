import React from "react";

function Contact(props) {
    return (
        <div>
            <div className="bg-image contact-image img-fluid" style={{ height: '50vh' }}>
                <h1 className="text-light">ABOUT US</h1>
            </div>
            <div class="container">
                <div class="row my-5 py-5">
                    <div class="col-md text-center mb-5">
                        <h3 class="header-text mb-5">Healing Touch Day Spa</h3>
                        <p class="paragraph-text">Knoxville, TN</p>
                        <p class="paragraph-text">865-555-5555</p>
                        <p class="paragraph-text">Mon-Sat 9am-9pm</p>
                        <p class="paragraph-text">Sun 10am-7pm</p>
                        <p class="paragraph-text">healingtouch@ggmmail.com</p>
                    </div>
                    <div class="col-md">
                        <p class="paragraph-text mb-4 fs-5">
                            Please contact us by filling out the form or calling us at 865-555-5555, if you have any questions
                            or would like assistance with your reservation. We will respond to all emails and inquiries in the
                            order they were received. We look forward to hearing from you.
                        </p>
                        <form>
                            <div class="form-group row mb-md-4">
                                <label for="name" class="col-md-2 col-form-label">Name</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="phoneNum" class="col-md-2 col-form-label">Phone Number</label>
                                <div class="col-md-10">
                                    <input type="tel" class="form-control" id="phoneNum" name="telNum"
                                        placeholder="Phone Number" />
                                </div>
                            </div>
                            <div class="form-group row mb-md-4">
                                <label for="email" class="col-md-2 col-form-label">Email</label>
                                <div class="col-md-10">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label for="feedback" class="col-md-2 col-form-label">Your Message</label>
                                <div class="col-md-10">
                                    <textarea class="form-control" id="feedback" name="feedback" rows="8"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-md-2 col-md-10">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;