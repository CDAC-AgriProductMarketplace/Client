import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

// Pages
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-surface-light text-text-DEFAULT 
      dark:bg-surface-dark dark:text-text-light transition-colors duration-300`}
    >
      <Routes>
        {/* Correct Product Details Route */}
        <Route path="/" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
