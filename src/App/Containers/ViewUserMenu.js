import React, { Component } from 'react';
import './Css/ViewUserMenu.css';
import { connect } from 'react-redux';

class ViewUserMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			offset: 0 
		}
	}

	viewUserMenuShow = () => {
		if (this.props.open) {
			this.setState(() => ({
				offset: -27
			}));
		}
	}

	viewUserMenuToggle = () => {
		if (this.state.offset === -27) {
			this.setState(() => ({
				offset: -83
			}));
		} else {
			this.setState(() => ({
				offset: -27
			}));
		}
	}

	componentDidMount() {
		// console.log(this.props.open)
		this.viewUserMenuShow();
	}

	render() {
		if (this.state.offset === -27) {
			this.style = 0;
		} else {
			this.style = 180;
		}

		return (
			<div className="viewUserMenu" style={{transform: "translateX(" + this.state.offset + "px)"}}>
				<div className="viewUserSide viewUserSide1"></div>
				<div className="viewUserSide viewUserSide2"></div>
				<div className="viewUserSide viewUserSide3"></div>

				<div className="viewUserAngle viewUserAngle1"></div>
				<div className="viewUserAngle viewUserAngle2"></div>
				<div className="viewUserAngle viewUserAngle3"></div>
				<div className="viewUserAngle viewUserAngle4"></div>
				<div className="viewUserAngle viewUserAngle5"></div>
				<div className="viewUserAngle viewUserAngle6"></div>

				<div className="viewUserCover viewUserCover1"></div>
				<div className="viewUserCover viewUserCover2"></div>
				<div className="viewUserCover viewUserCover3"></div>
				<div className="viewUserCover viewUserCover4"></div>
				
				<div className="Bolt viewUserBolt1"></div>
				<div className="Bolt viewUserBolt2"></div>
				<div className="Bolt viewUserBolt3"></div>
				<div className="Bolt viewUserBolt4"></div>

				<div className="viewUserMenuArrowContainer" onClick={this.viewUserMenuToggle}>
					<div className="viewUserArrows viewUserArrow1" style={{transform: "rotateZ(" + this.style + "deg)"}}></div>
					<div className="viewUserArrows viewUserArrow2" style={{transform: "rotateZ(" + this.style + "deg)"}}></div>
					<div className="viewUserArrows viewUserArrow3" style={{transform: "rotateZ(" + this.style + "deg)"}}></div>
				</div>

				<div className="viewUserMenuButtonContainer">
					<div className="UserButtons viewUserMenuButtonSendMessage" onClick={this.props.sendMessage}></div>
					<div className="UserButtons viewUserMenuButtonChat"></div>
					<div className="UserButtons viewUserMenuButtonStats" onClick={this.props.viewUserStats}></div>
					<div className="UserButtons viewUserMenuButtonAddFriend"></div>
					<div className="UserButtons viewUserMenuButtonBlock"></div>
				</div>
			</div>
		);
	}
}

const stateToProps = state => {
	return {
		open: state.userSection
	}
}

const dispatchToProps = dispatch => {
	return {
		sendMessage: () => dispatch({type: "sendMessage", value: "open"}),
		viewUserStats: () => dispatch({type: "viewUserStats", value: "open"})
	}
}

export default connect(stateToProps, dispatchToProps) (ViewUserMenu);