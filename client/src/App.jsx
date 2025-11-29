import { useTheme } from "./context/ThemeContext";
import Login from "./pages/authentication/Login";
function App() {
  return (
    
    <div className="min-h-screen bg-surface-light text-text-DEFAULT dark:bg-surface-dark dark:text-text-light transition-colors duration-300">
      <button className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded shadow-card hover:shadow-card-hover transition-all duration-200 m-4">
        Submit Order
      </button>

    </div>
  )
}

export default App
