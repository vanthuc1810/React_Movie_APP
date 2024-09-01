import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { Button } from '../Button/Button';

const cx = classNames.bind(styles);

export const Card = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'card')}>
        <img
          src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119517/YmFja2dyb3VuZGltZ19ucm51YnE=/drilldown"
          alt=""
          className={cx('card_img')}
        />
        <div className={cx('overlay')}>
          <div className={cx('text')}>
            <div className={cx('heading')}>Start your free trial today!</div>
            <p className={cx('title')}>
              This is a clear and concise call to action that encourages users to
              sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button 
          primary
          medium
          >
          Start a Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};
