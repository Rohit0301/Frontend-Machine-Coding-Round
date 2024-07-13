import React, { useState, useEffect } from "react";
import "./style.css";
const allElements = [
	{ id: 1, selected: false, visible: true },
	{ id: 2, selected: false, visible: true },
	{ id: 3, selected: false, visible: true },
	{ id: 4, selected: false, visible: true },
	{ id: 5, selected: false, visible: false },
	{ id: 6, selected: false, visible: false },
	{ id: 7, selected: false, visible: true },
	{ id: 8, selected: false, visible: true },
	{ id: 9, selected: false, visible: true },
];
export default function CShape() {
	const [queue, setQueue] = useState([]);
	const [elements, setElements] = useState(allElements);

	useEffect(() => {
        // if all elements are selected reset back it to original state
		if (queue.length == 7) {
			resetElements();
		}
	}, [queue]);

	const resetElements = () => {
		let count = 0;
        // Use let mandatory, otherwise it will give wierd result
        // traversing all the queue element when all elements are selected and setting the 
        // selected property of the element in the same order they have clicked
		for (let i = 0; i < queue.length; i++) {
			count++;
			setTimeout(() => {
                // use callback function while setting element
				setElements((prevElemets) =>
					prevElemets.map((item) => {
						if (item.id == queue[i]) {
							return {
								...item,
								selected: false,
							};
						}
						return item;
					})
				);
			}, count * 1000);
			if (count == 7) setQueue([]);
		}
	};

    // Add elements in queue if not added also change the selected property of given id element
	const handleElementClick = (id) => {
		if (!queue.includes(id)) {
		    setQueue([...queue, id]);
		}
		setElements(
			elements.map((item) => {
				if (item.id == id) {
					return {
						...item,
						selected: true,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="c-shape">
			{elements.map((element) => (
				<div
					key={element.id}
					className="element"
					data-visible={element.visible}
					data-selected={element.selected}
					onClick={() => handleElementClick(element.id)}
				>
					{element.id}
				</div>
			))}
		</div>
	);
}
