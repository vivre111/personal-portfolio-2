import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home"
import Navbar from './components/Navbar';
import Research from './pages/Research';
import LabMembers from './pages/LabMembers';
import Publications from './pages/Publications';
import News from './pages/News';
import Opportunities from './pages/Opportunities';
import Links from './pages/Links';
import Funding from './pages/Funding';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/Research' element={<Research></Research>} />
        <Route path='/LabMembers' element={<LabMembers/>} />
        <Route path='/Publications' element={<Publications/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Opportunities' element={<Opportunities/>} />
        <Route path='/Links' element={<Links/>} />
        <Route path='/Funding' element={<Funding/>} />
      </Routes>
    </Router>
  );
}

export default App;
