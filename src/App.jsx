import Layout from "./Layout";
import Ratings from "./Ratings";
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
