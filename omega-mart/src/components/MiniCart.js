import React, { useState } from "react";
import MiniCartItem from "./MiniCartItem.js"

const cartItemData = [
	{
		name:"Zalgitos Chip Pillow",
		quantity: 1,
		price:'39.99'
	},
	{
		name:"Daikon Plush",
		quantity: 2,
		price:'34.50'
	}
];
function ListItem(props) {
  // Correct! There is no need to specify the key here:  
  return <li>{props.value}</li>;
}


const MiniCart = (props) => {


const visible = props.isActive ? "visible" : "";
const subTotal = cartItemData.reduce( (total, item) => {
	return total + (parseFloat(item.price) * item.quantity);
}, 0);


const cartItems = cartItemData.map((item) => 
				<MiniCartItem key={item.name} item={item}/>
			);

console.log(cartItems);


return (
	<div className={`${visible} minicart`}>
		<ul className="minicart-items">
			{cartItems}

		</ul>
		<p className="minicart-subtotal"><span className="bold">Subtotal:</span> ${subTotal.toFixed(2)}</p>
		<p className="minicart-buttons"><a className="decorative-button">VIEW CART</a> <a className="decorative-button">CHECKOUT</a></p>
	</div>			
);
};

export default MiniCart;