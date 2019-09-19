import React, { Component } from 'react';
// import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { login } from '../../redux/actions/users';
import { connect } from 'react-redux';

export class Login extends Component {
	state = {
		email: '',
		password: ''
		// token: localStorage.getItem('auth')
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = async (e) => {
		e.preventDefault();
		await this.props.dispatch(login(this.state));
		this.setState({
			token: this.props.users.usersProfile
		});

		// console.log(this.props.users.token);
		localStorage.setItem('auth', this.props.users.token.data.token);
		if (localStorage.getItem('auth') === 'undefined') {
			confirmAlert({
				title: 'Access Denied!',
				message: 'Login Again?',
				buttons: [
					{
						label: 'Yes',
						onClick: () => {}
					},
					{
						label: 'No',
						onClick: () => {
							this.props.history.push('/');
						}
					}
				]
			});
		} else {
			this.props.history.push('/Product');
		}
	};

	render() {
		return (
			<div className="container">
				<h1>Login</h1>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tbody>
							<tr>
								<td>Email</td>
								<td>
									<input type="text" name="email" onChange={this.handlerChange} />
								</td>
							</tr>
							<tr>
								<td>Password</td>
								<td>
									<input type="password" name="password" onChange={this.handlerChange} />
								</td>
							</tr>

							<td>
								<input type="submit" value="Login" className="btn btn-primary" />
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

export default connect(mapStateToProps)(Login);
