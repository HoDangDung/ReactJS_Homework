import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import routes from "./routers/routes";
import "./App.css";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
