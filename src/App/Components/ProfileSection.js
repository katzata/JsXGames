import React, { useState, useEffect } from 'react';
import './Css/ProfileSection.css';
import { connect } from 'react-redux';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';

const ProfileSection = (props) => {
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
				props.profileSectionClose();
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
					
					
				</div>

				<ToTopButton />
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		open: state.sections.profileSection
	}
}

const dispatchToProps = dispatch => {
	return {
		profileSectionOpen: () => dispatch({type: "profileSection", value: "open"}),
		profileSectionClose: () => dispatch({type: "profileSection", value: "close"}),
		initialSectionOpen: () => dispatch({type: "initialSection", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps)(ProfileSection);