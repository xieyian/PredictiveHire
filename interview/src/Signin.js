import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import creatHistory from 'history/createHashHistory';
// 如果使用createBrowserHistory
// import creatHistory from 'history/createBrowserHistory';
import './Signin.scss';

export default function Signin() {
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');

	function validateForm() {
		return name.length > 0 && password.length > 0;
	}
	function checkPassword() {
		if (password === 'YianWasHired') {
			console.log('successful');
		} else {
			setPassword('');
			alert('Wrong Password!!!');
		}
	}
	function cancel() {
		const history = creatHistory();
		history.goBack();
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="signin-layout" size="lg" controlId="name">
					<Form.Label className="input-title">Name</Form.Label>
					<Form.Control
						className="input-block"
						autoFocus
						type="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="signin-layout" size="lg" controlId="password">
					<Form.Label className="input-title">Password</Form.Label>
					<Form.Control
						className="input-block"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<div className="signin-buttons">
					<Button block size="lg" disabled={!validateForm()} onClick={checkPassword}>
						Submit
					</Button>
					<Button block size="lg" onClick={cancel}>
						Cancel
					</Button>
				</div>
			</Form>
		</div>
	);
}
