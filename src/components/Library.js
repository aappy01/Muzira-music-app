import TopMenu from '../TopMenu';
import './Library.css';
export default function Library() {
	return (
		//   <!-- =========================library section=========================== -->
		<main>
			<section id="library">
				{/* <!-- =========================Background Circles=========================== --> */}
				{/* <div class="circle">
					<div class="background-circles">
						<img class="big-circ" src="./assets/Ellipse 2.png" alt="" />
						<div>
							<img class="small-circ" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ2" src="./assets/Ellipse 2.png" alt="" />
						</div>
						<div>
							<img class="small-circ3" src="./assets/Ellipse 2.png" alt="" />
						</div>
						<div class="smallest-circ">
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
						</div>
					</div>
					<div class="background-circles2">
						<img class="big-circ" src="./assets/Ellipse 2.png" alt="" />
						<div>
							<img class="small-circ" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ2" src="./assets/Ellipse 2.png" alt="" />
						</div>
						<div>
							<img class="small-circ3" src="./assets/Ellipse 2.png" alt="" />
						</div>
						<div class="smallest-circ">
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
							<img class="small-circ4" src="./assets/Ellipse 2.png" alt="" />
						</div>
					</div>
				</div> */}

				{/* <!-- =========================PAGE HEADING=========================== --> */}
				<TopMenu />
				{/* <!-- =========================CENTER BOX=========================== --> */}
				<div class="rectangle-heading">
					<span>Songs</span>
					<span>Album</span>
					<span>Now Playing</span>
					<span>Favourite Songs</span>
				</div>
				<div class="rectangle"></div>
			</section>
		</main>
	);
}
