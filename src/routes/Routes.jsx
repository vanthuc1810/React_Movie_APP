import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Support } from "../pages/Support/Support";
export const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>} />
            <Route path="/movie" element={<MovieDetails/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
            <Route path="/support" element={<Support/>}/>
        </Routes>
    );
}