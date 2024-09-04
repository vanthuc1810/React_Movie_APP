import { Link } from "react-router-dom";
import styles from "./CarouselItem.module.scss";
import { Button } from "../../../../../components/Button/Button";
import { PlayIcon } from "../../../../../components/Icons/Icons";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CarouselItem = ({ active, img, heading, title }) => {
  return (
    <div className={cx('carousel-item', 'carousel_item', { active })}>
      <img
        src={img}
        alt=""
        style={{ width: "100%" }}
        className={cx('carousel_img')}
      />
      <div className={cx('content', 'container')}>
        <h2 className={cx('heading')}>{heading}</h2>
        <p className={cx('title')}>
          {title}
        </p>
        <div className={cx('button_container')}>
          <Button
            leftIcon={<PlayIcon width={'28px'} height={'28px'} />}
            primary
            medium
          >
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
};
