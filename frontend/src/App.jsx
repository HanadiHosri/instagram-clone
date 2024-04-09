import "./styles/colors.css";
import "./styles/utilities.css";
import Auth from "./pages/Auth/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
