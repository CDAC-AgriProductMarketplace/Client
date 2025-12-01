import Navbar from "./components/layout/Navbar";
import "./App.css";
import FeatureStrip from "./components/utils-components/FeatureStrip";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <body className="font-[Geist] antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Middle strip  Category*/}
      <FeatureStrip />

      {/* Page content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Put your routes or page content here */}
      </main>

      {/* Footer */}
      <Footer />
    </body>
  );
}

export default App;
