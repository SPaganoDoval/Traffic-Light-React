import React from "react";
import Semaforo from "./semaforo.jsx";
import TrafficLight from "./trafficLight.jsx";
import PropTypes from "prop-types";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TRAFFIC LIGHT</h1>
				<div className="semaforo">
					<Semaforo clase="circle light-green"/>
					<Semaforo clase="circle light-yellow"/>
					<Semaforo clase="circle light-red"/>
				</div>		
			<p>	Made by Sonia Pagano Doval ❤️	</p>
		</div>
	);
};

export default Home;