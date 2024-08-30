import { useEffect } from "react";
import { HeroImage } from "./HeroImage/HeroImage";
import styles from "./Movies.module.scss";
import { useDispatch } from "react-redux";
import { fetchTopRate } from "../../redux/action/actions";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { MovieSection } from "./MoviesSection/MovieSection";
import ReactPaginate from "react-paginate";
import { useRef } from "react";

export const Movies = () => {
    const dispatch = useDispatch();
    const sectionRef = useRef(null);
 
    useEffect(() => {
        dispatch(fetchTopRate());
    },[])
    return (
        <>
        <HeroImage/>
        <CategoriesSection  />
        <MovieSection itemsPerPage={24} />
        
        </>
    );
}