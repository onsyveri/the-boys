import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './views/HomePage';
import MembersPage from './views/MembersPage';
import Profile from './views/Profile';



function App() {
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/the-boys/" element={<HomePage />} />
              <Route path="/the-boys/members" element={<MembersPage />} />
              <Route path="/the-boys/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
