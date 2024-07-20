import React, { useEffect } from "react";
import "./style.css";
const images = [];
export default function Carousel() {
	const handlePrevClick = () => {
        const imageContainer = document.querySelector(".image-container")
        let prevTranslate = +(imageContainer.style.left.replace("rem","") || 0)
        imageContainer.style.left=`${14+prevTranslate}rem`;

        // let lastElement = imageContainer.lastElementChild
        // imageContainer.removeChild(lastElement)
        // imageContainer.insertBefore(imageContainer.firstElementChild, lastElement)
    };
	const handleNextClick = () => {
        const imageContainer = document.querySelector(".image-container")
		let prevTranslate = +(imageContainer.style.left.replace("rem","") || 0)
		imageContainer.style.left=`${-14+prevTranslate}rem`;
		imageContainer.style.transition=`all s2 ease-out`;
        // let firstElement = imageContainer.firstElementChild
        // imageContainer.removeChild(firstElement)
        // imageContainer.appendChild(firstElement)
	};
	return (
		<div>
			<button onClick={handlePrevClick}>Prev</button>
			<div className="carousel">
				<div className="image-container">
					<div id={`image-1`} className="carousel-image">1</div>
					<div id={`image-2`} className="carousel-image">2</div>
					<div id={`image-3`} className="carousel-image">3</div>
					<div id={`image-4`} className="carousel-image">4</div>
				</div>
			</div>
			<button onClick={handleNextClick}>Next</button>
		</div>
	);
}
