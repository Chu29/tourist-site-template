import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about-us" Component={AboutUsPage} />
        <Route path="/tour-packages" Component={PackagesPage} />
        <Route path="/gallery" Component={GalleryPage} />
        <Route path="/contact-us" Component={ContactUsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
