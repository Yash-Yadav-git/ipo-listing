import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListingPage from "./pages/ipo-listing/index";
import IpoDetailsPage from "./pages/ipo-details/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/details" element={<IpoDetailsPage />} />
      <Route />
    </Routes>
  );
}

export default App;
