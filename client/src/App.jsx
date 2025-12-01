import Navbar from "./components/layout/Navbar";
import "./App.css";
import FeatureStrip from "./components/utils-components/FeatureStrip";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="font-[Geist] antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Middle strip  Category*/}
      <FeatureStrip />

      {/* Page content */}
      <div className="flex-grow sm:py-4 xs:py-2 px-4 md:py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
