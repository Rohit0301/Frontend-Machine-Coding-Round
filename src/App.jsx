import Tabs from "./Tabs";
import Table from "./Table";
import Modal from "./Modal";
import Timer from "./Timer";
import CShape from "./CShape";
import Layout from "./Layout";
import Loader from "./Loader";
import Ratings from "./Ratings";
import Accordion from "./Accordion";
import ProgressBar from "./ProgressBar";
import TrafficLights from "./TrafficLights";
import SelectableGrid from "./SelectableGrid";
import VirtualizedList from "./VirtualizedList";
const components = [
	{
		name: "Star Rating",
		Component: Ratings,
	},
	{
		name: "Traffic Lights",
		Component: TrafficLights,
	},
	{
		name: "CShape",
		Component: CShape,
	},
	{
		name: "Tabs",
		Component: Tabs,
	},
	{
		name: "Accordion",
		Component: Accordion,
	},
	{
		name: "Loader",
		Component: Loader,
	},
	{
		name: "Progress Bar",
		Component: ProgressBar,
	},
	{
		name: "Lazy loading Table",
		Component: Table,
	},
	{
		name: "Modal",
		Component: Modal,
	},
	{
		name: "Timer",
		Component: Timer,
	},
	{
		name: "Selectable Grid",
		Component: SelectableGrid,
	},
	{
		name: "Virtualized List",
		Component: VirtualizedList,
	},
];
function App() {
	return (
		<div>
			<nav>
				<a
					href="https://www.linkedin.com/in/rohitjain0301/"
					target="_blank"
					style={{ color: "	#0077B5" }}
				>
					Linkedin
				</a>
				<a
					href="https://github.com/Rohit0301/Frontend-Machine-Coding-Round"
					target="_blank"
					style={{ color: "#010409" }}
				>
					Github
				</a>
			</nav>
			{components.map(({ name, Component }) => (
				<Layout key={name} name={name}>
					<Component />
				</Layout>
			))}
		</div>
	);
}

export default App;
