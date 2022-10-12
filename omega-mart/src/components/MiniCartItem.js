import React, { useState } from "react";


const MiniCartItem = (props) => {


return ( 
	<li>
		<button className="minicart-remove-item" aria-label="Remove this item">x</button> 
		<a href="#">{props.item.name}</a>
		<span className="minicart-quantity">{props.item.quantity} x ${props.item.price}</span>
	</li>
);

};

export default MiniCartItem;

/**/