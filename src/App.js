import logo from "./Trick-inc_Logo.png";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Trick-inc Website Coming Soon. Currently Under Construction.</p>
				<a
					className='App-link'
					href='https://torquetricking.com/'
					target='_blank'
					rel='noopener noreferrer'>
					Website donated by Torque
				</a>
			</header>
		</div>
	);
}

export default App;
