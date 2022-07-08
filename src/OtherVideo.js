import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import DataContext from "./DataContext";

const OtherVideo = ({ video, imageWidth, titleCount }) => {
  const { cutText, selectedVideo, setSelectedVideo } = useContext(DataContext);
  let selectedVideoFromBug;
  if (selectedVideo.id.videoId === video.id.videoId) {
    return (selectedVideoFromBug = "");
  } else {
    selectedVideoFromBug = "";
  }
  const changeVideo = (e) => {
    setSelectedVideo(video);
  };
  const StyledTitle = styled(Typography)(({ theme }) => ({
    "@media (max-width: 1500px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 1300px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.7rem",
    },
    "@media (max-width: 800px)": {
      fontSize: "1.4rem",
    },
    "@media (max-width: 500px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "0.7rem",
    },
  }));
  const StyledSpan = styled(Typography)(({ theme }) => ({
    "@media (max-width: 1500px)": {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "0.7rem",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5px",
      }}
      onClick={() => changeVideo()}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        width={`${imageWidth}`}
        height="100%"
      />
      <Box ml={5}>
        <StyledTitle variant="h5" sx={{ color: selectedVideoFromBug }}>
          {cutText(video.snippet.title, titleCount)}
        </StyledTitle>
        <StyledSpan variant="span">
          {cutText(video.snippet.channelTitle, titleCount - 10)}
        </StyledSpan>
      </Box>
    </Box>
  );
};

export default OtherVideo;
