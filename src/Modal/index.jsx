import React from "react";
import "./style.css";
export default function Modal() {
	const openModal = () => {
		document.querySelector(".modal-container").style.display = "block";
        document.querySelector(".modal-container").style.opacity = 1;
		document.querySelector("body").style.overflow = "hidden";
	};
	const closeModal = () => {
		document.querySelector(".modal-container").style.display = "none";
        document.querySelector(".modal-container").style.opacity = 0;
		document.querySelector("body").style.overflow = "auto";
	};
	const handleOutsideClick = (e) => {
		if (e.target.classList.contains("modal-container")) closeModal();
	};
	return (
		<div>
			<button className="open-btn" onClick={openModal}>
				Open Modal
			</button>
			<div className="modal-container" onClick={handleOutsideClick}>
				<div className="modal">
					<div className="modal-title">
						Modal Title
						<div className="close-icon" onClick={closeModal}>
							&#x2715;
						</div>
					</div>
					<div className="modal-body">
						The term "modal" is sometimes used to mean "dialog", but this is a
						misnomer. A modal window describes parts of a UI. An element is
						considered modal if it blocks interaction with the rest of the
						application.
					</div>
					<div className="modal-footer">
						<button className="close-btn" onClick={closeModal}>
							Cancel
						</button>
						<button className="submit-btn" onClick={closeModal}>
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
