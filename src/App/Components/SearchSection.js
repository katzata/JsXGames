import React, { useState, useEffect } from 'react';
import './Css/SearchSection.css';
import { connect } from 'react-redux';
import SearchFilters from '../Components/SearchFilters';
import ArrowSelector from '../Components/ArrowSelector';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';

const SearchSection = (props) => {
	const [style, setStyle] = useState({opacity: "0"});
	const [scale, setScale] = useState("0, 0");
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
				props.searchSectionClose();
				props.initialSectionOpen();
			}, 90);
		}, 90);
	}

	useEffect(() => {
		if (props.open) {
			openSection();
		}
	}, [props.open]);

	return (
		<section className="baseSection searchSection" style={style}>
			<div className="baseSectionInternal searchSectionInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>

				<div className="baseSectionContent searchSectionContent">
					<div className="boxShadow boxShadowThick"></div>
					
					<div className="searchSectionSearchContainer">
						<label className="searchSectionSearchLabel">
							Search
							<div className="searchSectionSearchFieldBoxShadow">
								<input className="searchSectionSearchField"></input>
							</div>
						</label>

						<SearchFilters>
							{filters.actual}
						</SearchFilters>

						<div className="searchSectionResultsContainer">
							
						</div>
					</div>
				</div>

				<ToTopButton />
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		open: state.sections.searchSection
	}
}

const dispatchToProps = dispatch => {
	return {
		searchSectionOpen: () => dispatch({type: "searchSection", value: "open"}),
		searchSectionClose: () => dispatch({type: "searchSection", value: "close"}),
		initialSectionOpen: () => dispatch({type: "initialSection", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps)(SearchSection);