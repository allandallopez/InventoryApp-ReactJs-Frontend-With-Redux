import React, { Component } from 'react';
import axios from 'axios';
import CardProduct from './CardProduct';

export class Product extends Component {
	state = {
		Product: []
	};

	componentDidMount = async () => {
		await axios.get('/products?&sort=DESC').then((response) =>
			this.setState({
				Product: response.data.data
			})
		);

		console.log(this.state);
	};

	render() {
		const renderData = this.state.Product.map((Product) => {
			return <CardProduct Product={Product} key={Product.id} refresh={this.componentDidMount} />;
		});

		return (
			<div className="container">
				<div className="row">{renderData}</div>
			</div>
		);
	}
}

export default Product;
