// import { useTheme } from "./context/ThemeContext";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Cart from "./pages/Cart"
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    
    <div className="min-h-screen bg-surface-light text-text-DEFAULT dark:bg-surface-dark dark:text-text-light transition-colors duration-300">
     

{/* <Cart/> */}

<CheckoutPage/>
    </div>
  )
}

export default App
