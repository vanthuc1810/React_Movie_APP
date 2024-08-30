import { DevicesSection } from "./components/DevicesSection/DevicesSection";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { Register } from "./components/Register/Register";
import { Card } from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
export const Home = () => {
    const secure_base_url = useSelector((state) => state.detailsConfig.secure_base_url);
    const backdrop_sizes = useSelector((state) => state.detailsConfig.backdrop_sizes);
    const logo_sizes = useSelector((state) => state.detailsConfig.logo_sizes);
    const poster_sizes = useSelector((state) => state.detailsConfig.poster_sizes);
    const nowPlaying = useSelector((state) => state.nowPlaying.nowPlaying);
    return (
        <>
            <HeroImage/>
            <CategoriesSection/>
            <DevicesSection/>
            <Register/>
            <Card />
        </>
    );
}