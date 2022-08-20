/* eslint-disable */
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { CardPicture } from "./Picture";
import useFetch from "@/hooks/useFetch";

const styles = {
  picsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "50px",
    marginTop: "100px",
  },

  buttonsContainer: {
    padding: "50px",
  },
  loadMore: { m: "20px", px: "40px" },
  goBack: { m: "20px", px: "40px" },
};

const Pictures = () => {
  const [cardsLimit, setCardsLimit] = useState<number>(15);
  const { id } = useParams();
  const navigate = useNavigate();

  const { fetchData: pictures, loading, error } = useFetch(`${id}/photos`);

  const slicedData = pictures?.slice(0, cardsLimit);

  const handleLoadMore = () => {
    if (slicedData?.length > 0) {
      setCardsLimit(cardsLimit + 15);
    }
  };
  const LoadLess = () => {
    if (slicedData.length === 50) setCardsLimit(15);
  };
  return (
    <>
      <h1> Pictures</h1>
      {loading && <CircularProgress color="success" />}
      {error && <p>{error}</p>}
      <div style={styles.picsContainer as React.CSSProperties}>
        {slicedData.map(({ title, id, thumbnailUrl }) => (
          <CardPicture title={title} key={id} thumbnailUrl={thumbnailUrl} />
        ))}
      </div>

      <div style={styles.buttonsContainer}>
        {slicedData?.length < 50 && (
          <Button
            sx={styles.loadMore}
            variant="outlined"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
        {slicedData?.length === 50 && (
          <Button variant="outlined" sx={styles.loadMore} onClick={LoadLess}>
            Load Less
          </Button>
        )}

        <Button
          sx={styles.goBack}
          variant="outlined"
          onClick={() => navigate("/albums")}
        >
          go back
        </Button>
      </div>
    </>
  );
};

export default Pictures;
