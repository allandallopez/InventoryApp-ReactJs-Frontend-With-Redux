import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getProducts } from '../../redux/actions/products';
import CardProduct from './CardProduct';
import { Spinner, Container } from 'react-bootstrap';

export class ProductList extends Component {
	state = {
		products: [],
		sort: localStorage.getItem('sort') || 'asc',
		limit: localStorage.getItem('limit') || 9,
		sortBy: localStorage.getItem('sortBy') || 'id',
		page: localStorage.getItem('page') || 1,
		search: localStorage.getItem('search')
	};

	componentDidMount = async () => {
		const { sort, sortBy, limit, page, search } = this.state;
		await this.props.dispatch(getProducts(sort, sortBy, limit, page, search));
		console.log(this.props.products.productRed.data.data);
		// .then(response =>
		this.setState({
			products: this.props.products.productRed.data.data
		});
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = () => {
		localStorage.setItem('sortBy', this.state.sortBy);
		localStorage.setItem('sort', this.state.sort);
		localStorage.setItem('limit', this.state.limit);
		localStorage.setItem('page', this.state.page);
		localStorage.setItem('search', this.state.search);
	};

	render() {
		const renderData = this.state.products.map((product) => {
			return <CardProduct Product={product} search={product.id} refresh={() => this.forceUpdate()} />;
		});
		return this.props.products.isLoading ? (
			<Container>
				<h4>
					<Spinner animation="grow" variant="info" />
				</h4>
			</Container>
		) : (
			<div className="text-center">
				<h2> </h2>

				<form onSubmit={this.handlerSubmit}>
					<table>
						<tr>
							<td>
								<select
									class="mdb-select md-form"
									id="list"
									name="sortBy"
									value={this.state.sortBy}
									className="form-control"
									onChange={this.handlerChange}
								>
									<option value="" selected disabled>
										SORT BY
									</option>
									<option value="id">ID</option>
									<option value="name">NAME</option>
									<option value="category">CATEGORY</option>
									<option value="quantity">QUANTITY</option>
								</select>
							</td>
							<td>
								<select
									id="list"
									name="limit"
									value={this.state.limit}
									className="form-control"
									onChange={this.handlerChange}
								>
									<option value="" selected disabled>
										LIMIT
									</option>
									<option value="4">4</option>
									<option value="6">6</option>
								</select>
							</td>
							<td>
								<select
									id="list"
									name="page"
									value={this.state.page}
									className="form-control"
									onChange={this.handlerChange}
								>
									<option value="" selected disabled>
										PAGE
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</td>
							<td>
								<select
									id="list"
									name="sort"
									value={this.state.sort}
									className="form-control"
									onChange={this.handlerChange}
								>
									<option value="" selected disabled>
										SORT
									</option>
									<option value="asc">ASCENDING</option>
									<option value="desc">DESCENDING</option>
								</select>
							</td>

							<td>
								<input
									placeholder="Search here.."
									type="text"
									name="search"
									value={this.state.search}
									className="form-control"
									onChange={this.handlerChange}
								/>
							</td>

							<td />
							<td>
								<input type="submit" value="Enter" className="btn btn-info" />
							</td>
						</tr>
					</table>
				</form>
				<div className="text-center">
					<div className="row">{renderData}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};
export default connect(mapStateToProps)(ProductList);
