import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    name: 'MASSAGE',
                    image: 'assets/images/home-blond-lady-massag.jpg'
                },
                {
                    id: 1,
                    name: 'FACIALS',
                    image: 'assets/images/facials.jpg'
                },
                {
                    id: 2,
                    name: 'WAXING',
                    image: 'assets/images/waxing.jpg'
                },
                {
                    id: 3,
                    name: 'TREATMENTS',
                    image: 'assets/images/bodytreatment.jpg'
                }
            ]
        }
    }
    render() {
        const products = this.state.products.map(service => {
            return (
                <div key={service.id} className="col-lg-6 mb-3 d-flex justify-content-center align-items-stretch">
                    <Card style={{width: '18rem'}}>
                        <CardImg src={service.image} alt={service.name} />
                        <CardBody>
                            <CardTitle><h5 className="text-center">{service.name}</h5></CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div>
                <div className="bg-image services-image img-fluid" style={{ height: '80vh' }}>
                    <h1 className="text-light">We're Glad You're Here</h1>
                </div>
                <div className="bg-1">
                    <div className="container my-5 py-5">
                        <div className="row ps-5">
                            {products}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services