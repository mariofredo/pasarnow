import { Routes, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultImages from "./pages/ResultImages";
import ImageSearch from "./pages/ImageSearch";
import NewsSearch from "./pages/NewsSearch";
import ResultNews from "./pages/ResultNews";
import Login from "./pages/Login";
import Main from "./pages/Main";
import RequireAuth from "./components/RequireAuth";
import IsLogin from "./components/IsLogin";
import ReadingList from "./pages/ReadingList";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<ImageSearch />} />
          <Route path="/news" element={<NewsSearch />} />
          <Route path="/result" element={<Result />} />
          <Route path="/resultImages" element={<ResultImages />} />
          <Route path="/resultNews" element={<ResultNews />} />
          <Route path="/readinglists" element={<ReadingList />} />
        </Route>
        <Route
          path="/login"
          element={
            <IsLogin>
              <Login />
            </IsLogin>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
