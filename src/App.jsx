import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";

// Import Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Characters />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
