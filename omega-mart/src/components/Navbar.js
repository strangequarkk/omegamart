import React, { useState } from "react";


const Navbar = (props) => {

return (
	<nav className="main-nav">
			<a href="cart.html" id="cart-nav" onClick={props.cartHandler}>Cart</a>
			<a href="login.html">Log in</a>
			<button id="search-nav" onClick={props.searchHandler}>Search</button>
			<a href="index.html">Shop</a>
	</nav>
				
);
};

export default Navbar;