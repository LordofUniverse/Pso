import "./App.css";
import bg_video from "./bg_video/bg.mp4";
import bg_img from "./images/bg_img.png";

import styled from "styled-components";

import { useState } from "react";

// Input:
// longitude, conversion scale(CS), n
// CS can be of only (1,2,4,6,8,...) or (1/2,1/4,1/8,1/16,...)

// Formula:
// pso = longitude * conversion scale
// pso_harmonics - 1 = (n * 360) + pso
// pso_harmonics - 2 = ((1/n) * 360) + pso

function App() {
	// const [box1, setbox1] = useState(true);
	// const [box2, setbox2] = useState(false);
	const [cs, setcs] = useState(2);
	const [n, setn] = useState(1);
	const [lo, setlo] = useState(1);
	const [divide, setdivide] = useState(false);

	const Calculate = async () => {
		if (!(cs % 2 === 0)) {
			document.getElementById("validation").innerHTML =
				"CS should be a even number!";

			return "no";
		} else {
			document.getElementById("validation").innerHTML = "";
		}

		let pso = 0;

		if (divide) {
			pso = parseFloat(lo) * parseFloat(1 / cs);
		} else {
			pso = parseFloat(lo) * parseFloat(cs);
		}

		let psoharmonics1 = parseFloat(n) * 360 + pso;
		let psoharmonics2 = (1 / parseFloat(n)) * 360 + pso;

		document.getElementById("labelpso").innerHTML =
			"PSO = " + pso.toString();

		var e = document.getElementById("exampleFormControlSelect1");
		var selected = e.options[e.selectedIndex].text;

		if (selected === "(n * 360) + pso") {
			document.getElementById("labelresult").innerHTML =
				"PSO.HARMONICS = " + psoharmonics1.toString();
		} else {
			document.getElementById("labelresult").innerHTML =
				"PSO.HARMONICS = " + psoharmonics2.toString();
		}
	};

	// const Change = (num) => {
	// 	console.log(num);
	// 	if (num === 1) {
	// 		setbox1(true);
	// 		setbox2(false);
	// 	} else {
	// 		setbox1(false);
	// 		setbox2(true);
	// 	}
	// };

	const handleChangecs = (e) => {
		let final = "";
		let value = e.target.value;
		for (let i = 0; i < value.length; i++) {
			if (value[i] === ".") {
				if (!final.includes(".")) {
					final += ".";
				}
			} else {
				final += value[i].replace(/\D/g, " ");
			}
		}
		setcs(final);
	};

	const handleChangelo = (e) => {
		let final = "";
		let value = e.target.value;
		for (let i = 0; i < value.length; i++) {
			if (value[i] === ".") {
				if (!final.includes(".")) {
					final += ".";
				}
			} else {
				final += value[i].replace(/\D/g, " ");
			}
		}
		setlo(final);
	};

	const handleChangen = (e) => {
		let final = "";
		let value = e.target.value;
		for (let i = 0; i < value.length; i++) {
			if (value[i] === ".") {
				if (!final.includes(".")) {
					final += ".";
				}
			} else {
				final += value[i].replace(/\D/g, "");
			}
		}
		setn(final);
	};

	const Divide = () => {
		divide ? setdivide(false) : setdivide(true);
	};

	return (
		<div className="App">
			<BG>
				<Header>
					<Video
						src={bg_video}
						poster={bg_img}
						autoPlay
						loop
						muted
						playsInline
						height={window.innerHeight}
						width={window.innerWidth}
					/>
				</Header>
				<Container>
					<Box>
						<Left>
							<div class="form-group row">
								<label
									for="inputPassword"
									class="col-sm-2 col-form-label"
								>
									Longitude
								</label>
								<div class="col-sm-10">
									<input
										class="form-control"
										id="longitude"
										// placeholder="Password"
										value={lo}
										onChange={handleChangelo}
									/>
								</div>
							</div>

							<div class="form-group row">
								<label
									for="inputPassword"
									class="col-sm-2 col-form-label n"
								>
									N
								</label>
								<div class="col-sm-10 add n2">
									<input
										class="form-control"
										id="n"
										// placeholder="Pasksword"
										value={n}
										onChange={handleChangen}
									/>
								</div>
							</div>
							<div class="form-group">
								<Column>
									<Row>
										<label
											id="cslabel"
											for="exampleInputEmail1"
										>
											CS
										</label>

										{divide ? (
											<button
												type="submit"
												onClick={Divide}
												class="btn btn-primary nochange custom"
											>
												1/
											</button>
										) : (
											<button
												type="submit"
												onClick={Divide}
												class="btn btn-primary change custom"
											>
												1/
											</button>
										)}

										<Emptybox />

										<input
											type="text"
											class="form-control"
											id="cs"
											value={cs}
											onChange={handleChangecs}
										/>
									</Row>
									<small
										id="emailHelp"
										class="form-text text-muted"
									>
										Even numbers like 2, 4,... or 1/2,
										1/4,... To put 1/denominator, just click
										on the button and type denominator value
										alone
									</small>
								</Column>
							</div>
						</Left>

						<Middle>
							{/* {box1 ? (
								<button
									// type="submit"
									onClick={() => Change(1)}
									class="btn btn-primary nonchange"
								>
									(n * 360) + pso
								</button>
							) : (
								<button
									// type="submit"
									onClick={() => Change(1)}
									class="btn btn-primary change"
								>
									(n * 360) + pso
								</button>
							)}
							{box2 ? (
								<button
									// type="submit"
									onClick={() => Change(2)}
									class="btn btn-primary nonchange"
								>
									((1/n) * 360) + pso
								</button>
							) : (
								<button
									// type="submit"
									onClick={() => Change(2)}
									class="btn btn-primary change"
								>
									((1/n) * 360) + pso
								</button>
							)} */}
							<div class="form-group">
								<label for="exampleFormControlSelect1">
									Formula
								</label>
								<select
									class="form-control"
									id="exampleFormControlSelect1"
								>
									<option>(n * 360) + pso</option>
									<option>((1/n) * 360) + pso</option>
								</select>
							</div>
							<button
								type="submit"
								onClick={Calculate}
								class="btn btn-primary"
							>
								Calculate
							</button>
							<label id="validation"></label>
						</Middle>

						<Right>
							<Column>
								<label
									// for="inputPassword"
									id="labelpso"
								></label>
								<label
									// for="inputPassword"
									id="labelresult"
								></label>
							</Column>
						</Right>
					</Box>
				</Container>
			</BG>
		</div>
	);
}

const Emptybox = styled.div`
	width: 5%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 93%;
	padding-right: 8%;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

const BG = styled.div`
	width: 100%;
	height: 100%;
`;

const Header = styled.div`
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 0;
`;

const Video = styled.video`
	object-fit: fill;
`;

const Container = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled.div`
	width: 66%;
	height: 43%;
	background-color: white;
	/* border: 1px solid white; */
	border-radius: 3%;
	padding: 10px;
	padding-top: 30px;
	display: flex;
	flex-direction: row;
`;

const Left = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: justify;
`;

const Middle = styled.div`
	width: 30%;
	height: 58%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-top: 6%;
`;

const Right = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default App;
