import Home from "./pages/Home";
import Movie from "./pages/Movies";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro from "./pages/Errors/notFound";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
