import React, { useEffect, useState } from "react";
import "./style.css";
const trafficLights = [
	{
		color: "red",
		next: "green",
		wait: 4000,
	},
	{
		color: "yellow",
		next: "red",
		wait: 1000,
	},
	{
		color: "green",
		next: "yellow",
		wait: 3000,
	},
];

export default function TrafficLights() {
	const [currentLight, setCurrentLight] = useState(trafficLights[0]);
	useEffect(() => {
		let timer = setTimeout(() => {
            // setting the current light as the current's next object
			setCurrentLight(
				trafficLights.find((item) => item.color == currentLight.next)
			);
		}, currentLight.wait);
		() => clearTimeout(timer);
	}, [currentLight]);

	return (
		<div className="traffic-lights">
			{trafficLights.map((item, index) => (
				<div
					key={item.color + index}
					className="light"
					data-color={
						currentLight?.color == item.color ? currentLight?.color : "#333"
					}
				></div>
			))}
		</div>
	);
}
