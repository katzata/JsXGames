import "./App.css";
import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";
import Select from "./components/core/Select/Select";

function App(): JSX.Element {
	const options: Array<Array<string>> = [["option1", "value1"], ["option2", "value2"], ["option3", "value3"]];
	
	return (
		<div className="App">
			<Select
				options={options}
				changeHandler={() => {}}
				defaultValue="value2"
			/>
		</div>
	);
};

export default App;