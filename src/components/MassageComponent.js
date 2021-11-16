import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay, Collapse } from 'reactstrap';

class RenderMassageItem extends Component {
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
                <CardImg src={this.props.massages.image} alt={this.props.massages.type}
                    top width="100%" />

                <CardImgOverlay>
                    <CardTitle className="header-text"><h3 className="text-center">{this.props.massages.type}</h3></CardTitle>
                </CardImgOverlay>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>
                        <CardText><p className="paragraph-text">
                            {this.props.massages.description}
                        </p>
                            <p>
                                {this.props.massages.price60}
                            </p>
                            <p>
                                {this.props.massages.price90}
                            </p>
                            <p>
                                {this.props.massages.price120}
                            </p>
                        </CardText>
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

function Massage(props) {
    const massage = props.massage.map(massages => {
        return (
            <div key={massages.id} className="col-12 mb-3 d-flex justify-content-center align-items-stretch">
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