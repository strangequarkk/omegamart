import React, { useState } from "react";


const Navbar = (props) => {


return (
	<nav className="main-nav">
			<a href="#" id="cart-nav">Cart</a>
			<a href="#">Log in</a>
			<a href="#" id="search-nav" onClick={props.searchHandler}>Search</a>
			<a href="index.html">Shop</a>
	</nav>
				
);
};

export default Navbar;