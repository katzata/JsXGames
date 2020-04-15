import React from 'react';
import './Css/CloseSectionButton.css';
import close from '../img/close.svg';

const CloseSectionButton = (props) => {
	return (
		<div className="closeSection">
			<div className="sectionCloseSide sectionCloseSide1"></div>
			<div className="sectionCloseSide sectionCloseSide2"></div>
			<div className="sectionCloseSide sectionCloseSide3"></div>
			<div className="sectionCloseSide sectionCloseSide4"></div>
			<div className="sectionCloseSide sectionCloseSide5"></div>
			<div className="sectionCloseSide sectionCloseSide6"></div>

			<div className="sectionCloseAngle sectionCloseAngle1"></div>
			<div className="sectionCloseAngle sectionCloseAngle2"></div>
			<div className="sectionCloseAngle sectionCloseAngleS sectionCloseAngle3"></div>
			<div className="sectionCloseAngle sectionCloseAngleS sectionCloseAngle4"></div>
			<div className="sectionCloseAngle sectionCloseAngle5"></div>
			<div className="sectionCloseAngle sectionCloseAngleS sectionCloseAngle6"></div>
			<div className="sectionCloseAngle sectionCloseAngleS sectionCloseAngle7"></div>
			<div className="sectionCloseAngle sectionCloseAngle8"></div>

			<div className="sectionCloseCover sectionCloseCover1"></div>
			<div className="sectionCloseCover sectionCloseCover2"></div>
			<div className="sectionCloseCover sectionCloseCover3"></div>
			<div className="sectionCloseCover sectionCloseCover4"></div>
			<div className="sectionCloseCover sectionCloseCover5"></div>
			<div className="sectionCloseCover sectionCloseCover6"></div>
			<div className="sectionCloseCover sectionCloseCover7"></div>
			<div className="sectionCloseCover sectionCloseCover8"></div>

			<div className="Bolt closeSectionBolt1"></div>
			<div className="Bolt closeSectionBolt2"></div>

			<img className="sectionCloseButton sectionCloseButton" src={close} alt="close" onClick={props.action}></img>
		</div>
	);
}

export default CloseSectionButton;