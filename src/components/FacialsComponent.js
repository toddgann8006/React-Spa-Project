import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Facials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facials: [
                {
                    id: 0,
                    type: "EXPRESS FACIAL",
                    image: "assets/images/spa-4481538_640.jpg",
                    description: "For those on the go! A quick pick-me-up that combines cleansing and exfoliation to leave your skin visibly nourished and luminous.",
                    price: "30 minutes $55"
                },
                {
                    id: 1,
                    type: "SIGNATURE FACIAL",
                    image: "assets/images/pexels-breakingpic-3192.jpg",
                    description: "Our Signature Treatment is a long-lasting, deep-hydrating facial for all skin types. The facial includes cleansing, steaming and exfoliation followed by a special nourishing mask that leaves your skin visibly refreshed, hydrated and radiant.",
                    price: "45-60 minutes $80"
                },
                {
                    id: 2,
                    type: "SPORT'S FACIAL (MEN ONLY)",
                    image: "assets/images/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg",
                    description: "An invigorating and deep exfoliating men's facial. Designed to hydrate and energize the skin while preventing ingrown hairs and soothing razor burn.",
                    price: "60 minutes $90"
                },
                {
                    id: 3,
                    type: "RENEWEL FACIAL",
                    image: "assets/images/facials.jpg",
                    description: " An intense 40% vitamin C facial that rapidly exfoliates and hydrates sun-damaged skin. Helps to eliminate fine lines and even out skin tone, leaving your skin soft with a healthy glow.",
                    price: "45 minutes $90"
                },
                {
                    id: 4,
                    type: "MICRODERMABRASION",
                    image: "assets/images/albert-stephens-mGxFzwd6-YI-unsplash.jpg",
                    description: "Considered a mechanical exfoliation, microdermabrasion is a procedure that removes damaged cells resulting from age, sun exposure, and other hereditary and environmental factors. Benefits resulting from microdermabrasion include rejuvenation of sun-damaged skin, reduction of fine lines, minimization of mild acneic scars, and lightening of age spots.",
                    price: "60 minutes $120"
                },
                {
                    id: 5,
                    type: "CUSTOM FACIAL",
                    image: "assets/images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg",
                    description: "This facial is designed to leave your skin glowing. With our exclusive fruit enzyme, it rapidly exfoliates and lightens the hyperpigmentation. Our array of serums and hydrators will nourish skin and stimulate collagen. Sure to leave with healthier, and hydrated glowing skin.",
                    price: "90 minutes $125"
                },
                {
                    id: 6,
                    type: "ANTI-AGING FACIAL",
                    image: "assets/images/spa-4481538_640.jpg",
                    description: "An extraordinary facial that is formulated to create beautifully radiant and younger looking skin by tightening the skin and creating firmness in the neck. Collagen Crystal Masks contain collagen, amino-acids and natural plant essences to help firm, tone, moisturize and hydrate, especially in the sensitive under eye area. Also helps to reduce puffiness and dark circles.",
                    price: "75 minutes $130"
                }
            ]
        }
    }
    render() {
        const facials = this.state.facials.map(facial => {
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