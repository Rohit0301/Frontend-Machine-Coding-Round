import React, { useRef } from "react";
import "./style.css";
export default function FollowCursor() {
	const container = useRef();
	const circle = useRef();

	const throttleMouseMove = (func, delay) => {
		let timer = null;
		return function (...args) {
			if (!timer) {
				func.apply(this, args);
				timer = setTimeout(() => {
					timer = null;
				}, delay);
			}
		};
	};

	const handleMouseMove = (e) => {
		const rect = container.current.getBoundingClientRect();
		circle.current.style.top = `${e.clientY - rect.top - 20}px`;
		circle.current.style.left = `${e.clientX - rect.left - 20}px`;
	};

	return (
		<div
			className="follow-container"
			ref={container}
			onMouseMove={throttleMouseMove(handleMouseMove, 100)}
		>
			<div className="cursor-circle" ref={circle}></div>
		</div>
	);
}
