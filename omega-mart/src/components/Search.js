import React, { useState } from "react";


const Search = (props) => {
	const [searchString, setSearchString] = React.useState("");

	const handleInput = (event) => {
		setSearchString(event.target.value);
	}

	const handleSearch = () => {
		props.searchFunc(searchString);
	}
	const visible = props.isActive ? "visible" : "";
	
return (
<div className={`${visible} search-bar`}>
	<input type="text" className="search-text" name="search-text" placeholder="Search" onChange={handleInput}/>
	<button className="search-btn" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
</div>				
);
};

export default Search;