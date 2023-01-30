import React from 'react'
import { useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbarr.css";
import About from '../Pages/About'
import Restorantes from '../Pages/Restorantes';
import Contact from '../Pages/Contact'
import Login from'../screens/Login';
import Signup from '../screens/Signup';
export default function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Food Delivery</h3>
			<BrowserRouter>
				<nav ref={navRef}>

					<Link to="/Pages/Contact" className="nav-link">Contact</Link>
					<Link to="/Pages/About" className="nav-link">About</Link>
					<Link to="/Pages/Restorantes" className="nav-link">Restorantes</Link>
					<Link to="/Screens/Login" className='nav-link-login'>Login</Link>
					<Link to="/creatuser" className='nav-link-login'>SignUp</Link>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<Routes>
					<Route Path="/Pages/About" element={<About />}></Route>
					<Route Path="/Pages/Contact" element={<Contact />}></Route>
					<Route Path="/Pages/Restorantes" element={<Restorantes />}></Route>
					<Route Path="/Screens/Login" element={<Login/>}></Route>
					<Route Path="/creatuser" element={<Signup/>}></Route>
				</Routes>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</BrowserRouter>
		</header>
	);
}
