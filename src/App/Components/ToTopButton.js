import React from 'react';
import './Css/ToTopButton.css';
import up from '../img/up.svg';

const ToTopButton = (props) => {
	return (
		<div className="goUpSection">
			<div className="goUpSectionSide goUpSectionSide1"></div>
			<div className="goUpSectionSide goUpSectionSide2"></div>
			<div className="goUpSectionSide goUpSectionSide3"></div>
			<div className="goUpSectionSide goUpSectionSide4"></div>

			<div className="goUpSectionAngle goUpSectionAngle1"></div>
			<div className="goUpSectionAngle goUpSectionAngle2"></div>
			<div className="goUpSectionAngle goUpSectionAngle3"></div>
			<div className="goUpSectionAngle goUpSectionAngle4"></div>
			<div className="goUpSectionAngle goUpSectionAngle5"></div>

			<div className="goUpSectionCover goUpSectionCover1"></div>
			<div className="goUpSectionCover goUpSectionCover2"></div>
			<div className="goUpSectionCover goUpSectionCover3"></div>
			<div className="goUpSectionCover goUpSectionCover4"></div>
			<div className="goUpSectionCover goUpSectionCover5"></div>
			<div className="goUpSectionCover goUpSectionCover6"></div>
			<div className="goUpSectionCover goUpSectionCover7"></div>
			<div className="goUpSectionCover goUpSectionCover8"></div>

			<div className="Bolt goUpSectionBolt1"></div>
			<div className="Bolt goUpSectionBolt2"></div>

			<img className="goUpSectionButton" src={up} alt="go up" onClick={props.action}></img>
		</div>
	);
}

export default ToTopButton;