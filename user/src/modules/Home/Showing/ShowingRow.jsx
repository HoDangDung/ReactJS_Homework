import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import movieAPI from "../../../services/movieAPI";
import style from "./showing.module.css";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../../utils";
import { useViewport } from "../../../hooks/useViewport";

const ShowingRow = ({ title }) => {
  const navigate = useNavigate();
  const sliderRef = useRef();
  const movieRef = useRef();

  const [movies, setMovies] = useState([]);
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) {
        handleScrollRight();
      }
      if (dragMove > dragDown) {
        handleScrollLeft();
      }
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <div className={style.movieRowContainer} draggable="false">
      <h1 className={style.heading}>{title}</h1>
      <div
        className={style.MoviesSlider}
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
                ${
                  windowWidth > 1200
                    ? "360px"
                    : windowWidth > 992
                    ? "300px"
                    : windowWidth > 768
                    ? "250px"
                    : "200px"
                })`,
              }
            : {}
        }
      >
        {movies.map((item) => (
          <div
            key={item.maPhim}
            className={style.movieItem}
            ref={movieRef}
            draggable="false"
          >
            <img
              src={item.hinhAnh}
              alt=""
              className={style.itemImg}
              draggable="false"
            />
            <span className={style.movieName}>{item.tenPhim}</span>
            <button onClick={() => navigate(`/movie/${item.maPhim}`)}>
              Chi tiết
            </button>
          </div>
        ))}
      </div>
      <div className={style.btnLeft} onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className={style.btnRight} onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default ShowingRow;
