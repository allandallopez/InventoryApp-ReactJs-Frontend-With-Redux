import React, { Component } from 'react';
import axios from 'axios';
import { register } from '../../redux/actions/users';
import { connect } from 'react-redux';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: ''
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state);
		await this.props.dispatch(register(this.state));
		// this.props.history.push('/');

		confirmAlert({
			title: 'Register Success',
			message: 'Please Login',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						this.props.history.push('/');
					}
				},
				{
					label: 'No',
					onClick: () => {
						this.props.history.push('/');
					}
				}
			]
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Register</h1>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tbody>
							<tr>
								<td>Username</td>
								<td>
									<input type="text" name="username" onChange={this.handlerChange} />
								</td>
							</tr>
							<tr>
								<td>Password</td>
								<td>
									<input type="password" name="password" onChange={this.handlerChange} />
								</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>
									<input type="text" name="email" onChange={this.handlerChange} />
								</td>
							</tr>

							<td>
								<input type="submit" value="Register" className="btn btn-primary" />
							</td>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps)(Register);
