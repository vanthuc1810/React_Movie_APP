import styles from "./FieldUser.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const FieldUser = ({
  userName,
  img = "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2176",
  userLocate,
}) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user-image")}>
        <img src={img} alt="" />
      </div>
      <div className={cx("user-detail")}>
        <div className={cx("username")}>{userName}</div>
        <div className={cx("userlocate")}>{userLocate}</div>
      </div>
    </div>
  );
};
