import React, {Component} from 'react';
import './Css/Main.css';
import { connect } from 'react-redux';

import InitialSection from '../Components/InitialSection';

import GameListSection from '../Components/GameListSection';
import RanksSection from '../Components/RanksSection';
import ForumSection from '../Components/ForumSection';
import LinksSection from '../Components/LinksSection';

import ViewUserSection from '../Components/ViewUserSection';
import ViewUserMenu from './ViewUserMenu';
import ProfileSection from '../Components/ProfileSection';
import SearchSection from '../Components/SearchSection';
import FavoritesSection from '../Components/FavoritesSection';
import FriendsSection from '../Components/FriendsSection';

import SendMessageModal from '../Components/SendMessageModal';
import ViewUserStatsModal from '../Components/ViewUserStatsModal';

class Main extends Component {
	render() {
		let currentSection = "";
		let currentModal = "";

		if (this.props.userSection) {
			currentSection = <>
				<ViewUserSection />
				<ViewUserMenu />
			</>;
		}

		if (this.props.gameListSection) {
			currentSection = <GameListSection />;
		}
		if (this.props.ranksSection) {
			currentSection = <RanksSection />;
		}
		if (this.props.forumSection) {
			currentSection = <ForumSection />;
		}
		if (this.props.linksSection) {
			currentSection = <LinksSection />;
		}


		if (this.props.searchSection) {
			currentSection = <SearchSection />;
		}
		if (this.props.profileSection) {
			currentSection = <ProfileSection />;
		}
		if (this.props.favoritesSection) {
			currentSection = <FavoritesSection />;
		}
		if (this.props.friendsSection) {
			currentSection = <FriendsSection />;
		}


		if (this.props.sendMessageModal) {
			currentModal = <SendMessageModal recipient="Ri4i"/>;
		}

		if (this.props.viewUserStatsModal) {
			currentModal = <ViewUserStatsModal />;
		}

		return (
			<main className="mainSection">
				<InitialSection />
				{currentSection}
				{currentModal}			
			</main>
		)
	}
}

const stateToProps = state => {

	return {
		initialSection: state.sections.initialSection,
		gameListSection: state.sections.gameListSection,
		ranksSection: state.sections.ranksSection,
		forumSection: state.sections.forumSection,
		linksSection: state.sections.linksSection,
		profileSection: state.sections.profileSection,
		userSection: state.sections.userSection,
		searchSection: state.sections.searchSection,
		favoritesSection: state.sections.favoritesSection,
		friendsSection: state.sections.friendsSection,
		sendMessageModal: state.modals.sendMessageModal,
		viewUserStatsModal: state.modals.viewUserStatsModal
	}
}

export default connect(stateToProps, null) (Main);