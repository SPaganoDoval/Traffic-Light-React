import { string } from "prop-types";
import React, {useState} from "react";
import Semaforo from "./semaforo.jsx";

const TrafficLight = () => {

    const [color, lightOn] = useState("");


    return (
<div className="text-center">
			<h1 className="text-center mt-5">Semaforo</h1>
				<div className="semaforo">
                <Semaforo
                    turnOn={() => {color === "red" ? lightOn(""): lightOn("red")}}
                    extraClass={"red light " + (color === "red" ? "selected" : "")}
                    />
                    <Semaforo
                    turnOn={() => {color === "yellow" ? lightOn(""): lightOn("yellow")}}
                    extraClass={"yellow light " + (color === "yellow" ? "selected" : "")}
                    />
                     <Semaforo
                    turnOn={() => {color === "green" ? lightOn(""): lightOn("green")}}
                    extraClass={"green light " + (color === "green" ? "selected" : "")}
                    />
				</div>		
			<p>	Sonia Pagano Doval	</p>
		</div>

    );
};

TrafficLight.propTypes = {
    extraClass: string,
}

export default TrafficLight;