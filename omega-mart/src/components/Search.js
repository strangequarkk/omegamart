import React, { useState } from "react";


const Search = () => {


return (
<div className="search-bar">
	<input type="text" className="search-text" name="search-text" placeholder="Search" />
	<button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
</div>				
);
};

export default Search;