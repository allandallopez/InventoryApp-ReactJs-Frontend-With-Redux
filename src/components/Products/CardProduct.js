import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CardProduct = (props, refresh) => {
	var token = localStorage.getItem('auth');
	async function deleteProduct() {
		await axios.delete('/products/' + props.Product.id, {
			headers: {
				authorization: 'Dello ' + token
			}
		});
		window.location.replace('/Product');
	}

	async function addQuantity() {
		var token = localStorage.getItem('auth');
		window.event.preventDefault();
		await axios.patch('/products/quantity/add/1/' + props.Product.id, {
			headers: {
				authorization: 'Dello ' + token
			}
		});
		window.location.replace('/Product');
	}

	async function reduceQuantity() {
		var token = localStorage.getItem('auth');
		window.event.preventDefault();
		await axios.patch('/products/quantity/reduce/1/' + props.Product.id, {
			headers: {
				authorization: 'Dello ' + token
			}
		});
		window.location.replace('/Product');
	}

	function deleteConfirm() {
		confirmAlert({
			title: 'Product',
			message: 'Are you sure to delete ' + props.Product.name + ' ?',
			buttons: [
				{
					label: 'Yes, Im sure',
					onClick: () => deleteProduct()
				},
				{
					label: 'No, I dont',
					onClick: () => {}
				}
			]
		});
	}

	return (
		<div className="col-md-5 card" style={{ margin: 5 }}>
			<img
				style={{width: 280, height: 180}}
				src={props.Product.image}
				onError={() => {
					props.Product.image =
						'https://cdn5.vectorstock.com/i/1000x1000/48/14/car-icon-black-car-sign-transportation-icon-vector-22664814.jpg';
					props.refresh();
				}}
			/>
			<div className="text-center">
				<h3>{props.Product.name}</h3>
				<p>Quantity : {props.Product.quantity}</p>
				<p>Category: {props.Product.category}</p>
				<p>Date Added : {props.Product.date_added}</p>
				<hr />
			</div>
			<div className="text-center">
				<Link onClick={addQuantity} style={{ margin: 7 }}>
					<btn class="btn btn-success">+</btn>
				</Link>

				<Link to={'/edit/' + props.Product.id}>
					<Button variant="info" style={{ margin: 5 }}>
						Edit
					</Button>
				</Link>

				<Link onClick={reduceQuantity} style={{ margin: 7 }}>
					<btn class="btn btn-secondary">-</btn>
				</Link>
			</div>
			<br />
			<Link to={'/'} />
			<Button variant="danger" onClick={deleteConfirm}>
				Delete
			</Button>
		</div>
	);
};

export default CardProduct;
