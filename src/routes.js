import Home from "./pages/Home";
import Movie from "./pages/Movies";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro from "./pages/Errors/notFound";
import Favorites from "./pages/Favorites";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
