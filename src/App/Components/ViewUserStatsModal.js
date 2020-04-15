import React, { useState, useEffect } from 'react';
import './Css/ViewUserStatsModal.css';
import { connect } from 'react-redux';
import CloseSectionButton from '../Components/CloseSectionButton.js';
import ToTopButton from '../Components/ToTopButton.js';

const ViewUserStatsModal = (props) => {
	const [style, setStyle] = useState({opacity: "0", zIndex: "-10"});
	const [scale, setScale] = useState("0, 0");

	const openSection = () => {
		setScale("0, .01");
		setStyle({opacity: "1", zIndex: "1"});

		setTimeout(() => {
			setScale("1, .01");

			setTimeout(() => {
				setScale("1, 1")
			}, 100);
		}, 100);
	}

	const closeSection = () => {
		setScale("1, .01");

		setTimeout(() => {
			setStyle({opacity: "0", zIndex: "1"});
			setScale("0, .01");

			setTimeout(() => {
				setStyle({opacity: "0", zIndex: "-10"});
				setScale("0, 0");
				props.viewUserStatsClose();
			}, 100);
		}, 100);
	}

	const getGameData = (user) => {
		return (
			<>
				<span className="gameResult" onClick={() => getGameDetails("Sonic Wings 2")}>Sonic Wings 2</span>
				<span className="gameResult" onClick={() => getGameDetails("Real Bout Fatal Fury Densetsu")}>Real Bout Fatal Fury Densetsu</span>
				<span className="gameResult" onClick={() => getGameDetails("Gagou: Mark Of The Wolves")}>Gagou: Mark Of The Wolves</span>
				<span className="gameResult" onClick={() => getGameDetails("The King Of Fighters 2002")}>The King Of Fighters 2002</span>
				<span className="gameResult" onClick={() => getGameDetails("Metal Slug")}>Metal Slug</span>
				<span className="gameResult" onClick={() => getGameDetails("The Punisher")}>The Punisher</span>
				<span className="gameResult" onClick={() => getGameDetails("Last Blade 2")}>Last Blade 2</span>
				<span className="gameResult" onClick={() => getGameDetails("Kizuna Encounter Super Tag Battle")}>Kizuna Encounter Super Tag Battle</span>
			</>
		);
	}

	const getGameDetails = (title) => {
		console.log(title)
	}

	useEffect(() => {
		if (props.viewUserStatsModal) {
			openSection();
		}
	}, [props.viewUserStatsModal]);

	return (
		<div className="baseSection viewUserStatsContainer" style={style}>
			<div className="baseSectionInternal viewUserStatsInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>
					<div className="baseSectionContent viewUserStatsContentContainer">
						<div className="boxShadow boxShadowThick"></div>

						<div className="userStatInternal viewUserStatsGames">
							<span className="viewUserStatsLabel">Played</span>
							
							<div className="boxShadow boxShadow"></div>

							<div className="viewUserStatsGameResults">
								{getGameData("asd")}
							</div>
						</div>

						<div className="userStatInternal viewUserGameStats">
							<div className="boxShadow boxShadow"></div>

							<span className="viewUserStatsLabel">Stats</span>
							
							<span className="statTitle">Hours played:</span>
							<span className="viewUserStatResult viewUserStatHours">13hrs.</span>

							<span className="statTitle">Credits used:</span>
							<span className="viewUserStatResult viewUserStatCredits">33</span>

							<span className="statTitle">Score:</span>
							<span className="viewUserStatResult viewUserStatScore">19884154262</span>

							<span className="statTitle">Times beaten:</span>
							<span className="viewUserStatResult viewUserStatBeaten">28</span>
						</div>
					</div>

				<ToTopButton />
			</div>
		</div>
	);
}

const stateToProps = state => {
	return {
		viewUserStatsModal: state.viewUserStatsModal
	}
}

const dispatchToProps = dispatch => {
	return {
		viewUserStatsClose: () => dispatch({type: "viewUserStats", value: "close"})
	}
}

export default connect(stateToProps, dispatchToProps) (ViewUserStatsModal);