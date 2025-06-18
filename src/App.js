
import './App.css';
import MainPage from './main/MainPage';
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import {Admin} from './main/admin/Admin';
import ReactGA from 'react-ga4';
function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

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
