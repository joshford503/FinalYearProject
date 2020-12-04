import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Header() {
	return (
		<header>
			<div className="button">
				{/* basket button */}
				<li>
					<Link to="/Basket">
						<i class="fa fa-shopping-cart"></i>
					</Link>
				</li>
			</div>

			<div id="infoButton">
				{/* info page button */}
				<div className="button">
					<Link to="/info">
						<i class="gg-info"></i>
					</Link>
				</div>
			</div>

			{/* Logo for header */}
			<h1 id="heading">
				<Link to="/" style={{ textDecoration: 'none' }}>
					Books.com
				</Link>
			</h1>
		</header>
	);
}
export default Header;
