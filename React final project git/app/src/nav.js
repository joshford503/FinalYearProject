import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			{/* Nav bar */}
			<div className="topnav-centered">
				<div id="header"></div>

				<ul className="nav-links">
					{/* most popular tab */}
					<Link to="/Crime">
						<li id="dropdownlink">
							<a>Most Popular</a>
						</li>
					</Link>
					<li id="dropdownlink">
						{/* Fiction tab */}
						<a>Fiction</a>
						<ul className="dropdown">
							<Link to="/Childrens fiction">
								<a>All fiction</a>
							</Link>
							<Link to="/Crime">
								<a>Crime</a>
							</Link>
							<Link to="/Mystery">
								<a>Mystery</a>
							</Link>
							<Link to="/Superhero">
								<a>Super hero</a>
							</Link>
							<Link to="/Romance">
								<a>Romance</a>
							</Link>
						</ul>
					</li>
					<li id="dropdownlink">
						{/* non fiction tab */}
						<a>Non Fiction</a>
						<ul className="dropdown">
							<Link to="/Biography">
								<a>Biographies</a>
							</Link>
							<Link to="/Food and drink">
								<a>Food and drink</a>
							</Link>
							<Link to="/Music and drama">
								<a>Music and drama</a>
							</Link>
							<Link to="/Health and fitness">
								<a>Health and fitness</a>
							</Link>
							<Link to="/True Crime">
								<a>True Crime</a>
							</Link>
							<Link to="/History">
								<a>History</a>
							</Link>
						</ul>
					</li>
					<li id="dropdownlink">
						{/* childrens tab */}
						<a>Children's</a>
						<ul className="dropdown">
							<Link to="/Childrens fiction">
								<a>Children's fiction</a>
							</Link>
							<Link to="/Childrens Non-Fiction">
								<a>Children's Non-Fiction</a>
							</Link>
							<Link to="/Early Learning">
								<a>Early learning</a>
							</Link>
							<Link to="/Activity Books">
								<a>Activity Books</a>
							</Link>
							<Link to="/Young Adult">
								<a>Young Adult</a>
							</Link>
						</ul>
					</li>
					<li id="dropdownlink">
						{/* education tab */}
						<a>Education</a>
						<ul className="dropdown">
							<Link to="/Art and Design">
								<a>Art and Design</a>
							</Link>
							<Link to="/Computing and IT">
								<a>Computing and IT</a>
							</Link>
							<Link to="/Geography">
								<a>Geography</a>
							</Link>
							<Link to="/Mathematics">
								<a>Mathematics</a>
							</Link>
							<Link to="/Science">
								<a>Science</a>
							</Link>
							<Link to="/English">
								<a>English</a>
							</Link>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Nav;
