import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className="container">
        <div className="row justify-content-between">
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Home</h6>
            <p className={cx("title")}>Categories</p>
            <p className={cx("title")}>Devices</p>
            <p className={cx("title")}>Pricing</p>
            <p className={cx("title")}>FAQ</p>
          </div>
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Movies</h6>
            <p className={cx("title")}>Gernes</p>
            <p className={cx("title")}>Trending</p>
            <p className={cx("title")}>New Release</p>
            <p className={cx("title")}>Popular</p>
          </div>
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Show</h6>
            <p className={cx("title")}>Gernes</p>
            <p className={cx("title")}>Trending</p>
            <p className={cx("title")}>New Release</p>
            <p className={cx("title")}>Popular</p>
          </div>
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Support</h6>
            <p className={cx("title")}>Contact Us</p>
          </div>
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Subscription</h6>
            <p className={cx("title")}>Plans</p>
            <p className={cx("title")}>Feature</p>
          </div>
          <div className={cx("col-5 col-md-2", "details")}>
            <h6 className={cx("heading")}>Connect With Us</h6>
            <div className={cx("social")}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
