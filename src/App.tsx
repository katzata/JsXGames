import "./App.css";
import Section from "./components/core/Section/Section";

function App(): JSX.Element {
	return (
		<div className="App">
			<Section title="yay">
				<span id="test1">test</span>
				<p id="test2">test</p>
			</Section>
		</div>
	);
};

export default App;