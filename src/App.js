import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={4000} />
      <RoutesApp />
    </div>
  );
}

export default App;
