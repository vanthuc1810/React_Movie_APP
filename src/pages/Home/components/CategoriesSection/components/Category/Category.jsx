import { useNavigate } from "react-router-dom";
import styles from "./Category.module.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export const Category = ({name, path}) => {
  const navigate = useNavigate();
  return (
    <div className={cx('carousel_item')} onClick={() => navigate('/movies')}>
      <div className={cx('categori_img')}>
        <img
          src={path}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className={cx('categori_btn', 'd-flex', 'justify-content-between', 'align-items-center')}>
        <div className={cx('categori_name')}>{name}</div>
        <img src="/images/next.png" alt="" />
      </div>
    </div>
  );
};
