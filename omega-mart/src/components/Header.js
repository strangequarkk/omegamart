import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Search from "./Search.js";
import MiniCart from "./MiniCart.js"


const Header = (props) => {
const [searchActive, setSearchActive] = React.useState(false);
const toggleSearchbar = () => {
	searchActive ? setSearchActive(false) : setSearchActive(true);
}

return (
		<header>
			<div id="deals-bar"><a href="#">This is <strong>NOT</strong> the real OmegaMart shop!</a></div>
			<div className="header-wrap constrained-width">
				<a href="index.html" id="header-logo"><img src="img/omegamart-logo-color.svg" alt="OmegaMart Logo"/></a>
				<Navbar searchHandler = {toggleSearchbar}/>
				<Search isActive={searchActive} searchFunc={props.searchFunc}/>
				<MiniCart/>
			</div>
		</header>
);
};

export default Header;