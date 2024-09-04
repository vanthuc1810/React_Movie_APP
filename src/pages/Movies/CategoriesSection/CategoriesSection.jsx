import styles from "./CategoriesSection.module.scss";
import { Category } from "./components/Category/Category";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

export const CategoriesSection = () => {
  const genres = useSelector(state => state.genresReducer.genres);
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
      items: 1,
    },
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'position-relative')}>
        <div className={cx('categoies-heading', 'd-flex', 'justify-content-between')}>
          <div className={cx('categories-text-heading')}>
            <h3>Our Genres</h3>
          </div>
        </div>
        <div className={cx('categories-section')}>
          <Carousel
            responsive={responsive}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          >
            {genres.map((genre, index) => (
              <Category key={index} name={genre.name} />
            ))}
            
          </Carousel>
        </div>
      </div>
    </div>
  );
};
