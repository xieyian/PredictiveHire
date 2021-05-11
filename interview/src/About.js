import React from 'react';
import './About.scss';
const About = () => {
	return (
		<div>
			<h1 className="home-title">About Me</h1>
			<div className="about-layout">
				<div className="about-left">
					<div className="myself" />
				</div>
				<div className="about-right">
					<div className="about-right-layout">
						<h1 className="about-title">Ranking of Yian Xie(Andy)</h1>
						<table>
							<tr>
								<th>Category</th>
								<th>Rank</th>
							</tr>
							<tr>
								<td>Men's singles</td>
								<td>24</td>
							</tr>
							<tr>
								<td>Men's doubles</td>
								<td>33</td>
							</tr>
						</table>
						<h1 className="about-title">Men's singles results of Andy Xie</h1>
						<table>
							<tr>
								<th>Tournament</th>
								<th>Result</th>
							</tr>
							<tr>
								<td>2021 City of Adelaide Tournament</td>
								<td>5/8</td>
							</tr>
							<tr>
								<td>2020 Joy Twining & Joan Jones Tournament</td>
								<td>3/4</td>
							</tr>
						</table>
						<h1 className="about-title">Men's doubles results of Andy Xie</h1>
						<table>
							<tr>
								<th>Tournament</th>
								<th>Result</th>
							</tr>
							<tr>
								<td>2021 City of Adelaide Tournament</td>
								<td>1</td>
							</tr>
							<tr>
								<td>2020 Joy Twining & Joan Jones Tournament</td>
								<td>3/4</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
