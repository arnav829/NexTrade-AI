import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { auth } from "./firebaseconfigurations/config";
import { onAuthStateChanged, signOut } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <Router>
      <MainApp user={user} setUser={setUser} handleLogout={handleLogout} />
    </Router>
  );
}

function MainApp({ user, setUser, handleLogout }) {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar user={user} onLogout={handleLogout} />}

      <div className={!hideNavbar ? "pt-20" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
