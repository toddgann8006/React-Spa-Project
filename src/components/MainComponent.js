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
import { MASSAGE } from '../shared/massage';
import { FACIALS } from '../shared/facials';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            massage: MASSAGE
        }
    }
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
                        <Route exact path='/massage' render={() => <Massage massage={this.state.massage} />} />
                        <Route exact path='/facials' render={() => <Facials facials={this.state.facials} />} />
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

export default Main;