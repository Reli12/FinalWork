import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Molecules/NavBar";
import Home from "./components/Pages/Home";
import ResaultPage from "./components/Pages/ResaultPage";
import ContextMatrixProvider from "./context/Context";

function App() {
  return (
    <ContextMatrixProvider>
      <NavBar />
      <Home />
    </ContextMatrixProvider>
  );
}

export default App;
