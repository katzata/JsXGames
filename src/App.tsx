import "./App.css";
import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";

function App(): JSX.Element {
	return (
		<div className="App">
			<Button eventHandler={() => {}}>
				<span id="test1">test</span>
			</Button>
		</div>
	);
};

export default App;