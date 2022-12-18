import './App.css';
import JoblyApi from './backend/helpers/api';
import JoblyRoutes from './Routes/Routes';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<JoblyRoutes />
		</div>
	);
}

export default App;
