
import './App.css';
import MainPage from './main/MainPage';
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import {Admin} from './main/admin/Admin';
function App() {
  return (
    <div className="App">
    <BrowserRouter basename='/poemsbydad'>
    <Routes>

      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
