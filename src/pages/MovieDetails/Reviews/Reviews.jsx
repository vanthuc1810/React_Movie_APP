import Carousel from 'react-multi-carousel';
import styles from './Review.module.scss';
import classNames from 'classnames/bind';
import { Review } from './Review';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);
const reviewsReponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const Reviews = () => {
    const reviews = useSelector((state) => state.reviewsReducer.reviews);
  
    return (
        <div className={cx('review-wrapper')}>
            <div className={cx('row')}>
                <Carousel
                responsive={reviewsReponsive}

                >
                  {reviews.map((review, index) => (
                  <Review key={review.id} username={review.author} locate={review.author_details.username} rate={review.author_details.rating/2} title={review.content}/>
                  ))}
                   
                </Carousel>
            </div>
        </div>
    );
}