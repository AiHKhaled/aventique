/* eslint-disable */
import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, Box, Avatar } from "@mui/material";
import aventique from "../../src/aventique.svg";
import { Link } from "react-router-dom";
import { ChildProps } from "@/@types/ChildProps";

const Header: React.FC<ChildProps> = ({ isLoggedIn }: ChildProps) => {
  const style = {
    appbar: {
      bgcolor: "#ebfbea",
      borderBottom: "1px solid #ebfbea",
      padding: "0 17px",
    },
    box: {
      marginLeft: "50px",
      transition: "all 200ms ease-out",
    },
    secondBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexGrow: 1,
      flexWrap: "wrap",
    },
    button: {
      padding: "0",

      size: "small",
      variant: "text",
    },
    typo: { fontSize: "15px", variant: "body2", textTransform: "capitalize" },
  };

  return (
    <AppBar elevation={0} sx={style.appbar}>
      <Toolbar>
        <Box sx={style.box} />
        <Box sx={style.secondBox}>
          <Link to="/">
            <img style={{ width: "150px" }} src={aventique} alt="logo" />
          </Link>
          {isLoggedIn ? (
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=5" />
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
