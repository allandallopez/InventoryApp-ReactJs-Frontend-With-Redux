import React, { Component } from 'react';
import axios from 'axios';
// import axios from "axios";

class Logout extends Component {
	state = {
		email: '',
		password: '',
		token: ''
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = async () => {
		window.event.preventDefault();
		await axios.post('/login', this.state).then((response) =>
			this.setState({
				token: response.data.token
			})
		);
		console.log(this.state.token);

		localStorage.removeItem('auth', this.state.token);
		// console.log(token);
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="container" style={{ marginLeft: 450 }}>
				<h2>Logout</h2>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tbody>
							<tr>
								<td />
								<br />
								<br />
								<td>
									<input type="submit" value="Logout" className="btn btn-primary" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default Logout;
