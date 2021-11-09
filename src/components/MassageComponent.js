import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Massage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const massage = this.props.massage.map(massages => {
            return (
                <div key={massages.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
                    <Card style={{ width: '18rem' }}>
                        <CardImg src={massages.image} alt={massages.type} />
                        <CardBody>
                            <CardTitle className="header-text"><h5 className="text-center">{massages.type}</h5></CardTitle>
                            <CardText><p className="paragraph-text">
                                {massages.description}
                            </p>
                                <p>
                                    {massages.price60}
                                </p>
                                <p>
                                    {massages.price90}
                                </p>
                                <p>
                                    {massages.price120}
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div>
                <div className="bg-image massage-image img-fluid" style={{ height: '50vh' }}>
                    <h1 className="text-light">Massages</h1>
                </div>
                <div className="container my-5 py-5">
                    <div className="row ps-5">
                        {massage}
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

export default Massage;