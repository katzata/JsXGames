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

			<Spinner />
			{/* <Bolt /> */}
			{/* {<MechCorner size={100}>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 93.934 93.934"><g><g>
					<path d="M80.178,13.757c-18.341-18.342-48.08-18.342-66.421,0c-18.342,18.341-18.342,48.08,0,66.421   c18.341,18.342,48.08,18.342,66.421,0C98.52,61.836,98.52,32.098,80.178,13.757z M71.576,61.737l-9.838,9.838l-14.771-14.77   l-14.771,14.77l-9.838-9.838l14.77-14.771l-14.77-14.771l9.838-9.838l14.771,14.771l14.771-14.771l9.838,9.838l-14.77,14.772   L71.576,61.737z" fill="#FFFFFF"/>
				</g></g> </svg>
			</MechCorner>} */}
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