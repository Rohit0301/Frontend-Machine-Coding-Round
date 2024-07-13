import React, { useEffect } from "react";
import "./style.css";
const tabContents = [
	{
		id: 1,
		title: "Tab 1",
		content: "Tab Content 1",
	},
	{
		id: 2,
		title: "Tab 2",
		content: "Tab Content 2",
	},
	{
		id: 3,
		title: "Tab 3",
		content: "Tab Content 3",
	},
];

// Implemented this using vanilla Javascript,
// it is easy to implement it using react by managing a selectedTab state
export default function Tabs() {
	// initially selecting the 1st tab
	useEffect(() => {
		document.querySelector(`#tab-${1}`).classList.add("selected-tab");
		document.querySelector(`#content-${1}`).classList.add("selected-content");
	}, []);

	// when we click on a tab then loop though all the tab element the content remove the selected
	// class from both tab and content and add the selected class to current tab and content
	const handleTabClick = (tabId) => {
		// removing selected class
		for (let i = 0; i < tabContents.length; i++) {
			document
				.querySelector(`#tab-${tabContents[i].id}`)
				.classList.remove("selected-tab");
			document
				.querySelector(`#content-${tabContents[i].id}`)
				.classList.remove("selected-content");
		}
		// added select class to current tab and content
		document.querySelector(`#tab-${tabId}`).classList.add("selected-tab");
		document
			.querySelector(`#content-${tabId}`)
			.classList.add("selected-content");
	};
	return (
		<div className="tab-container">
			<div className="tab">
				{tabContents.map((tab) => (
					<div
						key={`tab-${tab.id}`}
						id={`tab-${tab.id}`}
						className="tab-title"
						onClick={() => handleTabClick(tab.id)}
					>
						{tab.title}
					</div>
				))}
			</div>
			{tabContents.map((tab) => (
				<div
					key={`content-${tab.id}`}
					id={`content-${tab.id}`}
					className="content"
				>
					{tab.content}
				</div>
			))}
		</div>
	);
}
