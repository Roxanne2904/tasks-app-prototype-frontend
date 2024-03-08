export interface Props {
	id: number;
	title: string;
	description: string;
	completed: "Terminée" | "A faire";
	createdAt: string;
	updatedAt: string;
}
