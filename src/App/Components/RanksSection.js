import React, { useState, useEffect } from 'react';
import './Css/RanksSection.css';
import { connect } from 'react-redux';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';

const RanksSection = (props) => {
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
				props.ranksSectionClose();
			}, 90);
		}, 90);
	}

	useEffect(() => {
		if (props.open) {
			openSection();
		}
	}, [props.open]);

	return (
		<section className="baseSection ranksSection" style={style}>
			<div className="baseSectionInternal ranksSectionInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>

				<div className="baseSectionContent ranksSectionContent">
					<div className="boxShadow boxShadowThick"></div>
					
					
				</div>

				<ToTopButton />
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		open: state.sections.ranksSection
	}
}

const dispatchToProps = dispatch => {
	return {
		ranksSectionOpen: () => dispatch({type: "ranksSection", value: "open"}),
		ranksSectionClose: () => dispatch({type: "ranksSection", value: "close"}),
		initialSectionOpen: () => dispatch({type: "initialSection", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps)(RanksSection);