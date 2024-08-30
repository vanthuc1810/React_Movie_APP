import StarRatings from "react-star-ratings";
import styles from "./FieldRating.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const FieldRating = ({ rate, title }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>{title}</div>
      <div className={cx("rate")}>
        {rate && (
          <>
            <StarRatings
              starRatedColor="#E50000"
              starEmptyColor="#999999"
              rating={rate}
              starDimension="18px"
              starSpacing="1px"
            />
            <span>{rate}</span>
          </>
        )}
      </div>
    </div>
  );
};
