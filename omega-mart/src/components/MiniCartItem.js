import React, { useState } from "react";


const MiniCartItem = () => {


return (
			<li>
				<button className="minicart-remove-item" aria-label="Remove this item">x</button> 
				<a href="#">Daikon Plush</a>
				<span className="minicart-quantity">1 x $34.50</span>
			</li>			
);
};

export default MiniCartItem;