import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import FoodSlider from "./components/FoodSlider";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <FoodSlider />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
