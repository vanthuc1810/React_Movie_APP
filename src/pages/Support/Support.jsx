import styles from "./Support.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const Support = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("row", "content")}>
            <div className="col-4">
              <div className={cx("heading")}>
                <div className={cx("text-heading")}>
                  Welcome to our support page!
                </div>
                <div className={cx("text-sub-heading")}>
                  We're here to help you with any problems you may be having
                  with our product.
                </div>
              </div>
              <div className={cx("img")}>
                <img src="/images/Sub Container (1).png" alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className={cx("form-input")}>
                <div className={cx("row", "input-field")}>
                  <div className="col-6">
                    <div className={cx("title")}>First Name</div>
                    <input type="text" placeholder="Enter First Nem" />
                  </div>
                  <div className="col-6">
                    <div className={cx("title")}>Last Name</div>
                    <input type="text" placeholder="Enter Last Name" />
                  </div>
                </div>
                <div className={cx("row", "input-field")}>
                  <div className="col-6">
                    <div className={cx("title")}>Email</div>
                    <input type="text" placeholder="Enter your Email" />
                  </div>
                  <div className="col-6">
                    <div className={cx("title")}>Phone Number</div>
                    <input type="text" placeholder="Enter your Numbers" />
                  </div>
                </div>
                <div className={cx("row", "input-field")}>
                  <div className="col-12">
                    <div className={cx("title")}>Message</div>
                    <textarea
                      placeholder="Enter your Message"
                      className={cx("input-message")}
                    ></textarea>
                  </div>
                </div>
                <div className={cx("row", "confirm")}>
                  <div className={cx("col-8", "confirm-text")}>
                    <input type="checkbox" className={cx("input-checkbox")} />
                    I agree with Terms of Use and
                    Privacy Policy
                  </div>
                  <button className={cx("confirm-button")}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
