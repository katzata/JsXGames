import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Css/SendMessageModal.css';
import CloseSectionButton from '../Components/CloseSectionButton.js';
import ToTopButton from '../Components/ToTopButton.js';

const SendMessageModal = (props) => {
	const [style, setStyle] = useState({opacity: "0", zIndex: "-10"});
	const [scale, setScale] = useState("0, 0");

	const openSection = () => {
		setScale("0, .01");
		setStyle({opacity: "1", zIndex: "1"});

		setTimeout(() => {
			setScale("1, .01");

			setTimeout(() => {
				setScale("1, 1")
			}, 90);
		}, 90);
	}

	const closeSection = () => {
		setScale("1, .01");

		setTimeout(() => {
			setStyle({opacity: "0", zIndex: "1"});
			setScale("0, .01")

			setTimeout(() => {
				setStyle({opacity: "0", zIndex: "-10"});
				setScale("0, 0")
				props.sendMessageClose();
			}, 90);
		}, 90);
	}

	useEffect(() => {
		if (props.sendMessageModal) {
			openSection();
		}
	}, [props.sendMessageModal]);

	const sendMessage = () => {
	}

	return (
		<div className="baseSection sendMessageContainer" style={style}>
			<div className="baseSectionInternal sendMessageInternal" style={{transform: "scale(" + scale + ")"}}>
				<CloseSectionButton action={closeSection}/>

				<div className="sendMessageContentContainer">
					<div className="sendMessageToWhoContainer">
						<div className="sendMessageToLabelContainer">
							<span className="sendMessageToLabel">Recipient</span>
						</div>

						<span className="sendMessageToWho">{props.recipient}</span>
					</div>

					<div className="sendMessageTextAreaContainer">
						<div className="sendMessageTextAreaLabelContainer">
							<span className="sendMessageTextAreaLabel">Message</span>
						</div>

						<textarea className="sendMessageTextArea" resizable="false"></textarea>

						<div className="sendMessageSendButton">
							<span className="sendMessageSendButtontext" onClick={sendMessage}>Send</span>
						</div>
					</div>
				</div>

				<ToTopButton />
			</div>
		</div>
	);
}

const stateToProps = state => {
	return {
		sendMessageModal: state.sendMessageModal
	}
}

const dispatchToProps = dispatch => {
	return {
		sendMessageClose: () => dispatch({type: "sendMessage", value: "close"})
	}
}

export default connect(stateToProps, dispatchToProps)(SendMessageModal);