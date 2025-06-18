
import './App.css';
import MainPage from './main/MainPage';
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import {Admin} from './main/admin/Admin';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "home" });
  }, ["home"]);

  return (
    <div className="App">
    <BrowserRouter basename='/'>
    <Routes>

      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
