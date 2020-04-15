import React from 'react';
import './Css/LoadingSpinner.css';

const LoadingSpinner = () => {
	return (
		<div className="spinnerContainer">
			<div className="spinnerInternal">
				<div className="spinnerGlowContainer">
					<div className="spinnerGlow"></div>
				</div>

				<div className="spinnerCover"></div>
			</div>
		</div>
	)
}

export default LoadingSpinner;