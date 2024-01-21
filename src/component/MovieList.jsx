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
      `}
    >
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            css={css`
              display: flex;
              background-color: #ffffff;
              height: 230px;
              border-radius: 10px;
              padding: 18px 14px 18px 14px;
              box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
              margin-bottom: 80px;
              width: 420px;
            `}
          >
            <div>
              <img
                src={item.image}
                css={css`
                  width: 100px;
                  height: 100px;
                  border-radius: 17px;
                  object-fit: cover;
                `}
              />
            </div>
            <div
              css={css`
                width: 100%;
                padding-left: 20px;
              `}
            >
              <div
                css={css`
                  margin-bottom: 15px;
                `}
              >
                Title: {item.title}
              </div>
              <div
                css={css`
                  margin-bottom: 15px;
                `}
              >
                Year: {item.year}
              </div>
              <div
                css={css`
                  margin-bottom: 15px;
                `}
              >
                Runtime: {item.runtime}
              </div>
              <div
                css={css`
                  display: flex;

                  align-items: center;
                  margin-bottom: 15px;
                `}
              >
                genres:{" "}
                {item.genres.map((item, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        background-color: #eaac99;
                        border-radius: 7px;
                        padding: 2px 7px;
                        margin-left: 5px;
                      `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <div
                css={css`
                  margin-bottom: 15px;
                `}
              >
                IMDB Ratings: {item.imdbRating}
              </div>
              <div>IMDB Votes: {item.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
