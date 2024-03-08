import type { TaskType } from "../type";
import { Link } from "react-router-dom";

export function Task(props: TaskType.Props): JSX.Element {
	const { id, title, description, completed, createdAt, updatedAt } = props;

	return (
		<ul>
			<li>
				<Link to={`${id}`}>
					<strong>Titre: </strong> {title}
				</Link>
			</li>
			<li>
				<strong>Description: </strong> {description}
			</li>
			<li>
				<strong>Status: </strong> {completed}
			</li>

			<ul>
				<li>
					<strong>Crée le: </strong> {createdAt}
				</li>
				<li>
					<strong>Mis à jour le: </strong> {updatedAt}
				</li>
			</ul>
			<br />
			<br />
		</ul>
	);
}
