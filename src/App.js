import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListingPage from "./pages/ipo-listing";
import IpoDetailsPage from "./pages/ipo-details";

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
