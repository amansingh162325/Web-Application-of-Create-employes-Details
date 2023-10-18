import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Web-Application-of-Create-employes-Details" element={<CreateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;