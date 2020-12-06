import React from "react";
import "./test.css";

const test = () => {
	return (
		<>
			<div class="wrapper">
				<div class="container" id="c0">
					<div class="image" id="i0">
						<div class="city"></div>
					</div>
					<div class="story" id="s0">
						<div class="info">
							<h3>Pyramids</h3>
							<p>
								{" "}
								Built during a time when Egypt was one of the
								richest and most powerful civilizations in the
								world. Their massive scale reflects the unique
								role that the pharaoh played in ancient Egyptian
								society.
							</p>
						</div>
					</div>
				</div>
				<div class="container" id="c1">
					<div class="image" id="i1">
						<div class="city"></div>
					</div>
					<div class="story" id="s1">
						<div class="info">
							<h3>Stonehenge</h3>
							<p>
								{" "}
								Stonehenge is a prehistoric monument in
								Wiltshire, England. It was constructed in
								several stages between 3000 and 1500 B.C.,
								spanninng to the Bronze Age.
							</p>
						</div>
					</div>
				</div>
				<div class="container" id="c2">
					<div class="image" id="i2">
						<div class="city"></div>
					</div>
					<div class="story" id="s2">
						<div class="info">
							<h3>Tower of Pisa</h3>
							<p>
								{" "}
								The Leaning Tower of Pisa or simply the Tower of
								Pisa is the campanile, or freestanding bell
								tower, of the cathedral of the Italian city of
								Pisa, known worldwide for its unintended tilt
							</p>
						</div>
					</div>
				</div>

				{/* <div class="page">
	<h4>Hover the card</h4>
	<ul><li> <<< </li>

	<li> >>> </li>
	</ul>
	</div> */}
			</div>
		</>
	);
};

export default test;
