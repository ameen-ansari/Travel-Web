import MountainsPage from './Pages/MountainPage/MountainsPage';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<MountainsPage />} />
    </Routes>

  );
}

export default App;
