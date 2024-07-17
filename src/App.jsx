import Tabs from "./Tabs";
import CShape from "./CShape";
import Layout from "./Layout";
import Loader from "./Loader";
import Ratings from "./Ratings";
import Accordion from "./Accordion";
import ProgressBar from "./ProgressBar";
import TrafficLights from "./TrafficLights";
import Table from "./Table";
import Modal from "./Modal";
import Timer from "./Timer";
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
		name: "Infinite Scroll Table",
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
];
function App() {
	return (
		<div>
			{components.map(({ name, Component }) => (
				<Layout key={name} name={name}>
					<Component />
				</Layout>
			))}
		</div>
	);
}

export default App;
