import React, { Component } from 'react';
import Home from './HomeComponent';
import Massage from './MassageComponent';
import Facials from './FacialsComponent';
import Waxing from './WaxingComponent';
import Bodytreatments from './BodytreatmentsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

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
                        <Route exact path='/massage' render={() => <Massage />} />
                        <Route exact path='/facials' render={() => <Facials />} />
                        <Route exact path='/waxing' render={() => <Waxing />} />
                        <Route exact path='/bodytreatments' render={() => <Bodytreatments />} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Main;