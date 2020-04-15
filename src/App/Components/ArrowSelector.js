import React/*, { useState, useEffect }*/ from 'react';
import './Css/ArrowSelector.css';
import { connect } from 'react-redux';

const ArrowSelector = (props) => {
	return (
		<div className="arrowSelectorContainer">
			<div className="arrowSelectorTextContainer">
				<div className="arrowSelectorContainerCoverL" />
				<div className="arrowSelectorContainerCoverR" />

				<ul className="arrowSelector">{props.children}</ul>
			</div>

			<div className="arrowSelectorArrowContainer">
				<div className="arrowSelectorArrowContainerL">
					<div className="arrowSelectorArrowL" />
				</div>

				<div className="arrowSelectorArrowDividerContainer">
					<div className="arrowSelectorArrowDivider" />
				</div>

				<div className="arrowSelectorArrowContainerR">
					<div className="arrowSelectorArrowR" />
				</div>
			</div>
		</div>
	);
}

export default connect() (ArrowSelector);