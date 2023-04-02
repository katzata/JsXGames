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
import GameWindow from "./components/core/GameWindow/GameWindow";

import MechButton from "./components/containers/MechButton/MechButton";

function App(): JSX.Element {
	return (
		<div className="App">
			<div id="test"></div>
			<MechButton type="link" width={90} height={36} cutOff={11} text="games" target="test target" eventHandler={(e: React.MouseEvent) => {}}/>
		</div>
	);
};

export default App;
