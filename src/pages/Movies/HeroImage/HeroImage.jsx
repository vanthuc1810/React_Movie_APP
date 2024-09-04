import { Link } from "react-router-dom";
import styles from "./HeroImage.module.scss";
import { CarouselItem } from "./components/CarouselItem/CarouselItem";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

export const HeroImage = () => {
  const topRates = useSelector((state) => state.topRateReducer.topRates);
  const secure_base_url = useSelector(
    (state) => state.detailsConfig.secure_base_url
  );

  return (
    <div className={cx("hero_img_container")}>
      <div className={cx("container", "hero_img")}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {topRates.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {topRates.map((topRate, index) => (
              <CarouselItem
                key={index}
                img={`${secure_base_url}w1280${topRate.backdrop_path}`}
                heading={topRate.title}
                title={topRate.overview}
                active={index === 0}
              />
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
