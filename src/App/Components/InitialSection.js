import React, { useState, useEffect } from 'react';
import './Css/InitialSection.css';
import { connect } from 'react-redux';

import gamesIcon from '../img/gamepad.svg';
import ranksIcon from '../img/bars.svg';
import forumIcon from '../img/forum.svg';
import linkIcon from '../img/link.svg';

const InitialSection = (props) => {
	const height = window.innerHeight;
	const [styles, setStyles] = useState({
		class1: "verticalStripeFlake animateFlake1",
		class2: "verticalStripeFlake animateFlake2",
		class3: "verticalStripeFlake animateFlake3",
		class4: "verticalStripeFlake animateFlake4",
		opacity: {opacity: "0"},
		offset1: {transform: "translateY(-" + height + "px)"},
		offset2: {transform: "translateY(" + height + "px)"},
		offset3: {transform: "translateY(-" + height + "px)"},
		offset4: {transform: "translateY(" + height + "px)"}
	})

	const games = () => {
		props.openGameList();
		props.closeInitialSection();
	}

	const ranks = () => {
		props.openRanks();
		props.closeInitialSection();
	}

	const forum = () => {
		props.openForum();
		props.closeInitialSection();
	}

	const links = () => {
		props.openLinks();
		props.closeInitialSection();
	}

	useEffect(() => {
		if (props.toggle) {
			setStyles({
				class1: "verticalStripeFlake animateFlake1",
				class2: "verticalStripeFlake animateFlake2",
				class3: "verticalStripeFlake animateFlake3",
				class4: "verticalStripeFlake animateFlake4",
				opacity: {opacity: "1"},
				offset1: {transform: "translateY(0)"},
				offset2: {transform: "translateY(0)"},
				offset3: {transform: "translateY(0)"},
				offset4: {transform: "translateY(0)"}
			})
		} else {
			const currentHeight = window.innerHeight;
			
			setStyles({
				class1: "verticalStripeFlake",
				class2: "verticalStripeFlake",
				class3: "verticalStripeFlake",
				class4: "verticalStripeFlake",
				opacity: {opacity: "0"},
				offset1: {transform: "translateY(-" + currentHeight + "px)"},
				offset2: {transform: "translateY(" + currentHeight + "px)"},
				offset3: {transform: "translateY(-" + currentHeight + "px)"},
				offset4: {transform: "translateY(" + currentHeight + "px)"}
			})
		}
	}, [props.toggle]);

	return (
		<section className="baseSection initialSection">
			<div className="initialSectionLinksContainer gamesLinkContainer">
				<div className="verticalStripe" style={styles.opacity}>
					<div className={styles.class1}></div>
				</div>
				
				<div className="initialSectionLinks initialSectionGamesLink" style={styles.offset1} onClick={games}>
					<div className="linkTitleSection">
						<div className="initialSectionSide initialSectionSide1"></div>
						<div className="initialSectionSide initialSectionSide2"></div>
						<div className="initialSectionSide initialSectionSide3"></div>
						<div className="initialSectionSide initialSectionSide4"></div>
						<div className="initialSectionSide initialSectionSide5"></div>

						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle1"></div>
						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle2"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle3"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle4"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle5"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle6"></div>

						<div className="initialSectionCover initialSectionCover1"></div>
						<div className="initialSectionCover initialSectionCover2"></div>
						<div className="initialSectionCover initialSectionCover3"></div>
						<div className="initialSectionCover initialSectionCover4"></div>
						<div className="initialSectionCover initialSectionCover5"></div>
						<div className="initialSectionCover initialSectionCover6"></div>
						<div className="initialSectionCover initialSectionCover7"></div>

						<div className="Bolt initialBolt1"></div>
						<div className="Bolt initialBolt2"></div>

						<div className="linkTitleContainer">
							<div className="UserNameContainer">
								<div className="UserNameContainerCoverL"></div>
								<div className="UserNameContainerCoverR"></div>

								<p className="Text linkTitleText gamesLinkTitleText">Games</p>
							</div>
						</div>
					</div>

					<img className="linkIcons linkIconGames" src={gamesIcon} alt="gamepad"></img>
				</div>
			</div>

			<div className="initialSectionLinksContainer rankingsLinkContainer">
				<div className="verticalStripe" style={styles.opacity}>
					<div className={styles.class2}></div>
				</div>

				<div className="initialSectionLinks initialSectionRankingsLink" style={styles.offset2} onClick={ranks}>
					<div className="linkTitleSection linkTitleSectionInverted">
						<div className="initialSectionSide initialSectionSide1"></div>
						<div className="initialSectionSide initialSectionSide2"></div>
						<div className="initialSectionSide initialSectionSide3"></div>
						<div className="initialSectionSide initialSectionSide4"></div>
						<div className="initialSectionSide initialSectionSide5"></div>

						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle1"></div>
						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle2"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle3"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle4"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle5"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle6"></div>

						<div className="initialSectionCover initialSectionCover1"></div>
						<div className="initialSectionCover initialSectionCover2"></div>
						<div className="initialSectionCover initialSectionCover3"></div>
						<div className="initialSectionCover initialSectionCover4"></div>
						<div className="initialSectionCover initialSectionCover5"></div>
						<div className="initialSectionCover initialSectionCover6"></div>
						<div className="initialSectionCover initialSectionCover7"></div>

						<div className="Bolt initialBolt1"></div>
						<div className="Bolt initialBolt2"></div>

						<div className="linkTitleContainer">
							<div className="UserNameContainer">
								<div className="UserNameContainerCoverL"></div>
								<div className="UserNameContainerCoverR"></div>

								<p className="Text linkTitleText rankingLinkTitleText">Ranks</p>
							</div>
						</div>
					</div>

					<img className="linkIcons linkIconRanks" src={ranksIcon} alt="gamepad"></img>
				</div>
			</div>

			<div className="initialSectionLinksContainer forumLinkContainer">
				<div className="verticalStripe" style={styles.opacity}>
					<div className={styles.class3}></div>
				</div>

				<div className="initialSectionLinks initialSectionForumLink" style={styles.offset3} onClick={forum}>
					<div className="linkTitleSection">
						<div className="initialSectionSide initialSectionSide1"></div>
						<div className="initialSectionSide initialSectionSide2"></div>
						<div className="initialSectionSide initialSectionSide3"></div>
						<div className="initialSectionSide initialSectionSide4"></div>
						<div className="initialSectionSide initialSectionSide5"></div>

						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle1"></div>
						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle2"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle3"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle4"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle5"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle6"></div>

						<div className="initialSectionCover initialSectionCover1"></div>
						<div className="initialSectionCover initialSectionCover2"></div>
						<div className="initialSectionCover initialSectionCover3"></div>
						<div className="initialSectionCover initialSectionCover4"></div>
						<div className="initialSectionCover initialSectionCover5"></div>
						<div className="initialSectionCover initialSectionCover6"></div>
						<div className="initialSectionCover initialSectionCover7"></div>

						<div className="Bolt initialBolt1"></div>
						<div className="Bolt initialBolt2"></div>

						<div className="linkTitleContainer">
							<div className="UserNameContainer">
								<div className="UserNameContainerCoverL"></div>
								<div className="UserNameContainerCoverR"></div>

								<p className="Text linkTitleText forumLinkTitleText">Forum</p>
							</div>
						</div>
					</div>

					<img className="linkIcons linkIconForum" src={forumIcon} alt="gamepad"></img>
				</div>
			</div>

			<div className="initialSectionLinksContainer linksLinkContainer">
				<div className="verticalStripe" style={styles.opacity}>
					<div className={styles.class4}></div>
				</div>

				<div className="initialSectionLinks initialSectionLinksLink" style={styles.offset4} onClick={links}>
					<div className="linkTitleSection linkTitleSectionInverted">
						<div className="initialSectionSide initialSectionSide1"></div>
						<div className="initialSectionSide initialSectionSide2"></div>
						<div className="initialSectionSide initialSectionSide3"></div>
						<div className="initialSectionSide initialSectionSide4"></div>
						<div className="initialSectionSide initialSectionSide5"></div>

						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle1"></div>
						<div className="initialSectionAngle initialSectionAngleL initialSectionAngle2"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle3"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle4"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle5"></div>
						<div className="initialSectionAngle initialSectionAngleS initialSectionAngle6"></div>

						<div className="initialSectionCover initialSectionCover1"></div>
						<div className="initialSectionCover initialSectionCover2"></div>
						<div className="initialSectionCover initialSectionCover3"></div>
						<div className="initialSectionCover initialSectionCover4"></div>
						<div className="initialSectionCover initialSectionCover5"></div>
						<div className="initialSectionCover initialSectionCover6"></div>
						<div className="initialSectionCover initialSectionCover7"></div>

						<div className="Bolt initialBolt1"></div>
						<div className="Bolt initialBolt2"></div>
						<div className="linkTitleContainer">
							<div className="UserNameContainer">
								<div className="UserNameContainerCoverL"></div>
								<div className="UserNameContainerCoverR"></div>

								<p className="Text linkTitleText linksLinkTitleText">Links</p>
							</div>
						</div>
					</div>

					<img className="linkIcons linkIconLinks" src={linkIcon} alt="gamepad"></img>
				</div>
			</div>
		</section>
	);
}

const stateToProps = state => {
	return {
		toggle: state.sections.initialSection
	}
}

const dispatchToProps = dispatch => {
	return {
		openInitialSection: () => dispatch({type: "initialSection", value: "open"}),
		closeInitialSection: () => dispatch({type: "initialSection", value: "close"}),
		openGameList: () => dispatch({type: "gameListSection", value: "open"}),
		openRanks: () => dispatch({type: "ranksSection", value: "open"}),
		openForum: () => dispatch({type: "forumSection", value: "open"}),
		openLinks: () => dispatch({type: "linksSection", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps)(InitialSection);