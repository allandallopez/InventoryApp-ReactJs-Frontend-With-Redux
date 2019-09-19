import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addProduct } from '../../redux/actions/products';

export class AddProduct extends Component {
	state = {
		name: '',
		description: '',
		image: '',
		id_category: '',
		quantity: ''
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	};

	handlerSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.addProduct(this.state);
		this.props.history.push('/Product');
	};

	handlerSelect = (e) => {
		this.setState({ [e.target.name]: Number(e.target.options[e.target.selectedIndex].value) });
		console.log(this.state);
	};

	handlerSelected = (e) => {
		this.setState({ [e.target.name]: Number(e.target.value) });
		console.log(this.state);
	};

	render() {
		return (
			<div className="container">
				<h2>Add Product</h2>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td>
									<input
										type="text"
										value={this.state.name}
										name="name"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td>Description</td>
								<td>
									<input
										type="text"
										value={this.state.description}
										name="description"
										onChange={this.handlerChange}
									/>
								</td>
							</tr>
							<tr>
								<td>Image</td>
								<td>
									<input type="text" value={this.image} name="image" onChange={this.handlerChange} />
								</td>
							</tr>
							<tr>
								<td>Category</td>
								<td>
									<select
										id="list"
										value={this.state.id_category}
										name="id_category"
										onChange={this.handlerSelect}
									>
										<option>Select</option>
										<option value="1">Car</option>
										<option value="2">Motocycle</option>
										<option value="6">Outfit</option>
										<option value="7">food</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>Quantity</td>
								<td>
									<input
										type="number"
										value={this.state.quantity}
										name="quantity"
										min="0"
										onChange={this.handlerSelected}
									/>
								</td>
							</tr>
							<tr>
								<td />
								<td>
									<input type="submit" className="btn btn-primary" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};
export default connect(mapStateToProps, { addProduct })(AddProduct);
