import styles from './ButtonGroup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className={cx('categories_btn', 'd-flex', 'align-items-center')}>
      <button className={cx('btn-forward')} onClick={() => previous()}>
        <img src="/images/forward.png" alt="" />
      </button>
      <div className={cx('spacer')} style={{ width: "80px" }}></div>
      <button className={cx('btn-next')} onClick={() => next()}>
        <img src="/images/next.png" alt="" />
      </button>
    </div>
  );
};
