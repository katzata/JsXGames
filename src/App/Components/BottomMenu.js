import React, { Component } from 'react';
import './Css/BottomMenu.css';
import { connect } from 'react-redux';

class BottomMenu extends Component {
	search = (state) => {
		if (!state) {
			this.props.searchOpen();
			this.props.initialSectionClose();
		}
	}

	profile = (state) => {
		if (!state) {
			this.props.profileOpen();
			this.props.initialSectionClose();
		}
	}

	favorites = (state) => {
		if (!state) {
			this.props.favoritesOpen();
			this.props.initialSectionClose();
		}
	}

	friends = (state) => {
		if (!state) {
			this.props.friendsOpen();
			this.props.initialSectionClose();
		}
	}

	render() {
		return (
			<div className="AdditionalUserSection" style={this.props.menuOffset}>
				<div className="FooterMenuSide FooterMenuSide1" />
				<div className="FooterMenuSide FooterMenuSide2" />
				<div className="FooterMenuSide FooterMenuSide3" />
				<div className="FooterMenuSide FooterMenuSide4" />

				<div className="FooterMenuAngleM FooterMenuAngle1" />
				<div className="FooterMenuAngleM FooterMenuAngle2" />
				<div className="FooterMenuAngleM FooterMenuAngle3" />
				<div className="FooterMenuAngleM FooterMenuAngle4" />
				<div className="FooterMenuAngleM FooterMenuAngle5" />
				<div className="FooterMenuAngleL FooterMenuAngle6" />
				<div className="FooterMenuAngleS FooterMenuAngle7" />

				<div className="FooterMenuCover FooterMenuCover1" />
				<div className="FooterMenuCover FooterMenuCover2" />
				<div className="FooterMenuCover FooterMenuCover3" />
				<div className="FooterMenuCover FooterMenuCover4" />
				<div className="FooterMenuCover FooterMenuCover5" />
				<div className="FooterMenuCover FooterMenuCover6" />

				<div className="UserButtonsContainer">
					<button className="UserButtons SearchButton" onClick={() => this.search(this.props.search)}/>
					<button className="UserButtons ProfileButton" onClick={() => this.profile(this.props.profile)}/>
					<button className="UserButtons FavoritesButton" onClick={() => this.favorites(this.props.favorites)}/>
					<button className="UserButtons FriendsButton" onClick={() => this.friends(this.props.friends)}/>
					<button className="UserButtons LogOutButton" onClick={this.props.logOut}>LOGOUT</button>
				</div>
									
				<div className="MessagesIndicatorOuterContainer">
					<div className="MessagesIndicatorInnerContainer">
						<div className="MessagesIndicatorIcon" />
					</div>
				</div>

				<div className="FriendsIndicatorOuterContainer">
					<div className="FriendsIndicatorInnerContainer">
						<div className="FriendsIndicatorIcon" />
					</div>
				</div>

				<button className="HelpButton" />

				<div className="Bolt Bolt2" />
				<div className="Bolt Bolt3" />
				<div className="Bolt Bolt4" />
			</div>
		);
	}
}

const stateToProps = state => {
	return {
		initial: state.sections.initialSection,
		search: state.sections.searchSection,
		profile: state.sections.profileSection,
		favorites: state.sections.favoritesSection,
		friends: state.sections.friendsSection
	}
}

const dispatchToProps = dispatch => {
	return {
		initialSectionOpen: () => dispatch({type: "initialSection", value: "open"}),
		initialSectionClose: () => dispatch({type: "initialSection", value: "close"}),
		searchOpen: () => dispatch({type: "searchSection", value: "open"}),
		profileOpen: () => dispatch({type: "profileSection", value: "open"}),
		favoritesOpen: () => dispatch({type: "favoritesSection", value: "open"}),
		friendsOpen: () => dispatch({type: "friendsSection", value: "open"}),
		logOut: () => dispatch({type: "logOut"})
	}
}

export default connect(stateToProps, dispatchToProps)(BottomMenu);