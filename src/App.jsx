import Tabs from "./Tabs";
import CShape from "./CShape";
import Layout from "./Layout";
import Loader from "./Loader";
import Ratings from "./Ratings";
import ProgressBar from "./ProgressBar";
import TrafficLights from "./TrafficLights";
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
		Component:  Tabs
	},
	{
		name: "Loader",
		Component:  Loader
	},
	{
		name: "Progress Bar",
		Component:  ProgressBar
	}
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
