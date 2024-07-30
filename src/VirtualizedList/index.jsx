import React, { useState } from "react";
import "./style.css";

const listItems = Array.from({ length: 100000 }, (_, ind) => ind + 1);
const LIST_ITEM_HEIGHT = 32;
const CONTAINER_HEIGHT = 400;
const TOTAL_ITEMS_VISIBLE =
	Math.floor(CONTAINER_HEIGHT / (LIST_ITEM_HEIGHT + 8)) + 2;

export default function VirtualizedList() {
	const [scrollTop, setScrollTop] = useState(0);

	const startIndex = Math.floor(scrollTop / (LIST_ITEM_HEIGHT + 8));
	const endIndex = startIndex + TOTAL_ITEMS_VISIBLE;
	const updatedList = listItems.slice(startIndex, endIndex);
	const offsetY = startIndex * (LIST_ITEM_HEIGHT + 8);

	const handleOnScroll = (e) => {
		setScrollTop(e.target.scrollTop);
	};

	return (
		<div
			className="virtual-list-container"
			onScroll={handleOnScroll}
			style={{ height: `${CONTAINER_HEIGHT}px` }}
		>
			<div
				style={{
					height: `${listItems.length}px`,
					marginTop: `${offsetY}px`, // margin top is important to show the scrolling effect
				}}
			>
				{updatedList.map((item) => (
					<div
						key={item}
						id={`item-${item}`}
						className="virtual-list-item"
						style={{ height: `${LIST_ITEM_HEIGHT}px` }}
					>
						Item {item}
					</div>
				))}
			</div>
		</div>
	);
}
