import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			{/* the row which contains the links for the footer */}
			<div className="row">
				<div className="column">
					<h4>Site map</h4>
					<div className="column">
						<ul id="footerLinks">
							<li>Fiction</li>
							<li>
								<Link to="/Childrens fiction">-All Fiction</Link>
							</li>
							<li>
								<Link to="/Crime">-Crime</Link>
							</li>
							<li>
								<Link to="/Mystery">-Mystery</Link>
							</li>
							<li>
								<Link to="/Superhero">-Superhero</Link>
							</li>
							<li>
								<Link to="/Romance">-Romance</Link>
							</li>
						</ul>
						<ul id="footerLinks">
							<li>Non Fiction</li>
							<li>
								<Link to="/Biography">-Biographies</Link>
							</li>
							<li>
								<Link to="/Food and drink">-Food and drink</Link>
							</li>
							<li>
								<Link to="/Music and drama">-Music and Drama</Link>
							</li>
							<li>
								<Link to="/Health and fitness">-Health and Fitness</Link>
							</li>
							<li>
								<Link to="/True Crime">-TrueCrime</Link>
							</li>
							<li>
								<Link to="/History">-History</Link>
							</li>
						</ul>
					</div>
					<div className="column">
						<ul id="footerLinks">
							<li>Childrens</li>
							<li>
								<Link to="/Childrens fiction">-Childrens Fiction</Link>
							</li>
							<li>
								<Link to="/Childrens Non-Fiction">-Childrens Non-Fiction</Link>
							</li>
							<li>
								<Link to="/Early Learning">-Early Learning</Link>
							</li>
							<li>
								<Link to="/Activity Books">-Activity Books</Link>
							</li>
							<li>
								<Link to="/Young Adult">-Young Adult</Link>
							</li>
						</ul>
						<ul id="footerLinks">
							<li>Education</li>
							<li>
								<Link to="/Art and Design">-Art and Design</Link>
							</li>
							<li>
								<Link to="/Computing and IT">-Computing IT</Link>
							</li>
							<li>
								<Link to="/Geography">-Geography</Link>
							</li>
							<li>
								<Link to="/Mathematics">-Maths</Link>
							</li>
							<li>
								<Link to="/Science">-Science</Link>
							</li>
							<li>
								<Link to="/English">-English</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="column">
					<h4>info</h4>
					<li>
						<Link to="/info">-Information</Link>
					</li>
				</div>
			</div>
		</div>
	);
}
export default Footer;
