import React, { useState, useEffect } from 'react';
import './Css/FavoritesSection.css';
import { connect } from 'react-redux';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';

const FavoritesSection = (props) => {
	const [style, setStyle] = useState({opacity: "0"});
	const [scale, setScale] = useState("0, 0");

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
				props.favoritesSectionClose();
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
		<section className="baseSection favoritesSection" style={style}>
			<div className="baseSectionInternal favoritesSectionInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>

				<div className="baseSectionContent favoritesSectionContent">
					<div className="boxShadow boxShadowThick"></div>
				</div>

				<ToTopButton />
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		open: state.sections.favoritesSection
	}
}

const dispatchToProps = dispatch => {
	return {
		favoritesSectionOpen: () => dispatch({type: "favoritesSection", value: "open"}),
		favoritesSectionClose: () => dispatch({type: "favoritesSection", value: "close"}),
		initialSectionOpen: () => dispatch({type: "initialSection", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps)(FavoritesSection);