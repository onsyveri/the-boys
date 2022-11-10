import './App.css';
import Navbar from './components/navbar/Navbar';
import {Route, Routes } from "react-router-dom";
import HomePage from './views/HomePage';
import MembersPage from './views/MembersPage';
import Profile from './views/Profile';
import About from './views/About';



function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/members" element={<MembersPage />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/about" element={<About />} />
          </Routes>
      </>
  );
}

export default App;
