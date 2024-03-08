import { TaskList } from "../components/TaskList";
import { useGetAllTasksQuery } from "../services/taskApi";
import { ErrorPage } from "./ErrorPage";
import { LoadingPage } from "./LoadingPage";

export function TasksPage(): JSX.Element {
	const { data, isLoading, isError } = useGetAllTasksQuery();

	if (isLoading) return <LoadingPage />;

	if (isError || !data)
		return (
			<ErrorPage error={"Oops !! Nous n'avons pas pu récupérer les tâches !"} />
		);
	return (
		<>
			<h1>Pages des Tâches</h1>
			<TaskList data={data} />
		</>
	);
}
