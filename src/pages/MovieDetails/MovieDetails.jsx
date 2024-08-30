import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import styles from "./MovieDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import classNames from "classnames/bind";
import { Button } from "../../components/Button/Button";
import {
  CategoryIcon,
  DateIcon,
  LanguageIcon,
  PlayIcon,
  StarIcon,
} from "../../components/Icons/Icons";
import { Reviews } from "./Reviews/Reviews";
import { Card } from "../../components/Card/Card";
import { DetailsField } from "./DetailsField/DetailsField";
import { Field, FieldRating } from "./FieldRating/FieldRating";
import { FieldUser } from "./FieldUser/FieldUser";
import { FieldText } from "./FieldText/FieldText";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCredit,
  fetchMovieDetails,
  fetchReviews,
  fetchVideos,
} from "../../redux/action/actions";
import ReactPlayer from "react-player";
const cx = classNames.bind(styles);

export const MovieDetails = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
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
  const { id } = useParams();

  const secure_base_url = useSelector(
    (state) => state.detailsConfig.secure_base_url
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovieDetails(id));
      await dispatch(fetchCredit(id));
      await dispatch(fetchReviews(id));
      await dispatch(fetchVideos(id));
    };
    fetchData();
  }, []);
  const credits = useSelector((state) => state.creditReducer.credits);
  const myMovie = useSelector((state) => state.movieDetailDeducer.movie);
  const genres = useSelector((state) => state.genresReducer.genres);
  const videos = useSelector((state) => state.videoReducer.videos)
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <>
      {!isPlayed ? (
        <section className={cx("wrapper")}>
          <div className={cx("hero_img", "container")}>
            <img
              src={secure_base_url + "w1280" + myMovie?.backdrop_path}
              alt=""
            />
          </div>
          <div className={cx("overlay", "container")}></div>
          <div className={cx("content")}>
            <div className={cx("heading")}>{myMovie?.title}</div>
            <div className={cx("title")}>{myMovie?.overview}</div>
            <div className={cx("btn_group")}>
              <Button
                primary
                medium
                leftIcon={<PlayIcon />}
                onClick={() => setIsPlayed(true)}
              >
                Play Now
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div className={cx("wrapper")}>
          <div className="container">
            <div className={cx("player-wrapper")}>
              <ReactPlayer
                className={cx("react-player")}
                url={`https://www.youtube.com/watch?v=${videos.find((video) => video.type == "Trailer").key}`}
                width="100%"
                height="100%"
                controls={true}	
              />
            </div>
          </div>
        </div>
      )}
      <section className={cx("wrapper")}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className={cx("row")}>
                <div className={cx("description", "col-12")}>
                  <h6 className={cx("description_heading")}>Description</h6>
                  <h6 className={cx("description_title")}>
                    {myMovie?.overview}
                  </h6>
                </div>
                <div className={cx("cast", "col-12")}>
                  <div className={cx("cast__heading")}>
                    <h6 className={cx("cast__heading_name")}>Cast</h6>
                  </div>
                  <div className={cx("cast__carousel")}>
                    <Carousel
                      responsive={responsive}
                      customButtonGroup={<ButtonGroup />}
                      renderButtonGroupOutside={true}
                      removeArrowOnDeviceType={["desktop"]}
                    >
                      {credits?.map((credit, index) => (
                        <div key={index} className={cx("carousel__item")}>
                          <img
                            src={
                              secure_base_url + "original" + credit.profile_path
                            }
                            alt=""
                            onError={(event) =>
                              (event.target.src =
                                "https://cdn-icons-png.flaticon.com/512/21/21104.png")
                            }
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <div className={cx("review", "col-12")}>
                  <div className={cx("review__heading")}>
                    <h6 className={cx("review__heading_name")}>Reviews</h6>
                    <Link className={cx("reviews__button")}>
                      <img src="/images/addBtn.png" alt="" />
                      Add Your Review
                    </Link>
                  </div>
                  <Reviews />
                </div>
              </div>
            </div>
            {/* Ben phai */}
            <div className={cx("col-4", "list-details")}>
              <DetailsField
                fieldName={"Released Year"}
                icon={<DateIcon width={"24px"} height={"24px"} />}
              >
                <FieldText>{myMovie?.release_date?.slice(0, 4)}</FieldText>
              </DetailsField>
              <DetailsField
                fieldName={"Available Languages"}
                icon={<LanguageIcon width={"24px"} height={"24px"} />}
              >
                <FieldText>{myMovie?.original_language}</FieldText>
              </DetailsField>
              <DetailsField
                fieldName={"Rating"}
                icon={<StarIcon width={"24px"} height={"24px"} />}
              >
                <FieldRating
                  title={"Vote Average"}
                  rate={myMovie?.vote_average / 2}
                />
              </DetailsField>
              <DetailsField
                fieldName={"Gernes"}
                icon={<CategoryIcon width={"24px"} height={"24px"} />}
              >
                {myMovie?.genre_ids?.map((genreId, index) => (
                  <FieldText key={index}>
                    {genres.find((genre) => genreId == genre.id).name}
                  </FieldText>
                ))}
              </DetailsField>
              {myMovie?.production_companies?.map((company, index) => (
                <DetailsField fieldName={"Director"}>
                  <FieldUser
                    userName={company.name}
                    userLocate={company.origin_country}
                    img={secure_base_url + "w500" + company.logo_path}
                  />
                </DetailsField>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Card />
    </>
  );
};
