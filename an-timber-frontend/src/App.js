import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Delivery from "./pages/Delivery";
import News from "./pages/News";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./Home";
import theme from "./style/theme";
function App() {

  return (
    <div className="App" style={{backgroundColor: theme.palette.secondary.light}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<AboutUs />}/>
                <Route path="/delivery" element={<Delivery />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/product-details" element={<ProductDetailsPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;