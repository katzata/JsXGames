import React, { Component } from 'react';
import './Css/Footer.css';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.textContainer = React.createRef();
		this.textContent = React.createRef();
	}

	date = new Date();

	state = {
		menu: {
			offset: this.props.style[0],
			padding: this.props.style[1]
		},
		text: {
			offset: 0,
			duration: "1s"
		}
	}

	manageText = () => {
		if (this.textContainer.current.offsetWidth < this.textContent.current.offsetWidth) {
			const difference = -(this.textContent.current.offsetWidth - this.textContainer.current.offsetWidth + 38);

			this.setState( {
				text:{
					offset: difference,
					//duration: 1
				}
			} )

			setInterval(this.scrollText, 7000);
			console.log(this.state.text.offset);
		} else {
			this.setState( {
				text:{
					offset: 0,
					//duration: 2
				}
			} )

			clearInterval(this.scrollText);
		}
	}
	scrollText = () => {
		const difference = -(this.textContent.current.offsetWidth - this.textContainer.current.offsetWidth + 38);

		if (this.state.text.offset !== 0) {
			this.setState( {
				text:{
					offset: 0,
					//duration: 1
				}
			} )
		} else {
			this.setState( {
				text:{
					offset: difference,
					//duration: 1
				}
			} )
		}
	}

	componentDidMount() {
		this.manageText();
	}

	render() {
		return (
			<div className="Footer">
				<div className="FooterContentContainer" style={this.props.style[1]}>
					<div className="FooterContentInternal">
						<div className="FooterContentLine" />

						<div className="FooterContentItems FooterContentItem1">
							<span className="FooterItemText">About</span>
						</div>
						<div className="FooterContentItems FooterContentItem2">
							<span className="FooterItemText">Contact</span>
						</div>
						<div className="FooterContentItems FooterContentItem3">
							<span className="FooterItemText">Links</span>
						</div>
					</div>

					<div className="FooterMainTextContainer" ref={this.textContainer} onClick={this.manageText}>
						<span 
							className="FooterMainText" 
							ref={this.textContent} 
							style={{ 
								transform: `translateX(${this.state.text.offset}px)`,
								transitionDuration: `${this.state.text.duration}s`			
							}}
						>Copyright © {this.date.getFullYear()}</span>
					</div>
				</div>

				{this.props.userMenu}
			</div>
		);
	}
}

export default Footer;