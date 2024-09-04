import styles from "./CategoriesSection.module.scss";
import { Category } from "./components/Category/Category";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../../redux/action/actions";
const cx = classNames.bind(styles);

export const CategoriesSection = () => {
  const genres = useSelector((state) => state.genresReducer.genres);
  const nowPlaying = useSelector((state) => state.nowPlaying.nowPlaying);
  const movies = useSelector((state) => state.movieReducer.movies);
  const uniqueImages = new Set();
  const secure_base_url = useSelector(
    (state) => state.detailsConfig.secure_base_url
  );

  const dispatch = useDispatch();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "position-relative")}>
        <div
          className={cx(
            "categoies-heading",
            "d-flex",
            "justify-content-between"
          )}
        >
          <div className={cx("categories-text-heading")}>
            <h2 className={cx("category-text-heading")}>
              Explore our wide variety of categories
            </h2>
            <p className={cx("category-text-title")}>
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
        </div>
        <div className={cx("categories-section")}>
          <Carousel
            responsive={responsive}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {
              genres.map((genre, index) => {
                let pathIng = secure_base_url;

                for (const movie of movies) {
                  const imagePath = "w300" + movie.poster_path;

                  if (
                    movie.genre_ids.includes(genre.id) &&
                    !uniqueImages.has(imagePath)
                  ) {
                    uniqueImages.add(imagePath); // Thêm đường dẫn vào Set
                    pathIng += imagePath;
                    break; // Thoát khỏi vòng lặp sau khi tìm thấy một ảnh không trùng
                  }
                }

                return (
                  <Category key={index} name={genre.name} path={pathIng} id={genre.id} />
                );
              })
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};
