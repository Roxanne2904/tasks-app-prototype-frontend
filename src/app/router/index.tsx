import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { TasksPage } from "../pages/TasksPage";
import { TaskPage } from "../pages/TaskPage";

export function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="tasks" element={<TasksPage />} />
					<Route path="tasks/:taskId" element={<TaskPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
