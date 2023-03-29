import "./App.css";
import { useState } from "react";

import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";
import Select from "./components/core/Select/Select";
import RadioButtons from "./components/core/RadioButtons/RadioButtons";
import List from "./components/core/List/List";


function App(): JSX.Element {
	const [offset, setOffset] = useState(30);
	const handleOffset = (newOffset: number): void => {
		if (newOffset) {
			setOffset(Number(newOffset));
			console.log(newOffset);
		};
	};

	return (
		<div className="App">
			<List scrollOffset={offset} getScrollOffset={handleOffset}></List>
		</div>
	);
};

export default App;