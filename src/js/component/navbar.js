import React, { useContext } from "react";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarHtml = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg mb-3 d-flex" data-bs-theme="dark">
			<div className="container-fluid" >
				<Link to="/characters" className="navbar-brand mb-0 h1">
					<img src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg" className="starWarsLogo"></img>
				</Link>
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse " id="navbarNavDropdown">
					<ul className="navbar-nav ms-5">
						<li className="nav-item yellow-hover">
							<Link to="/characters" className="nav-link active">
								<span className="navbar-brand mb-0 h1">Characters</span>
							</Link>
						</li>
						<li className="nav-item yellow-hover">
							<Link to="/planets" className="nav-link active">
								<span className="navbar-brand mb-0 h1">Planets</span>
							</Link>
						</li>
						<li className="nav-item yellow-hover">
							<Link to="/vehicles" className="nav-link active">
								<span className="navbar-brand mb-0 h1">Vehicles</span>
							</Link>
						</li>
						<li className="nav-item dropdown ms-5">
							<Dropdown autoClose="outside" >
								<Dropdown.Toggle variant="warning" id="dropdown-basic">
									Favorites <i className="fa-solid fa-heart"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{store.favorites?.map((item, index ) => {
										return (
											<Dropdown.Item key={index} className="d-flex justify-content-between align-items-center"><Link to={`/${item.type}/${item.id}`}>{item.name}</Link><button onClick={()=>actions.removeFavorite(item.id)} className="btn ms-auto"><i className="fa-solid fa-trash"></i></button></Dropdown.Item>
										)
									})}
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</div>
			</div>
		</nav>		
	);
};
