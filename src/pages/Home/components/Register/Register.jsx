import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Button } from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

export const Register = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("register_heading")}>
          <div className={cx("register-text-heading")}>
            <h3>We Provide you streaming experience across various devices.</h3>
            <p className={cx("register-title")}>
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
          <div className={cx("register_option")}>
            <button className={cx("register_option_btn", "active")}>
              Monthly
            </button>
            <button className={cx("register_option_btn")}>Yearly</button>
          </div>
        </div>

          <div className={cx("list_card")}>
        <div className="row mt-4">
            <div className="col-4 col-12">
              <div className={cx("card")}>
                <div className={cx("details")}>
                  <div className={cx("card_heading")}>Basic Plan</div>
                  <div className={cx("card_title")}>
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </div>
                </div>
                <div className={cx("price")}>
                  $9.99
                  <span className={cx("time")}> /month</span>
                </div>
                <div className={cx("btn_container")}>
                  <Link className={cx("btn")}>Start Free Trial</Link>
                  <Link className={cx("btn", "btn_confirm")}>Choose Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-4 col-12">
              <div className={cx("card")}>
                <div className={cx("details")}>
                  <div className={cx("card_heading")}>Basic Plan</div>
                  <div className={cx("card_title")}>
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </div>
                </div>
                <div className={cx("price")}>
                  $9.99
                  <span className={cx("time")}> /month</span>
                </div>
                <div className={cx("btn_container")}>
                  <Link className={cx("btn")}>Start Free Trial</Link>
                  <Link className={cx("btn", "btn_confirm")}>Choose Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-4 col-12">
              <div className={cx("card")}>
                <div className={cx("details")}>
                  <div className={cx("card_heading")}>Basic Plan</div>
                  <div className={cx("card_title")}>
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </div>
                </div>
                <div className={cx("price")}>
                  $9.99
                  <span className={cx("time")}> /month</span>
                </div>
                <div className={cx("btn_container")}>
                  <Link className={cx("btn")}>Start Free Trial</Link>
                  <Link className={cx("btn", "btn_confirm")}>Choose Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
