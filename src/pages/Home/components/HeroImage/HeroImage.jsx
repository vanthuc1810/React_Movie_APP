import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './HeroImage.module.scss';
import { Button } from "../../../../components/Button/Button";
import { PlayIcon } from "../../../../components/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);
export const HeroImage = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={cx("hero-img-container")}>
      <div className={cx("hero-img")}>
        <img src="/images/HeroIImage.png" alt="" style={{ width: "100%" }} />
      </div>
      <div className={cx("overlay")}>
        
      </div>
      <div className={cx("hero-sub-content")}>
        <h1 className={cx("content-heading")}>The Best Streaming Experience</h1>
        <p className={cx("content-sub")}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        {/* <Link className={cx("hero-btn")}>
          <img
            src="/images/media_icon.png"
            style={{ width: "28px", height: "28px" }}
            alt=""
          />
          <h6 className={cx("hero-text")}>Start Watching Now</h6>
        </Link> */}
      
        <Button
        large
        primary
        leftIcon={<PlayIcon width={'28px'} height={'28px'}/>}
        onClick={() => navigate('/movies')}
        >
          Start Watching Now
        </Button>
      </div>
    </div>
  );
};
