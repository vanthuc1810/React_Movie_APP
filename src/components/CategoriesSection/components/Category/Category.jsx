import { useNavigate } from "react-router-dom";
import styles from "./Category.module.scss";
import classNames from 'classnames/bind';
import { useRef } from "react";

const cx = classNames.bind(styles);
export const Category = ({name, path, id}) => {
  const navigate = useNavigate();
  return (
    <div className={cx('carousel_item')} onClick={() => {
      navigate(`/movies?genre_ids=${id}`);
    }} >
      <div className={cx('categori_img')}>
        <img
          src={path}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className={cx('categori_btn', 'd-flex', 'justify-content-between', 'align-items-center mt-4')}>
        <div className={cx('categori_name')}>{name}</div>
        <img src="/images/next.png" alt="" />
      </div>
    </div>
  );
};
