import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import Delivery from "./pages/Delivery";
import News from "./pages/News";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
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