import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import DataContext from "./DataContext";

const OtherVideo = ({ video }) => {
  console.log(video);
  const { cutText } = useContext(DataContext);
  return (
    <Box>
      <img src={video.snippet.thumbnails.medium.url} />
      <Box>
        <Typography variant="h5">{cutText(video.snippet.title)}</Typography>
        <Typography variant="span">
          {cutText(video.snippet.channelTitle)}
        </Typography>
      </Box>
    </Box>
  );
};

export default OtherVideo;
