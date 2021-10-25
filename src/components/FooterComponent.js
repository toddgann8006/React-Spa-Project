import React from 'react';

function Footer(props) {
    return (
        <footer class="site-footer">
            <div class="container pt-5">
                <div class="row row-content g-0 pt-3">
                    <div class="col-md">
                        <p>
                            <b>Contact Us</b>
                        </p>
                        <p>

                            Healing Touch Day Spa <br />
                            Knoxville, TN <br />
                            865-555-5555<br />
                            healingtouch@ggmmail.com


                        </p>
                    </div>
                    <div class="col-md">
                        <p>
                            <b>Hours of Operation</b>
                        </p>
                        <p>
                            Mon-Sat 9am-9pm <br />
                            Sun 10am-7pm
                        </p>
                    </div>
                    <div class="col-md">
                        <p>
                            <b>Socials</b>
                        </p>
                        <p>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <br />
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        </p>
                    </div>
                    <div class="col-md">
                        <p>
                            <b>Cancellation Policy</b>
                        </p>
                        <p>
                            CANCELLATIONS: 4 hrs notice required to avoid full charge or loss of prepaid session. Scheduling
                            indicates awareness and acceptance of this policy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;