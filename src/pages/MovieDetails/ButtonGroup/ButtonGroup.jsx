import React from "react";
import classNames from "classnames/bind";
import styles from "./ButtonGroup.module.scss";

const cx = classNames.bind(styles);

export const ButtonGroup = ({ next, previous , goToSlide, ...rest }) => {
  return (
    <div className={cx('categories_btn')}>
      <button className={cx('btn-forward')} onClick={previous}>
        <img src="/images/forward.png" alt="Forward" />
      </button>
      <div style={{ width: "80px" }}></div>
      <button className={cx('btn-next')} onClick={next}>
        <img src="/images/next.png" alt="Next" />
      </button>
    </div>
  );
};
