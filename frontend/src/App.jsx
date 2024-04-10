import "./styles/colors.css";
import "./styles/utilities.css";
import Auth from "./pages/Auth/index.jsx";
import Profile from "./pages/profile/index.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app flex center">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
