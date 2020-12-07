import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./Navibar.css";

const Navibar = () => {
	return (
		<div className="navbar-fixed">
			<Navbar expand="lg" className="nav">
				<Navbar.Brand
					href="/portfolio"
					className="brand"
					style={{ color: "black" }}
				>
					{/* <img
						src="https://res.cloudinary.com/dusr8fbuo/image/upload/v1607133205/adeola-symbol_rrzces.png"
						style={{ height: "1.5em" }}
					></img> */}
					AA
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ backgroundColor: "white" }}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link
							as={Link}
							to="/portfolio"
							className="nav-link"
							// style={{ color: "black", fontWeight: "300" }}
						>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/portfolio/#contact"
							className="nav-link"

							// style={{ color: "black", fontWeight: "300" }}
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navibar;
