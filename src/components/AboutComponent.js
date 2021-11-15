import React from 'react';

function About(props) {
    return (
        <React.Fragment>
            <AboutHeader />
            <div class="container-fluid">
                <div class="row my-5 align-items-center">
                    <div class="col-md col-md-content">
                        <img class="img-fluid mb-auto" src="assets/images/sunny-ng-KVIlNRoGwxk-unsplash.jpg" />
                    </div>
                    <div class="col">
                        <h3 class="header-text mt-4">About Healing Touch Day Spa</h3>
                        <p class="mt-4 paragraph-text">
                            Healing Touch Day Spa has set itself apart by using the latest products and techniques to provide a
                            “resort type”
                            spa experience. Give us an hour, two hours, or all day, and you will be
                            transported on a mini vacation. Your time with us will be spent in a purely relaxed state leaving
                            you feeling as if you have left Knoxville far behind and are enjoying a visit to a luxurious
                            vacation resort. We use only the highest quality products for our skin care and body treatments.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2 class="text-center header-text mb-5">Spa Etiquette</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h3 class="header-text mb-3">Spa Reservations</h3>
                        <p class="paragraph-text">
                            To ensure your preferred appointment time, it is recommended you schedule your spa experience with
                            as much advance notice as possible or at the conclusion of your last experience. Our professional
                            staff allocates time especially for each guest, therefore, a credit card is requested to guarantee
                            these reservations. All spa experiences are subject to availability. Menu service and prices are
                            subject to change without notice. We reserve the right to refuse service to anyone.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-5">
                        <h3 class="header-text mb-3">Spa Arrival</h3>
                        <p class="paragraph-text">
                            To begin your spa journey in a relaxed state, we ask that you arrive 15 minutes prior to your
                            scheduled appointment time. For a new guest, please allow 30 minutes to accommodate completion of
                            your guest profile. Spa robes, slippers, private lockers and beverages are provided for your
                            comfort. Delayed arrival will limit the time for your experience, reducing the effectiveness of your
                            treatment and the expectations of your visit. In consideration of other spa guests, service time
                            will not be extended for delayed arrivals, and the full price of your service will be charged.
                            Please notify our staff if there are any special physical or medical needs or conditions they need
                            to consider prior to your services (i.e. pregnancy, food or product sensitivities or aggressive
                            medications).
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col my-5">
                        <h3 class="header-text mb-3">Spa Cancellations or Rescheduling</h3>
                        <p class="paragraph-text">
                            As a courtesy, you will receive a confirmation of your reservation prior to your arrival. Should the
                            need arise to cancel or reschedule reservations, a 24-hour advance notice is required. A 48-hour
                            advance notice is required for any spa packages and multiple treatments lasting more than 2 hours.
                            Insufficient notice to cancel or reschedule reservations are subject to charges up to full service
                            value. All no show reservations will be assessed a charge at full value of services. Spa Parties are
                            subject to terms of agreement for cancellations.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function AboutHeader(props) {
    return (
        <div className="bg-image about-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">ABOUT US</h1>
        </div>
    )
}

export default About;