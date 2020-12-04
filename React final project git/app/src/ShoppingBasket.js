import React, { Component } from 'react';
import './App.css';

function ShoppingBasket() {
	return (
		<div id="basket">
			<div className="row">
				<div className="column">
					<div id="title">
						<h1>Basket</h1>
					</div>
					<div id="items">
						<h2>Your Items</h2>
					</div>
				</div>

				<div className="column">
					<div id="checkout">
						<h2>Order summary</h2>

						<h2 style={{ float: 'left' }}>Your Items</h2>
					</div>
					<br />
				</div>
			</div>
		</div>
	);
}
export default ShoppingBasket;
