import React from "react";
import "./style.css";
const accordionContent = [
	{
		id: 1,
		title: "Section 1",
		content: "Section 1 content",
	},
	{
		id: 2,
		title: "Section 2",
		content: "Section 2 content",
	},
	{
		id: 3,
		title: "Section 3",
		content: "Section 3 content",
	},
	{
		id: 4,
		title: "Section 4",
		content: "Section 4 content",
	},
];

// Implemented this using vanilla Javascript,
// it is easy to implement it using react by managing a selectedSection state
export default function Accordion() {
	const handleSectionClicked = (sectionId) => {
		// if a selected section again clicked so we just return from the function
		if (
			document
				.querySelector(`#accordian-title-${sectionId}`)
				.classList.contains("selected-accordion-title")
		)
			return;

		for (let i = 0; i < accordionContent.length; i++) {
			// removing the selected class from all the section
			//  or we can check is selected class is present then only remove it

			document
				.querySelector(`#accordian-title-${accordionContent[i].id}`)
				.classList.remove("selected-accordion-title");
			let content = document.querySelector(
				`#accordian-content-${accordionContent[i].id}`
			);
			content.classList.remove("remove-accordion-content");

			// if the section contains selected it means it will our previously selected section
			//  so will add a new class remove-accordian-content to it, to show closing section
			// animation and also added handler when the animation completes we will remove that class
			if (content.classList.contains("selected-accordion-content")) {
				content.classList.add("remove-accordion-content");
				content.addEventListener("animationend", function handleAnimationEnd() {
					content.style.display = "none";
					content.classList.remove("remove-accordion-content");
					content.removeEventListener("animationend", handleAnimationEnd);
				});
			}
			content.classList.remove("selected-accordion-content");
		}

		// setting the selected class to title and content of currently selected section
		document.querySelector(`#accordian-content-${sectionId}`).style.display =
			"block";
		document
			.querySelector(`#accordian-title-${sectionId}`)
			.classList.add("selected-accordion-title");
		document
			.querySelector(`#accordian-content-${sectionId}`)
			.classList.add("selected-accordion-content");
	};
	return (
		<div className="accordion-container">
			{accordionContent.map((item) => (
				<div key={item.id}>
					<div
						id={`accordian-title-${item.id}`}
						className="accordian-title"
						onClick={() => handleSectionClicked(item.id)}
					>
						{item.title}
					</div>
					<div
						id={`accordian-content-${item.id}`}
						className="accordian-content"
					>
						{item.content}
					</div>
				</div>
			))}
		</div>
	);
}
