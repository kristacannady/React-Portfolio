import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/kristacannady"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/Github.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/kristacannady/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/Linkedin.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;