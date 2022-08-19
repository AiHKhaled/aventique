import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { CardPicture } from './Picture'

const styles = {
  picsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '50px',
    marginTop: '100px',
  },

  buttonsContainer: {
    padding: '50px',
  },
  loadMore: { m: '20px', px: '40px' },
  goBack: { m: '20px', px: '40px' },
}

const Pictures = () => {
  const [pictures, setPictures] = useState<[]>([])

  const [cardsLimit, setCardsLimit] = useState<number>(15)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      axios
        .get(`${id}/photos`)
        .then((res) => {
          const { data } = res

          setPictures(data)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
  }, [id])
  const slicedData = pictures?.slice(0, cardsLimit)

  const handleLoadMore = () => {
    if (slicedData?.length > 0) {
      setCardsLimit(cardsLimit + 15)
    }
  }
  const LoadLess = () => {
    if (slicedData.length === 50) setCardsLimit(15)
  }
  return (
    <>
      <h1> Pictures</h1>
      <div style={styles.picsContainer as React.CSSProperties}>
        {slicedData.map(({ title, id, thumbnailUrl }) => (
          <CardPicture title={title} key={id} thumbnailUrl={thumbnailUrl} />
        ))}
      </div>

      <div style={styles.buttonsContainer}>
        {slicedData?.length < 50 && (
          <Button
            sx={styles.loadMore}
            variant='outlined'
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
        {slicedData?.length === 50 && (
          <Button variant='outlined' sx={styles.loadMore} onClick={LoadLess}>
            Load Less
          </Button>
        )}

        <Button
          sx={styles.goBack}
          variant='outlined'
          onClick={() => navigate('/albums')}
        >
          go back
        </Button>
      </div>
    </>
  )
}

export default Pictures
