import "./App.css";

import StatusIndicator from "./components/visual/StatusIndicator/StatusIndicator";
import GlassPanel from "./components/visual/GlassPanel/GlassPanel";
import MechPlate from "./components/visual/MechPlate/MechPlate";
import MechCorner from "./components/visual/MechCorner/MechCorner";
import Bolt from "./components/visual/Bolt/Bolt";
import Spinner from "./components/visual/Spinner/Spinner";

function App(): JSX.Element {
	return (
		<div className="App">
			{/* <div id="test"></div> */}

			{/* <Spinner /> */}
			{/* <Bolt /> */}
			{<MechCorner orientation="tl" size={100}>
			{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 415.346 415.346" width="512px" height="512px">
				<path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697    c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z" data-original="#000000" fill="#E7E7E7"/>
			</svg> */}
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 438.533 438.533">
				<path
					d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0   c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267   c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407   s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062   C438.533,179.485,428.732,142.795,409.133,109.203z M361.74,259.517l-29.123,29.129c-3.621,3.614-7.901,5.424-12.847,5.424   c-4.948,0-9.236-1.81-12.847-5.424l-87.654-87.653l-87.646,87.653c-3.616,3.614-7.898,5.424-12.847,5.424   c-4.95,0-9.233-1.81-12.85-5.424l-29.12-29.129c-3.617-3.607-5.426-7.898-5.426-12.847c0-4.942,1.809-9.227,5.426-12.848   l129.62-129.616c3.617-3.617,7.898-5.424,12.847-5.424s9.238,1.807,12.846,5.424L361.74,233.822   c3.613,3.621,5.424,7.905,5.424,12.848C367.164,251.618,365.357,255.909,361.74,259.517z"
					fill="#FFFFFF"
				/>
			</svg>
				{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 93.934 93.934"><g><g>
					<path d="M80.178,13.757c-18.341-18.342-48.08-18.342-66.421,0c-18.342,18.341-18.342,48.08,0,66.421   c18.341,18.342,48.08,18.342,66.421,0C98.52,61.836,98.52,32.098,80.178,13.757z M71.576,61.737l-9.838,9.838l-14.771-14.77   l-14.771,14.77l-9.838-9.838l14.77-14.771l-14.77-14.771l9.838-9.838l14.771,14.771l14.771-14.771l9.838,9.838l-14.77,14.772   L71.576,61.737z" fill="#FFFFFF"/>
				</g></g> </svg> */}
			</MechCorner>}
			{/* <MechPlate version="a" width={300} height={300} withGlow={true} cutOff={12}/> */}
			{/* <GlassPanel width={300} height={200} />

			<StatusIndicator status={false} size="16px">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 476 476">
					<path
						d="M230.432 239.282c65.829 0 119.641-53.812 119.641-119.641C350.073 53.812 296.261 0 230.432 0s-119.64 53.812-119.64 119.641 53.812 119.641 119.64 119.641zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"
						fill="white"
					>
					</path>
				</svg>
			</StatusIndicator> */}
		</div>
	);
};

export default App;