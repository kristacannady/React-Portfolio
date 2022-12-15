import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
			description:'A website that offers fitness training services.',
			technologies: [
				'HTML'
                'CSS',
	
			],
			github: 'https://github.com/kristacannady/run-buddy',
		},
    ];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;