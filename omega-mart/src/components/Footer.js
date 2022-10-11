import React, { useState } from "react";
import SocialLinks from "./SocialLinks.js";
import InfoLinks from "./InfoLinks.js";
import PresentedLogo from "./PresentedLogo.js";


const Footer = () => {


return (
<footer>
	<a href="#header-logo" className="back-to-top"><i className="fa-solid fa-chevron-up"></i></a>
	<SocialLinks/>
	<div id="footer-main" className="constrained-width">
		<InfoLinks/>
		<PresentedLogo/>
	</div>
	<p className="copyright-info">&copy;MEOW WOLF SHOP 2022</p>
</footer>	
);
};

export default Footer;