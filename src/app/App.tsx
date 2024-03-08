import { Outlet } from "react-router-dom";
import "./App.css";

function App(): JSX.Element {
	return (
		<>
			<h1>Mes gestions de tâches</h1>
			<Outlet />
		</>
	);
}

export default App;
