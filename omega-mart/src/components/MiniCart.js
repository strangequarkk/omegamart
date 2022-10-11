import React, { useState } from "react";
import MiniCartItem from "./MiniCartItem.js"


const MiniCart = () => {


return (
	<div className="minicart">
		<ul className="minicart-items">
			<MiniCartItem></MiniCartItem>

		</ul>
		<p className="minicart-subtotal"><span className="bold">Subtotal:</span> $74.49</p>
		<p className="minicart-buttons"><a className="decorative-button">VIEW CART</a> <a className="decorative-button">CHECKOUT</a></p>
	</div>			
);
};

export default MiniCart;