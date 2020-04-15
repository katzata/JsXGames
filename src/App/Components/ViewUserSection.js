import React, { Component } from 'react';
import './Css/ViewUserSection.css';
import avatar from '../img/avatar.gif';
import CloseSectionButton from '../Components/CloseSectionButton';
import ToTopButton from '../Components/ToTopButton';
import { connect } from 'react-redux';

class UserSection extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			style: {
				opacity: "0",
				transform: "scale(0, 0)",
				zIndex: "-10"
			}
		}
	}

	openSection = () => {
		this.setState({
			style: {
				transform: "scale(0, .01)"
			}
		})

		setTimeout(() => {
			this.setState({
				style: {
					transform: "scale(1, .01)"
				}
			})

			setTimeout(() => {
				this.setState({
					style: {
						transform: "scale(1, 1)",
						opacity: "1",
						zIndex: "1"
					}
				})
			}, 100);
		}, 100);
	}

	sectionToggle = () => {
		if (this.props.open) {
			this.setState({
				style: {
					transform: "scale(0, .01)"
				}
			})

			setTimeout(() => {
				this.setState({
					style: {
						transform: "scale(1, .01)"
					}
				})

				setTimeout(() => {
					this.setState({
						style: {
							transform: "scale(1, 1)",
							opacity: "1",
							zIndex: "1"
						}
					})
				}, 100);
			}, 100);
		} else {
			this.setState({
				style: {
					transform: "scale(1, .01)"
				}
			})

			setTimeout(() => {
				this.setState({
					style: {
						transform: "scale(0, .01)"
					}
				})

				setTimeout(() => {
					this.setState({
						style: {
							transform: "scale(0, 0)",
							opacity: "0",
							zIndex: "-10"
						}
					})
				}, 100);
			}, 100);
		}
	}

	componentDidMount() {
		// console.log(this.props.open)

		//this.sectionToggle();
		/*this.test.current.map((item) => {
			console.log(item)
		})*/
	}

	render() {
		return (
			<section className="baseSection viewUserSection" style={this.state.style}>
				<section className="baseSectionInternal userSectionInternal">
					<CloseSectionButton action={this.sectionToggle}/>

					<div className="userInfoContainer userMainContainers">
						<div className="boxShadow boxShadowThick"></div>

						<div className="avatarContainer">
							<div className="avatarLabel userDataSectionLabels">
								<span className="dataSectionText">User</span>
							</div>
							<div className="boxShadow"></div>
							<img className="avatar" src={avatar} alt="user" />
						</div>

						<div className="userInfoGroup">
							<div className="boxShadow"></div>
							
							<div className="statusLabel userDataSectionLabels">
								<span className="dataSectionText">Info</span>
							</div>

							<div className="userNameContainer userDataContainers">
								<span className="userNameLabel userDataLabels">Name:</span>
								<div className="userName userData">Кацатаааааа</div>
							</div>
						
							<div className="currentStatusContainer userDataContainers">
								<span className="currentStatusLabel userDataLabels">Status:</span>
								<div className="currentStatus userData">Online</div>
							</div>
						</div>

						<div className="additionalInfo">
							<div className="infoSubContainer">
								<div className="boxShadow"></div>

								<span className="statsLabel userDataSectionLabels">
									<span className="dataSectionText">Stats</span>
								</span>
							
								<div className="infoInternal">	
									<div className="mostPlayedContainer userDataContainers">
										<span className="mostPlayedLabel userDataLabels">Most Played:</span>
										<div className="mostPlayed userData">Sonic Wings 2</div>
									</div>
								</div>

								<div className="uploadsContainer userDataContainers">
									<span className="uploadsLabel userDataLabels">Uploads:</span>
									<div className="uploads userData">0 Games</div>
								</div>
							</div>
						</div>

						<div className="personalContainer userDataContainers">
							<div className="boxShadow"></div>
							<span className="personalLabel userDataSectionLabels">
								<span className="dataSectionText">Bio</span>
							</span>
							<div className="personal userData" ref={this.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore similique, cumque enim quae, saepe officia inventore molestiae illum sed hic, voluptatum impedit rerum aperiam accusantium aspernatur! Asperiores sapiente, officiis.</div>
						</div>
					</div>

					<ToTopButton />
				</section>
			</section>
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
		userSectionClose: () => dispatch({type: "userSection", value: "close"})
	}
}

export default connect(stateToProps, dispatchToProps)(UserSection);