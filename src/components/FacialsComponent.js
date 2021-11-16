import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay, Collapse } from 'reactstrap';

class RenderFacialsItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Card
                onClick={this.toggle}
                style={{ width: '38rem' }}>
                <CardImg src={this.props.facial.image}
                    alt={this.props.facial.type}
                    top
                    width="100%" />
                <CardImgOverlay>
                    <CardTitle className="header-text"><h3 className="text-center">{this.props.facial.type}</h3></CardTitle>
                </CardImgOverlay>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>
                        <CardText><p className="paragraph-text">
                            {this.props.facial.description}
                        </p>
                            <p>
                                {this.props.facial.price}
                            </p>
                        </CardText>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

function Facials(props) {

    const facials = props.facials.map(facial => {
        return (
            <div key={facial.id} className="col-lg mb-3 d-flex justify-content-center align-items-stretch">
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