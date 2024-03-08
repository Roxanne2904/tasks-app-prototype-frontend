import { Task } from "./Task";
import type { TaskType } from "../type";

interface TaskList {
	data: TaskType.Props[];
}

export function TaskList(props: TaskList): JSX.Element {
	const { data } = props;

	return (
		<>
			<ul>
				{data.map((task, index) => (
					<Task key={index} {...task} />
				))}
			</ul>
		</>
	);
}
