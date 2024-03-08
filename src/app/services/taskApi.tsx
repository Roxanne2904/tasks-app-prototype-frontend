import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TaskType } from "../type";

interface Task {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
}

export const taskApi = createApi({
	reducerPath: "taskApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/",
	}),
	tagTypes: ["Tasks"],
	endpoints: (builder) => ({
		getAllTasks: builder.query<TaskType.Props[], void>({
			query: () => ({ url: "/tasks/" }),
			transformResponse: (response: Task[]): TaskType.Props[] => {
				return response.map((res: Task) => ({
					id: res.id,
					title: res.title === "" ? "Pas de titre..." : res.title,
					description: res.description,
					completed: res.completed ? "Terminée" : "A faire",
					createdAt: res.createdAt,
					updatedAt: res.updatedAt,
				}));
			},

			providesTags: ["Tasks"],
		}),
	}),
});

export const { useGetAllTasksQuery } = taskApi;
