import axios from 'axios';

const token = window.localStorage.getItem('auth');

export const getProducts = (sort, sortBy, limit, page, search) => {
	return {
		type: 'GET_PRODUCTS',
		payload: axios.get(`/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}&search=${search}`)
	};
};

export const getProductById = (productid) => {
	return {
		type: 'GET_PRODUCT_BY_ID',
		payload: axios.get(`/products/${productid}`)
	};
};

export const addProduct = (data) => {
	return {
		type: 'ADD_PRODUCTS',
		payload: axios.post('/products', data, { headers: { authorization: 'Dello ' + token } })
	};
};

export const deleteProduct = (productid) => {
	return {
		type: 'DELETE_PRODUCTS',
		payload: axios.delete(`/products/${productid}`, {
			headers: {
				auth: token
			}
		})
	};
};

export const editProduct = (productid, data) => {
	return {
		type: 'EDIT_PRODUCTS',
		payload: axios.put(
			`/products/${productid}`,
			data,
			// {
			// 	userid: data.userid,
			// 	name: data.name
			// },
			{ headers: { authorization: 'Dello ' + token } }
		)
	};
};
