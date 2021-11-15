import React from "react";

function Waxing(props) {
    return (
        <React.Fragment>
            <WaxingHeader />
            <div className="container">
                <div className="row">
                    <div className="col pt-5 mt-5 d-flex justify-content-center">
                        <h3 class="header-text">Waxing</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 mt-3 d-flex justify-content-center">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col-4"></th>
                                    <th scope="col-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brows</th>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <th scope="row">Lip</th>
                                    <td>$15</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cheek</th>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <th scope="row">Chin</th>
                                    <td>$15</td>
                                </tr>
                                <tr>
                                    <th scope="row">Face</th>
                                    <td>$45</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bikini</th>
                                    <td>$40</td>
                                </tr>
                                <tr>
                                    <th scope="row">Brazilian</th>
                                    <td>$65</td>
                                </tr>
                                <tr>
                                    <th scope="row">Underarm</th>
                                    <td>$25</td>
                                </tr>
                                <tr>
                                    <th scope="row">Lower Leg</th>
                                    <td>$45</td>
                                </tr>
                                <tr>
                                    <th scope="row">Upper Leg</th>
                                    <td>$40</td>
                                </tr>
                                <tr>
                                    <th scope="row">Back</th>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <th scope="row">Arms</th>
                                    <td>$50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="#" class="make-appointment p-3 my-5">
                            BOOK ONLINE
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function WaxingHeader(props) {
    return (
        <div className="bg-image waxing-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">WAXING</h1>
        </div>
    )
}

export default Waxing;