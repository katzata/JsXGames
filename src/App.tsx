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


function App(): JSX.Element {
	const testSubmit = (formData: FormData): void => {
		console.log(formData.get("test"));
	};

	return (
		<div className="App">
			<Link>
				<span></span>
			</Link>
		</div>
	);
};

export default App;
