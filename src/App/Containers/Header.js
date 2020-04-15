import React, { Component } from 'react';
import './Css/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="HeaderTitleContainer" style={this.props.style}>
					<h1 className="Text HeaderTitle">Browse</h1>
				</div>

				{this.props.userMenu}
			</div>
		);
	}
} 

export default Header;