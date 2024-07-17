import React, { useRef } from "react";
import "./style.css";
export default function Timer() {
	const interval = useRef();

	const formatTime = (time) => {
		if (time[0] < 10) time[0] = "0" + time[0];
		if (time[1] < 10) time[1] = "0" + time[1];
		return time.join(":");
	};
	const startTimer = () => {
		interval.current = setInterval(() => {
			let time = document
				.querySelector("#timer")
				.innerHTML.split(":")
				.map((item) => Number(item));
			if (time[1] < 59) {
				time[1] += 1;
			} else {
				time[0] += 1;
				time[1] = 0;
			}
			document.querySelector("#timer").innerHTML = formatTime(time);
		}, 1000);
	};
	const stopTimer = () => {
		clearInterval(interval.current);
	};
	const resetTimer = () => {
		stopTimer();
		document.querySelector("#timer").innerHTML = "00:00";
	};
	return (
		<div>
			<div className="button-container">
				<button onClick={startTimer}>Start</button>
				<button onClick={stopTimer}>Stop</button>
				<button onClick={resetTimer}>Reset</button>
			</div>
			<div id="timer" className="timer">
				00:00
			</div>
		</div>
	);
}
