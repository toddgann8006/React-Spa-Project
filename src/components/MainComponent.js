import React, { Component } from 'react';
import Home from './HomeComponent';
import Massage from './MassageComponent';
import Facials from './FacialsComponent';
import Waxing from './WaxingComponent';
import Bodytreatments from './BodytreatmentsComponent';
import About from './AboutComponent';
import Giftcards from './GiftcardsComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        massage: state.massage,
        facials: state.facials
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/massage' render={() => <Massage massage={this.props.massage} />} />
                        <Route exact path='/facials' render={() => <Facials facials={this.props.facials} />} />
                        <Route exact path='/waxing' render={() => <Waxing />} />
                        <Route exact path='/bodytreatments' render={() => <Bodytreatments />} />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/contact' render={() => <Contact />} />
                        <Route exact path='/giftcards' render={() => <Giftcards />} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));