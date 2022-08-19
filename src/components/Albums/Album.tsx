import React from 'react'
import { styled } from '@mui/material'
import { AlbumProps } from '@/@types/AlbumProps'

const AlbumContainer = styled('div')`
  transition: 1s;
  inline-size: 150px;
  overflow-wrap: break-word;
  border: 1px solid #2f3c7e;
  margin: 10px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: #000;
  &:hover {
    transform: scale(1.05);
    background-color: #ebfbea;
    z-index: 2;
  }
`

const Album: React.FC<AlbumProps> = ({ title }: AlbumProps) => {
  return (
    <>
      <AlbumContainer>
        <h4>{title}</h4>
      </AlbumContainer>
    </>
  )
}

export default Album
