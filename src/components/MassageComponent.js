import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderMassageItem({ massages }) {
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg src={massages.image} alt={massages.type}
                top width="100%" />
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
    )
}

function Massage(props) {
    const massage = props.massage.map(massages => {
        return (
            <div key={massages.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
                <RenderMassageItem massages={massages} />
            </div>
        );
    });

    return (
        <React.Fragment>
            <MassageHeader />
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
        </React.Fragment>
    )
}

function MassageHeader(props) {
    return (
        <div className="bg-image massage-image img-fluid" style={{ height: '50vh' }}>
            <h1 className="text-light">Massages</h1>
        </div>
    )
}

export default Massage;