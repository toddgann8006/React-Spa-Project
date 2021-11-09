import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Facials extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const facials = this.props.facials.map(facial => {
            return (
                <div key={facial.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
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
                </div>
            );
        });

        return (
            <div>
                <div className="bg-image facials-image img-fluid" style={{ height: '50vh' }}>
                    <h1 className="text-light">FACIALS</h1>
                </div>
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

            </div>
        )
    }
}

export default Facials;