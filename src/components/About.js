import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/Headshot.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi! I am Krista, I am a full stack web developer looking for jobs within the healthcare and tech fields. 
				</p>
			</div>
		</section>
	);
}

export default About;