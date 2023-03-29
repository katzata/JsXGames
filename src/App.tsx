import "./App.css";
import { useState } from "react";

import Section from "./components/core/Section/Section";
import Button from "./components/core/Button/Button";
import Select from "./components/core/Select/Select";
import RadioButtons from "./components/core/RadioButtons/RadioButtons";
import List from "./components/core/List/List";
import Article from "./components/core/Article/Article";


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
			<Article title={"test title"} text={"test text"} scrollOffset={offset} getScrollOffset={handleOffset}>
				<>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
					<p>p1</p>
					<p>p2</p>
					<p>p3</p>
				</>
			</Article>
		</div>
	);
};

export default App;
