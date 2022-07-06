import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import DataContext from "./DataContext";
import { Box } from "@mui/system";
import VideoEmbed from "./VideoEmbed";
import OtherVideo from "./OtherVideo";

const Content = () => {
  const { searchList, isReady, setIsReady } = useContext(DataContext);

  return (
    <Grid container>
      {searchList !== undefined ? (
        <Grid item lg={8}>
          <VideoEmbed video={searchList[0]} />
        </Grid>
      ) : (
        <p>Loading....</p>
      )}
    </Grid>
  );
};

export default Content;
