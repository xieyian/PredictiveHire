import React, { Component } from 'react';
import Home from './Home';
import Signin from './Signin';
import About from './About';
import './App.scss';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
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
							ABOUT
						</Link>
					</div>

					<div>
						<Link className="btn btn--stripe btn--large" to="/signin">
							SIGN IN
						</Link>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route path="/signin" component={Signin} />
				</Switch>
			</Router>
		);
	}
}

export default App;
