const initState = {
	productRed: [],
	errMessage: '',
	message: '',
	isLoading: false,
	isRejected: false,
	isFulfilled: false
};

const products = (state = initState, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS_PENDING':
			return {
				...state,
				isLoading: true,
				isRejected: false,
				isFulfilled: false
			};
		case 'GET_PRODUCTS_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true,
				errMessage: action.payload.response.data.message
			};
		case 'GET_PRODUCTS_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				productRed: action.payload
			};

		// case 'GET_PRODUCTS_AUTH_PENDING':
		// 	return {
		// 		...state,
		// 		isLoading: true,
		// 		isRejected: false,
		// 		isFulfilled: false
		// 	};
		// case 'GET_PRODUCTS_AUTH_REJECTED':
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isRejected: true,
		// 		errMessage: action.payload.response.data.message
		// 	};
		// case 'GET_PRODUCTS_AUTH_FULFILLED':
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isFulfilled: true,
		// 		productList: action.payload
		// 	};

		case 'GET_PRODUCT_BY_ID_PENDING':
			return {
				...state,
				isLoading: true,
				isRejected: false,
				isFulfilled: false
			};
		case 'GET_PRODUCT_BY_ID_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true,
				errMessage: action.payload.response.data.message
			};
		case 'GET_PRODUCT_BY_ID_FULFILLED':
			// state.productRed.push(action.payload.data.data[0]);
			return {
				...state,
				isLoading: false,
				isFulfilled: true
			};
		case 'ADD_PRODUCTS_PENDING':
			return {
				...state,
				isLoading: true,
				isRejected: false,
				isFulfilled: false
			};
		case 'ADD_PRODUCTS_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true,
				errMessage: action.payload.response.data.message
			};
		case 'ADD_PRODUCTS_FULFILLED':
			// state.productRed.unshift(action.payload.data.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true
			};
		case 'EDIT_PRODUCTS_PENDING':
			return {
				...state,
				isLoading: true,
				isRejected: false,
				isFulfilled: false
			};
		case 'EDIT_PRODUCTS_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true,
				errMessage: action.payload.response.data.message
			};
		case 'EDIT_PRODUCTS_FULFILLED':
			// const newProductData = action.payload.data.data[0];
			return {
				...state,
				isLoading: false,
				isFulfilled: true
				// productRed: state.productRed.map((products) => {
				// 	return products.productid === newProductData.productid ? newProductData : products;
				// })
			};
		case 'DELETE_PRODUCTS_PENDING':
			return {
				...state,
				isLoading: true,
				isRejected: false,
				isFulfilled: false
			};
		case 'DELETE_PRODUCTS_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true,
				errMessage: action.payload.response.data.message
			};
		case 'DELETE_PRODUCTS_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				productRed: state.productRed.filter((products) => {
					return products.productid !== action.payload.data.data.productid;
				})
			};
		default:
			return state;
	}
};

export default products;
