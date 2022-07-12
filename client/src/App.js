import { Routes, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultImages from "./pages/ResultImages";
import ImageSearch from "./pages/ImageSearch";
import NewsSearch from "./pages/NewsSearch";
function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<ImageSearch />} />
        <Route path="/news" element={<NewsSearch />} />
        <Route path="/result" element={<Result />} />
        <Route path="/resultImages" element={<ResultImages />} />
      </Routes>
    </>
  );
}

export default App;
