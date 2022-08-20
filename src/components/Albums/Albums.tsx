/* eslint-disable */
import React from "react";

import { Link } from "react-router-dom";
import Album from "./Album";
import "../../styles/albums.css";
import { ChildProps } from "@/@types/ChildProps";
import useFetch from "@/hooks/useFetch";
import { CircularProgress } from "@mui/material";

const Albums: React.FC<ChildProps> = ({ setIsLoggedIn }: ChildProps) => {
  const { fetchData: albums, loading, error } = useFetch("");

  if (setIsLoggedIn) setIsLoggedIn(true);

  return (
    <>
      <h1 className="heading">Albums</h1>
      {loading && <CircularProgress color="success" />}
      {error && <p>{error}</p>}
      <div className="cardsContainer">
        {albums.map(({ title, id }) => {
          return (
            <div key={id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/albums/${id}/photos`}
              >
                <Album title={title} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Albums;
