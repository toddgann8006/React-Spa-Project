import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Massage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            massage: [
                {
                    id: 0,
                    type: 'SWEDISH MASSAGE',
                    image: 'assets/images/wellness-285587_640.jpg',
                    description: 'Purely for relaxation, this gentle massage works primarily on the more superficial layers of the muscles.',
                    price60: '60 minutes $80',
                    price90: '90 minutes $115',
                    price120: '120 minutes $150'
                },
                {
                    id: 1,
                    type: 'DEEP TISSUE MASSAGE',
                    image: 'assets/images/massage-3795691_640.jpg',
                    description: 'This massage focuses on the deeper layers of the muscles without going past the point of resistance by using stronger pressure.',
                    price60: '60 minutes $90',
                    price90: '90 minutes $125',
                    price120: '120 minutes $170'
                },
                {
                    id: 2,
                    type: 'SPORTS MASSAGE',
                    image: 'assets/images/physio-1778029_640.jpg',
                    description: 'Your therapist will target your hurting muscles by combining deep tissue massage with manual stretching, and application of a cooling, inflammation reducing cream.',
                    price60: '60 minutes $100',
                    price90: '90 minutes $145',
                    price120: '120 minutes $200'
                },
                {
                    id: 3,
                    type: 'PRENATAL MASSAGE',
                    image: 'assets/images/anna-hecker-wqcQ6ODwPxU-unsplash.jpg',
                    description: 'This massage relieves tired muscles, sluggish circulation and swelling to ensure that moms-to-be leave feeling refreshed and fabulous.',
                    price60: '60 minutes $80.',
                    price90: '90 minutes $115',
                },
                {
                    id: 4,
                    type: 'STONE MASSAGE',
                    image: 'assets/images/spa-3184610_640.jpg',
                    description: 'The strategic placement of hot stones on the body warms the muscles, allowing your therapist to go deeper while you are still enjoying a feeling of complete relaxation.',
                    price90: '90 minutes $145',
                    price120: '120 minutes $190'
                }
            ]
        }
    }
    render() {
        const massage = this.state.massage.map(massages => {
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