import React, { useRef } from "react";
import "./style.css";

export default function SelectableGrid() {
	const cols = 10,
		rows = 10;
	const start = useRef();
	const end = useRef();

	const removeOlderActives = () => {
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				document.querySelector(`#grid${i}-${j}`).classList.remove("active");
			}
		}
	};
	const handleMouseDown = (e) => {
		if (e.target.id == "container") return;
		e.target.classList.add("active");
		start.current = e.target.id.replace("grid", "");
	};
	const handleMouseMove = (e) => {
		if (e.target.id == "container") return;
		if (!start.current) return;
		if (start.current) {
			end.current = e.target.id.replace("grid", "");
			updateActiveCells();
		}
	};
	const handleMouseUp = () => {
		start.current = null;
		end.current = null;
	};
	const updateActiveCells = () => {
		let [startRow, startCol] = start.current.split("-");
		let [endRow, endCol] = end.current.split("-");
		removeOlderActives();
		for (
			let i = Math.min(startRow, endRow);
			i <= Math.max(startRow, endRow);
			i++
		) {
			for (
				let j = Math.min(startCol, endCol);
				j <= Math.max(startCol, endCol);
				j++
			) {
				document.querySelector(`#grid${i}-${j}`).classList.add("active");
			}
		}
	};
	return (
		<div
			id="container"
			className="grid-container"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			{new Array(rows)
				.fill(0)
				.map((_, rowI) =>
					new Array(cols)
						.fill(0)
						.map((_, colI) => (
							<div
								id={`grid${rowI}-${colI}`}
								key={`${rowI}-${colI}`}
								className="grid"
							></div>
						))
				)}
			<div></div>
		</div>
	);
}
