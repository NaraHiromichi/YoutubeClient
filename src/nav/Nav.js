import { YouTube } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Search from "./Search";

const Nav = () => {
  const LogoTextContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: theme.spacing(10),
  }));
  return (
    <AppBar color="secondary" sx={{ p: "5px", backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <LogoTextContainer>
          <YouTube color="primary" />
          <Typography variant="h6" component="span" sx={{ ml: "5px" }}>
            Clone
          </Typography>
        </LogoTextContainer>
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
