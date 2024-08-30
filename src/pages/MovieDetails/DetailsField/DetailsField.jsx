import styles from "./DetailsField.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const DetailsField = ({ fieldName, icon, children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>
        {icon}
        <span className={cx("heading-name")}>{fieldName}</span>
      </div>
      {children}
    </div>
  );
};
