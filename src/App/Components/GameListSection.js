import React, { useState, useEffect } from 'react';
import './Css/GameListSection.css';
import { connect } from 'react-redux';
import axios from '../../axios-requests';

import SearchFilters from '../Components/SearchFilters';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';
import ArrowSelector from '../Components/ArrowSelector';
import LoadingSpinner from '../Components/LoadingSpinner';

// axios.defaults.baseURL = "https://jsx-games.firebaseio.com/";
// axios.defaults.headers.common["Authorisation"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "games/json";

const GameListSection = (props) => {
	const [style, setStyle] = useState({opacity: "0"});
	const [scale, setScale] = useState("0, 0");
	const [results, setResults] = useState("");
	const filters = {
		actual: (
			<>
				<div className="filtersSubContainer">
					<div className="filterOptionTube"></div>
					<div className="filterOptionCover"></div>
					<div className="filterOptionTitle">Genre</div>
					
					<ArrowSelector>
						<li className="arrowSelectorOption">All</li>
						<li className="arrowSelectorOption">Action</li>
						<li className="arrowSelectorOption">Adventure</li>
						<li className="arrowSelectorOption">RPG</li>
					</ArrowSelector>
				</div>

				<div className="filtersSubContainer">
					<div className="filterOptionTube"></div>
					<div className="filterOptionCover"></div>
					<div className="filterOptionTitle">Type</div>
					
					<ArrowSelector>
						<li className="arrowSelectorOption">All</li>
						<li className="arrowSelectorOption">Shooting</li>
						<li className="arrowSelectorOption">Strategy</li>
						<li className="arrowSelectorOption">Turn-Based</li>
					</ArrowSelector>
				</div>

				<div className="filtersSubContainer">
					<div className="filterOptionTube"></div>
					<div className="filterOptionCover"></div>
					<div className="filterOptionTitle">Difficulty</div>
					
					<ArrowSelector>
						<li className="arrowSelectorOption">All</li>
						<li className="arrowSelectorOption">Easy</li>
						<li className="arrowSelectorOption">Medium</li>
						<li className="arrowSelectorOption">Hard</li>
					</ArrowSelector>
				</div>
			</>
		)
	}

	const openSection = () => {
		setScale("0, .01");
		setStyle({opacity: "1"});

		setTimeout(() => {
			setScale("1, .01");

			setTimeout(() => {
				setScale("1, 1")
				setResults(<LoadingSpinner/>);
			}, 90);
		}, 90);
	}
	const closeSection = () => {
		setScale("1, .01");

		setTimeout(() => {
			setStyle({opacity: "0"});
			setScale("0, .01")

			setTimeout(() => {
				setStyle({opacity: "0"});
				setScale("0, 0")
				props.gameListSectionClose();
			}, 90);
		}, 90);
	}

	useEffect(() => {
		let responseTemp = [];

		axios.get("/games.json")
			.then(response => {
				Object.entries(response.data).map(key => {
						
					if (key[0] === "Samurai Shodown 3") {
						responseTemp.push(key[0])
						setResults(responseTemp)
					}
				})

				// console.log(responseTemp)
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		if (props.open) {
			openSection();
		}
	}, [props.open]);

	

	return (
		<section className="baseSection gameListSection" style={style}>
			<div className="baseSectionInternal gameListSectionInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>

				<div className="baseSectionContent gameListSectionContent">
					<div className="gameListSectionOptionsContainer">
						<SearchFilters >
							{filters.actual}
						</SearchFilters>
					</div>

					<div className="gameListSectionResultsContainer">
						{results}
					</div>
				</div>

				<ToTopButton />
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		open: state.sections.gameListSection
	}
}

const dispatchToProps = dispatch => {
	return {
		gameListSectionOpen: () => dispatch({type: "gameListSection", value: "open"}),
		gameListSectionClose: () => dispatch({type: "gameListSection", value: "close"})
	}
}

export default connect(stateToProps, dispatchToProps) (GameListSection);