import { useParams } from "react-router-dom";

export function TaskPage(): JSX.Element {
	const { taskId } = useParams();

	return <> {taskId} </>;
}
