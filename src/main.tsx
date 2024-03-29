import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./app/store/store.ts";
import { Router } from "./app/router/index.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
);
