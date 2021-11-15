import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderFacialsItem({ facial }) {
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg src={facial.image} alt={facial.type} />
            <CardBody>
                <CardTitle className="header-text"><h5 className="text-center">{facial.type}</h5></CardTitle>
                <CardText><p className="paragraph-text">
                    {facial.description}
                </p>
                    <p>
                        {facial.price}
                    </p>
                </CardText>
            </CardBody>
        </Card>
    )
}

function Facials(props) {

    const facials = props.facials.map(facial => {
        return (
            <div key={facial.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
                <RenderFacialsItem facial={facial} />
            </div>
        );
    });

    return (
        <React.Fragment>
            <FacialsHeader />
            <div className="container my-5 py-5">
                <div className="row ps-5">
                    {facials}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="#" className="make-appointment p-3 my-5">
                            BOOK ONLINE
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function FacialsHeader(props) {
    return (
        <div className="bg-image facials-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">FACIALS</h1>
        </div>
    )
}

export default Facials;