import "./App.css";
import { useState } from "react";

import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";
import Select from "./components/core/Select/Select";
import RadioButtons from "./components/core/RadioButtons/RadioButtons";
import List from "./components/core/List/List";
import Article from "./components/core/Article/Article";
import Form from "./components/core/Form/Form";
import Link from "./components/core/Link/Link";
import CheckBox from "./components/core/CheckBox/CheckBox";
import CharInput from "./components/core/CharInput/CharInput";


function App(): JSX.Element {
	const testSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(e);
	};

	return (
		<div className="App">
			<CharInput
				id="test"
				type="text"
				name="test"
				defaultValue="test"
				min="0"
				max="10"
				onChangeHandler={testSubmit}
				onFocusHandler={testSubmit}
				onBlurHandler={testSubmit}
				readOnly={false}
				disabled={false}
			/>
		</div>
	);
};

export default App;
