import React, { Component } from 'react';
import Header from './App/Containers/Header';
import Main from './App/Containers/Main';
import Footer from './App/Containers/Footer';
import TopMenu from './App/Components/TopMenu';
import BottomMenu from './App/Components/BottomMenu';
import './App.css';

class App extends Component {
	state = {
		user: {
			userName: "Kацатаааааа",
			status: "online",
			gameList: false,
			messages: false,
			friendsOnline: false,
			inGame: false
		},
		panel: {
			open: false,
			header: [
				{transform: "rotateZ(0px)"},
				{transform: "translateX(-103px)"},
				{paddingLeft: "66px"}
			],
			footer: [
				{transform: "translateX(110px)"},
				{paddingRight: "20px"}
			]
		},
		footerText: {
			active: false,
			offset: {transform: "translateX(0px)"}
		}
	};

	toggleUserPanel = () => {
		if (this.state.panel.open) {
			this.setState( {
				panel: {
					open: false,
					header: [
						{transform: "rotateZ(0deg)"},
						{transform: "translateX(-103px)"},
						{paddingLeft: "66px"}
					],
					footer: [
						{transform: "translateX(110px)"},
						{paddingRight: "20px"}
					]
				}
			})
		} else {
			this.setState( {
				panel: {
					open: true,
					header: [
						{transform: "rotateZ(180deg) translateX(1px)"},
						{transform: "translateX(0px)"},
						{paddingLeft: "166px"}
					],
					footer: [
						{transform: "translateX(0px)"},
						{paddingRight: "126px"}
					]
				}
			});
		}
	};

	render() {
		return (
			<div className="App">
				<Header 
					style={this.state.panel.header[2]}
					userMenu={ 
						<TopMenu
							button={this.state.panel.header[0]}
							menuOffset={this.state.panel.header[1]}
							action={this.toggleUserPanel}
						/>
					}
				/>

				<Main/>

				<Footer
					style={this.state.panel.footer}
					textOffset={this.state.footerText.offset}
					userMenu={<BottomMenu menuOffset={this.state.panel.footer[0]}/>}
				/>
			</div>
		);
	};
}

export default App;