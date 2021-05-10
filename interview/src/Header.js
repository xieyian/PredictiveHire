import React, { Component } from 'react';
import App from './App';
import Signin from './Signin';
import './Header.scss';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Router>
				<div className="home-button-layout">
					<div>
						<Link className="btn btn--stripe btn--large" to="/">
							HOME
						</Link>
					</div>

					<div>
						<Link className="btn btn--stripe btn--large" to="/about">
							SIGN IN
						</Link>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={Signin} />
				</Switch>
			</Router>
		);
	}
}

export default Header;
