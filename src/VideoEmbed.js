import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import DataContext from "./DataContext";

const VideoEmbed = ({ video }) => {
  const { cutText } = useContext(DataContext);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Box>
      <iframe
        frameBorder="0"
        height="80%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />
      <Typography variant="h3">{cutText(video.snippet.title)}</Typography>
    </Box>
  );
};

export default VideoEmbed;
