/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

function MovieList() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;
      `}
    >
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            css={css`
              display: flex;
              color: black;
              border-radius: 10px;
              box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
              width: 470px;
              height: 250px;
            `}
          >
            <div>
              <img
                src={item.image}
                css={css`
                  width: 102px;
                  height: 100px;
                  border-radius: 10px;
                  margin-left: 14px;
                  margin-top: 18px;
                  margin-right: 19px;
                `}
                alt={item.title}
              ></img>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 230px;
                height: 210px;
                margin-top: 18px;
              `}
            >
              <div>Title: {item.title}</div>
              <div>Year: {item.year}</div>
              <div>Runtiome: {item.runtime}</div>
              <div
                css={css`
                  display: flex;
                `}
              >
                Genres:{" "}
                {item.genres.map((genres, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #eaac99;
                        font-size: 16px;
                        border-radius: 10px;
                        width: 80px;
                        height: 27px;
                        flex-shrink: 0;
                        margin-right: 9px;
                      `}
                    >
                      {genres}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {item.imdbRating}</div>
              <div>IMDB Votes: {item.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
