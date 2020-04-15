import React, { useState, useEffect } from 'react';
import './Css/SearchFilters.css';
import arrow from '../img/arrow.svg';
import { connect } from 'react-redux';
import onOff from '../img/on-off.svg';

const SearchFilters = (props) => {
	const [menuOffset, setMenuOffset] = useState("0");
	const [filterStyle, setFilterStyle] = useState({transform: "scaleY(0) translateY(0px)"});
	const [rotation, setRotation] = useState("90");
	const [diode, setDiode] = useState({backgroundColor: "#007300"});

	const menuToggle = () => {
		if (rotation === "90") {
			setRotation("-90");
			setFilterStyle({transform: "scaleY(1) translateY(30px)"});
			setMenuOffset("96");
		} else {
			setRotation("90");
			setFilterStyle({transform: "scaleY(0) translateY(0px)"});
			setMenuOffset("0");
		}
	}

	const diodeButtonToggle = () => {
		props.filtersToggle();
	}

	useEffect(() => {
		if (props.diode) {
			setDiode({backgroundColor: "#00D200"});
		} else {
			setDiode({backgroundColor: "#007300"});
		}
	}, [props.diode]);

	return (
		<div className="searchSectionFiltersContainer">
			<div className="filtersContainer" style={filterStyle}>
				{props.children}
			</div>
			
			<div className="filtersMenuContainer">
				<div className="filtersTopMenu">
					<div className="filtersMenuSide filtersTopMenuSide1"></div>
					<div className="filtersMenuSide filtersTopMenuSide2"></div>
					<div className="filtersMenuSide filtersTopMenuSide3"></div>
					<div className="filtersMenuSide filtersTopMenuSide4"></div>

					<div className="filtersMenuAngle filtersMenuAngleM filtersTopMenuAngle1"></div>
					<div className="filtersMenuAngle filtersMenuAngleM filtersTopMenuAngle2"></div>
					<div className="filtersMenuAngle filtersMenuAngleS filtersTopMenuAngle3"></div>

					<div className="filtersMenuCover filtersTopMenuCover1"></div>
					<div className="filtersMenuCover filtersTopMenuCover2"></div>
					<div className="filtersMenuCover filtersTopMenuCover3"></div>
					<div className="filtersMenuCover filtersTopMenuCover4"></div>
					<div className="filtersMenuCover filtersTopMenuCover5"></div>
																					
					<div className="filtersMenuSidesContainer">
						<div className="filtersMenuSidesSubContainer">
							<div className="filtersMenuAngle filtersMenuAngleM filtersTopMenuAngle4"></div>
							<div className="filtersMenuCover filtersTopMenuCover6"></div>
							<div className="filtersMenuCover filtersTopMenuCover7"></div>
						</div>

						<div className="!EMPTY SPACE DO NOT DELETE!"></div>
						
						<div className="filtersMenuSidesSubContainer">
							<div className="filtersMenuAngle filtersMenuAngleM filtersTopMenuAngle5"></div>
							<div className="filtersMenuCover filtersTopMenuCover8"></div>
							<div className="filtersMenuCover filtersTopMenuCover9"></div>
						</div>
					</div>

					<div className="filtersMenuAngle filtersMenuAngleS filtersTopMenuAngle6"></div>

					<div className="filterTopSectionTitleContainer">
						<div className="filtersTopTitleSide"></div>

						<div className="filtersMenuAngle filtersTopTitleAngle1"></div>
						<div className="filtersMenuAngle filtersTopTitleAngle2"></div>

						<div className="filtersMenuCover filtersTopMenuCover10"></div>

						<div className="arrowSelectorTextContainer filterTopSectionTitle">
							<div className="arrowSelectorContainerCoverL" />
							<div className="arrowSelectorContainerCoverR" />

							<ul className="arrowSelector titleContainer">
								<li className="filtersTopTitle">Filters</li>
							</ul>
						</div>

						<div className="Bolt filterTopMenuBolt1"></div>
						<div className="Bolt filterTopMenuBolt2"></div>
					</div>

					<div className="filtersDiodeButtonContainer">
						<div className="filtersMenuAngle filtersDiodeButtonAngle1"></div>
						<div className="filtersMenuAngle filtersDiodeButtonAngle2"></div>

						<div className="filtersMenuCover filtersDiodeButtonCover"></div>

						<div className="diodeButtonContainer">
							<div className="UserButtons diodeButton" onClick={diodeButtonToggle} >
								<img className="onOffImage" src={onOff} alt="on off"></img>
								<div className="diode" style={diode}></div>
							</div>
						</div>
					</div>

					<div className="Bolt filterTopMenuBolt3"></div>
					<div className="Bolt filterTopMenuBolt4"></div>
				</div>

				<div className="filtersBottomMenu" style={{transform: "translateY(" + menuOffset + "px)"}}>
					<div className="filtersMenuSide filtersBottomMenuSide1"></div>
					<div className="filtersMenuSide filtersBottomMenuSide2"></div>

					<div className="filtersMenuAngle filtersMenuAngleS filtersBottomMenuAngle1"></div>
					<div className="filtersMenuAngle filtersMenuAngleS filtersBottomMenuAngle4"></div>
					<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuAngle5"></div>
					<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuAngle6"></div>

					<div className="filtersMenuCover filtersBottomMenuCover1"></div>
					<div className="filtersMenuCover filtersBottomMenuCover2"></div>
					<div className="filtersMenuCover filtersBottomMenuCover3"></div>
					
					<div className="filtersBottomMenuSidesContainer">
						<div className="filtersMenuSide filtersBottomMenuSide3"></div>
						
						<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuAngle7"></div>
						<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuAngle8"></div>

						<div className="filtersMenuCover filtersBottomMenuCover4"></div>
					</div>

					<div className="filtersBottomMenuButtonContainer">
						<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuButtonAngle1"></div>
						<div className="filtersMenuAngle filtersMenuAngleM filtersBottomMenuButtonAngle2"></div>

						<div className="filtersMenuCover filtersBottomMenuButtonCover"></div>

						<div className="filtersBottomMenuButton" onClick={menuToggle}>
							<img className="filtersButtonArrow" src={arrow} style={{transform: "rotateZ(" + rotation + "deg)"}} alt="double arrow"></img>
							<img className="filtersButtonArrow" src={arrow} style={{transform: "rotateZ(" + rotation + "deg)"}} alt="double arrow"></img>
							<img className="filtersButtonArrow" src={arrow} style={{transform: "rotateZ(" + rotation + "deg)"}} alt="double arrow"></img>

							<div className="bottomMenuRidgesContainer">
								<div className="bottomMenuRidges bottomMenuRidge1"></div>
								<div className="bottomMenuRidges bottomMenuRidge2"></div>
								<div className="bottomMenuRidges bottomMenuRidge3"></div>
							</div>
						</div>

						<div className="Bolt filterBottomMenuBolt1"></div>
						<div className="Bolt filterBottomMenuBolt2"></div>
					</div>

					<div className="Bolt filterBottomMenuBolt3"></div>
					<div className="Bolt filterBottomMenuBolt4"></div>
				</div>
			</div>
		</div>
	);
}

const stateToProps = state => {
	return {
		diode: state.filters.games
	}
}

const dispatchToProps = dispatch => {
	return {
		filtersToggle: () => dispatch({type: "gameFiltersToggle"}),
	}
}

export default connect(stateToProps, dispatchToProps) (SearchFilters);