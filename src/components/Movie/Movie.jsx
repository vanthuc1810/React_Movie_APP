import classNames from "classnames/bind";
import styles from './Movie.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchCredit } from "../../redux/action/actions";
const cx = classNames.bind(styles);
export const Movie = ({movie}) => {
    const navigate = useNavigate();
    const secure_base_url = useSelector((state) => state.detailsConfig.secure_base_url);
    
    return (
        <div className={cx('wrapper')} onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={secure_base_url+"w300/"+movie.poster_path} alt="" className={cx("movie-img")} />
            <div className={cx("movie-details")}>
                <h3 className={cx("movie-name")}>{movie.title}</h3>
                <h6 className={cx("movie-date")}>{movie.release_date.slice(0, 4)}</h6>
            </div>
        </div>
    );
}