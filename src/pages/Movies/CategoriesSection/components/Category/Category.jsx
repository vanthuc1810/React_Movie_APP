import { Button } from "../../../../../components/Button/Button";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Category = ({name}) => {
  return (
    <div className={cx('carousel_item')}>
      <div className={cx('categori-img')}>
        <img
          src="/images/categories/Container.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className={cx('categori-btn', 'd-flex', 'justify-content-between', 'align-items-center', 'my-2')}>
        <div className={cx('category')}>
          <Button
          className={cx('top_10')}
          small
          primary
          >
            Top 10 In
          </Button>
          
          <div className={cx('category_name')}>{name}</div>
        </div>
        <img src="/images/next.png" alt="" />
      </div>
    </div>
  );
};
