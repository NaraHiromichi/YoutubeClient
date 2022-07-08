import { YouTube } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Search from "./Search";

const Nav = () => {
  const LogoTextContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginLeft: theme.spacing(10),
  }));
  return (
    <Box height="10vh">
      <AppBar color="secondary" sx={{ p: "5px" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
    </Box>
  );
};

export default Nav;
