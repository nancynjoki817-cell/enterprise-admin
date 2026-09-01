import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

      <div
        className={`app ${
          darkMode ? "dark-mode" : ""
        }`}
      >

        <Sidebar />

        <main className="main-content">

          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/customers"
              element={<Customers />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;