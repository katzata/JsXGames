import "./App.css";
import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";
import Select from "./components/core/Select/Select";
import RadioButtons from "./components/core/RadioButtons/RadioButtons";

function App(): JSX.Element {
	return (
		<div className="App">
			<RadioButtons
				options={["option1", "option2", "option3"]}
				changeHandler={() => {}}
				defaultValue="option1"
			/>
		</div>
	);
};

export default App;