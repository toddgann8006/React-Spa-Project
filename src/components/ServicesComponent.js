import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    name: 'MASSAGE',
                    image: 'assets/images/home-blond-lady-massag.jpg',
                    to: '/massage'
                },
                {
                    id: 1,
                    name: 'FACIALS',
                    image: 'assets/images/facials.jpg',
                    to: '/facials'
                },
                {
                    id: 2,
                    name: 'WAXING',
                    image: 'assets/images/waxing.jpg',
                    to: '/waxing'
                },
                {
                    id: 3,
                    name: 'TREATMENTS',
                    image: 'assets/images/bodytreatment.jpg',
                    to: '/bodytreatments'
                }
            ]
        }
    }
    render() {
        const products = this.state.products.map(service => {
            return (
                <div key={service.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
                    <Link to={service.to}>
                        <Card style={{ width: '18rem' }}>
                            <CardImg src={service.image} alt={service.name} />
                            <CardBody>
                                <CardTitle><h5 className="text-center">{service.name}</h5></CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            );
        });
        return (
            <React.Fragment>
                <ServicesHeader />
                <div className="bg-1">
                    <div className="container my-5 py-5">
                        <div className="row ps-5">
                            {products}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function ServicesHeader(props) {
    return (
        <div className="bg-image services-image img-fluid" style={{ height: '80vh' }}>
            <h1 className="text-light">SPA SERVICES</h1>
        </div>
    )
}
export default Services