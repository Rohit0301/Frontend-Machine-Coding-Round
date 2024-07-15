import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { rowData } from "./contants";
const columns = [
	{
		field: "firstName",
		header: "First Name",
	},
	{
		field: "lastName",
		header: "Last Name",
	},
	{
		field: "state",
		header: "State",
	},
	{
		field: "phoneNumber",
		header: "Phone",
	},
];

const tableRowData = [
	...rowData,
	...rowData,
	...rowData,
	...rowData,
	...rowData,
];

export default function Table() {
	const PAGE_SIZE = 10;
	const dataLengthRef = useRef(0);
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		const data = fetchData(0);
		setTableData(data);
		dataLengthRef.current = data?.length; 

		// when we scoll inside the table container and we reached to the end of the table then we
		// call a fetch function which will find return the next 10 row data
		document
			.querySelector(".table-container")
			.addEventListener("scroll", () => {
				if (isInViewport(document.querySelector(".last-row"))) {
					const nextData = fetchData(dataLengthRef.current);
					setTableData((prev) => {
						dataLengthRef.current = prev.length + nextData.length;

						return [...prev, ...nextData];
					});
				}
			});
		() => document.removeEventListener("scroll");
	}, []);

	const fetchData = (start) => {
		// Assume this function as an backend api, in which we have implemented the pagination
		return tableRowData.slice(start, start + PAGE_SIZE);
	};

	// this function checks if we reached to the end of the table or not
	const isInViewport = (element) => {
		if (!element) return;
		var rect = element.getBoundingClientRect();
		var table = document
			.querySelector(".table-container")
			.getBoundingClientRect();
		return rect.top >= table.top && rect.top <= table.bottom;
	};

	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th key={`sr-no`}>Sr No.</th>
						{columns.map((col, index) => (
							<th key={`${col.header}-${index}`}>{col.header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map((data, rowIndex) => (
						<tr
							key={`row-data-${rowIndex}`}
							className={rowIndex + 1 === tableData.length ? "last-row" : ""}
						>
							<td>{rowIndex + 1}</td>
							{columns.map((col, index) => (
								<td key={`${col.header}-${index}`}>{data[col.field]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
