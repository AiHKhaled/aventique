/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import Album from "./Album";
import "../../styles/albums.css";
import { ChildProps } from "@/@types/ChildProps";

const Albums: React.FC<ChildProps> = ({ setIsLoggedIn }: ChildProps) => {
  const [albums, setAlbums] = useState([]);
  if (setIsLoggedIn) setIsLoggedIn(true);
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        const { data } = res;

        setAlbums(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="heading">Albums</h1>
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
