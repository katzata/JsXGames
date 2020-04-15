import React, { Component } from 'react';
import './Css/TopMenu.css';
import UserImg from '../img/user.svg';
import ArrowSelector from './ArrowSelector.js';
import { connect } from 'react-redux';

class BottomMenu extends Component {
	statusOptions = ["Online", "Incognito"];
	options = this.statusOptions.map((statusOptions, index) => <li className="arrowSelectorOption" key={index}>{statusOptions}</li>);

	render() {
		return (
			<div className="HeaderMenu" style={this.props.menuOffset}>
				<div className="HeaderMenuToggle">
					<div className="HeaderMenuToggleAngle HeaderMenuToggleAngle1" />
					<div className="HeaderMenuToggleAngle HeaderMenuToggleAngle2" />
					<div className="HeaderMenuToggleSide HeaderMenuToggleSide1" />
					<div className="HeaderMenuToggleSide HeaderMenuToggleSide2" />
					<div className="HeaderMenuToggleCover HeaderMenuToggleCover1" />
					<div className="HeaderMenuToggleCover HeaderMenuToggleCover2" />
					<div className="HeaderMenuToggleCover HeaderMenuToggleCover3" />
					<div className="HeaderMenuToggleCover HeaderMenuToggleCover4" />

					<div className="HeaderMenuToggleButton" style={this.props.button} onClick={this.props.action} />
				</div>

				<div className="HeaderMenuAngle HeaderMenuAngle1" />
				<div className="HeaderMenuSide HeaderMenuSide1" />
				<div className="HeaderMenuSide HeaderMenuSide2" />
				<div className="HeaderMenuSide HeaderMenuSide3" />
				<div className="HeaderMenuSide HeaderMenuSide4" />
				<div className="HeaderMenuSide HeaderMenuSide5" />
				<div className="HeaderMenuAngle HeaderMenuAngle2" />
				<div className="HeaderMenuAngle HeaderMenuAngle3 HeaderMenuAngleS" />
				<div className="HeaderMenuAngle HeaderMenuAngle4 HeaderMenuAngleS" />
				<div className="HeaderMenuAngle HeaderMenuAngle5 HeaderMenuAngleS" />
				<div className="HeaderMenuAngle HeaderMenuAngle6 HeaderMenuAngleS" />

				<div className="HeaderMenuCover HeaderMenuCover1" />
				<div className="HeaderMenuCover HeaderMenuCover2" />
				<div className="HeaderMenuCover HeaderMenuCover3" />
				<div className="HeaderMenuCover HeaderMenuCover4" />
				<div className="HeaderMenuCover HeaderMenuCover5" />
				<div className="HeaderMenuCover HeaderMenuCover6" />
				<div className="HeaderMenuCover HeaderMenuCover7" />
				<div className="HeaderMenuCover HeaderMenuCover8" />

				<div className="HeaderMenuUserSectionContainer">
					<div className="UserNameContainer">
						<div className="UserNameContainerCoverL" />
						<div className="UserNameContainerCoverR" />

						<p className="Text UserName">Kацатааааааа</p>
					</div>

					<div className="GameListOuterContainer">
						<div className="GameListInnerContainer">
							<div className="GameListIcon" />
						</div>
					</div>

					<div className="StatusSelectContainer">
						<ArrowSelector>
							<li className="arrowSelectorOption">Online</li>
							<li className="arrowSelectorOption">Incognito</li>
						</ArrowSelector>
					</div>

					<div className="UserMenuContent UserImgContainer">
						<div className="UserImgContainerAngle UserImgContainerAngle1" />
						<div className="UserImgContainerAngle UserImgContainerAngle2" />
						<div className="UserImgContainerAngle UserImgContainerAngle3" />
						<div className="UserImgContainerAngle UserImgContainerAngle4" />

						<img className="UserImg" src={UserImg} alt="user" />
					</div>

					<div className="UserMenuContent UserSectionStatusContainer">
						<div className="UserSectionStatusIndicator" />
					</div>
				</div>

				<div className="Bolt Bolt1" />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		offset: 0
	}
}

export default connect(mapStateToProps)(BottomMenu);