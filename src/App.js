import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';

import Product from './components/Products/Product';
import AddProduct from './components/Products/AddProduct';
import EditProduct from './components/Products/EditProduct';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import Register from './components/User/Register';

function App() {
	return (
		<React.Fragment>
			<Router>
				<NavigationBar />
				<Header />
				<Layout>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/Logout" component={Logout} />
						<Route path="/Register" component={Register} />
						<Route path="/Product" component={Product} />
						<Route exact path="/AddProduct" component={AddProduct} />
						<Route path="/edit/:id" component={EditProduct} />
						<Route component={NoMatch} />
					</Switch>
				</Layout>
			</Router>
		</React.Fragment>
	);
}

export default App;
