/* eslint-disable */
import { PictureProps } from "@/@types/PictureProps";
import { Card, styled } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const PictureCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  width: 200px;
  margin: 2rem;
  padding: 0.5rem;
  padding-top: 2rem;
  min-height: 250px;
  box-shadow: -10px 5px 10px gray;
  border-radius: 12px;
  border: 1px solid rgba(59, 58, 58, 0.5);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 2;
    background-color: #a9c0d1;
  }
`;

export const CardPicture: React.FC<PictureProps> = ({
  title,
  thumbnailUrl,
}: PictureProps) => {
  return (
    <PictureCard>
      <div>
        <img
          data-testid="card"
          style={{ borderRadius: "12px" }}
          src={thumbnailUrl}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </div>
    </PictureCard>
  );
};
