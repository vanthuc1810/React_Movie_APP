import styles from './ButtonGroup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className={cx('categories_btn', 'd-flex', 'align-items-center')}>
      <button className={cx('btn-forward')} onClick={() => previous()}>
        <img src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725091806/Zm9yd2FyZF9hdnlqaDk=/drilldown" alt="" />
      </button>
      <div className={cx('spacer')} style={{ width: "80px" }}></div>
      <button className={cx('btn-next')} onClick={() => next()}>
        <img src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725091806/bmV4dF9ld29zemQ=/drilldown" alt="" />
      </button>
    </div>
  );
};
