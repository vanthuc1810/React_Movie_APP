import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./MovieSection.module.scss";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Movie } from "../../../components/Movie/Movie";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);

const MoviePage = ({ currentItems }) => {
  return (
    <div className="row">
      {currentItems.map((movie, index) => (
        <div className={cx("col-3")} key={index}>
          <div className={cx("movie-item")}>
            <Movie movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const MovieSection = ({ itemsPerPage , ref}) => {
  let movies = useSelector((state) => state.movieReducer.movies);
  
  const [itemOffset, setItemOffset] = useState(0);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genreId = Number(params.get("genre_ids"));

  if (genreId) {
    movies = movies.filter((movie) => movie.genre_ids.includes(genreId));
  }

  let endOffset = itemOffset + itemsPerPage;
  let currentItems = movies.slice(itemOffset, endOffset);
  let pageCount = Math.ceil(movies.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  useEffect(() => {
    if (genreId) {
      movies = movies.filter((movie) => movie.genre_ids.includes(genreId));
      setItemOffset(0);
    }
    // endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // currentItems = movies.slice(itemOffset, endOffset);
    // pageCount = Math.ceil(movies.length / itemsPerPage);
  }, [genreId, pageCount]);
  return (
    <section className={cx("wrapper")} ref={ref} >
      <div className={cx("container")}>
        <h3 className={cx("heading")}>List Movies</h3>
        <MoviePage currentItems={currentItems} />
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName={cx("page-item")}
        pageLinkClassName={cx("page-link")}
        previousClassName={cx("page-item")}
        previousLinkClassName={cx("page-link")}
        nextClassName={cx("page-item")}
        nextLinkClassName={cx("page-link")}
        breakLabel="..."
        breakClassName={cx("page-item")}
        breakLinkClassName={cx("page-link")}
        containerClassName="pagination"
        activeClassName="active"
        activeLinkClassName={cx("activeLinkClassName")}
        renderOnZeroPageCount={null}
        className={cx("paginate", "container")}
      />
    </section>
  );
};
