import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import AuthContainer from "./components/AuthContainer.jsx";
import ProtectedRoutes from "./components/utils/ProtectedRoute.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <AuthContainer />,
			},
			{
				path: "/page1",
				element: (<ProtectedRoutes><Page1 /></ProtectedRoutes>),
			},
			{
				path: "/page2",
				element: (<ProtectedRoutes><Page2 /></ProtectedRoutes>),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
