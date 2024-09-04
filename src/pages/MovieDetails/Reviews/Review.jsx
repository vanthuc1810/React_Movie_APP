import React from "react";
import classNames from "classnames/bind";
import styles from "./Review.module.scss"
import StarRatings from "react-star-ratings";

const cx = classNames.bind(styles);

export const Review = ({ username, locate, rate, title }) => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("heading")}>
          <div className={cx("user-details")}>
            <div className={cx("user-name")}>{username}</div>
            <div className={cx("user-locate")}>{locate}</div>
          </div>
          <div className={cx("rate")}>
            <StarRatings
            starRatedColor="#E50000"
            starEmptyColor="#999999"
            rating={rate}
            starDimension='18px'
            starSpacing='1px'
            />
            <span className={cx('rate-number')}>{rate}</span>
        </div>
        </div>
        <div className={cx("title")}>{title}</div>
      </div>
    </>
  );
};
