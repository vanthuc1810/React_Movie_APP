import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { NavRoutes, Routes } from "./routes/Routes";
import { Footer } from "./components/Footer/Footer";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter, fetchNowPlayIng, fetchDetailsConfig, fetchGenres, fetchMoviesByGenres } from "./redux/action/actions";
import store from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App(props) {
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchDetailsConfig());
      await dispatch(fetchNowPlayIng(1));
      await dispatch(fetchGenres());
      await dispatch(fetchMoviesByGenres());
    }
    fetchData();
  },[])


  return (
    <div className="App">
      <Header/>
      <NavRoutes/>
      {/* <Footer/> */}
    </div>
  );
}



export default App
