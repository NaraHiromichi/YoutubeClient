import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import DataContext from "./DataContext";

const VideoEmbed = ({ video }) => {
  const { cutText } = useContext(DataContext);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const StyledTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.8rem",
    },
    "@media (max-width: 500px)": {
      fontSize: "1.4rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "1.4rem",
    },
    "@media (max-width: 280px)": {
      fontSize: "1em",
    },
  }));
  return (
    <Box sx={{ height: "100%" }}>
      <iframe
        frameBorder="0"
        height="80%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />
      <StyledTitle
        variant="h4"
        sx={{ marginTop: "0.7em", marginBottom: "0.4em", marginLeft: "0.4em" }}
      >
        {cutText(video.snippet.title)}
      </StyledTitle>
      <Typography variant="span" sx={{ marginTop: "5em", marginLeft: "0.8em" }}>
        {cutText(video.snippet.channelTitle)}
      </Typography>
    </Box>
  );
};

export default VideoEmbed;
