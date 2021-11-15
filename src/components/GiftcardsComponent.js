import React from "react";

function Giftcards(props) {
    return (
        <React.Fragment>
            <GiftcardsHeader />
            <div class="container my-5 py-5">
                <div class="row">
                    <div class="col text-center">
                        <h2 class="header-text">Click on the link below for all your Gift Card needs.</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 mt-5">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/insung-yoon-baLUAKBNsG4-unsplash.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function GiftcardsHeader(props) {
    return (
        <div className="bg-image giftcards-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">WAXING</h1>
        </div>
    )
}

export default Giftcards;