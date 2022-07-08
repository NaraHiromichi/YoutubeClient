import { Directions } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";
import OtherVideo from "./OtherVideo";
import { theme } from "./theme";
import VideoEmbed from "./VideoEmbed";

const Content = () => {
  const {
    searchList,
    selectedVideo,
    screenWidth,
    dynamicStyles,
    setDynamicStyles,
  } = useContext(DataContext);
  const showOtherVideo = () => {
    return searchList.map((v) => (
      <OtherVideo
        video={v}
        key={v.id.videoId}
        imageWidth={dynamicStyles.imageWidth}
        titleCount={dynamicStyles.titleCount}
      />
    ));
  };

  useEffect(() => {
    if (screenWidth < 250) {
      setDynamicStyles((prevStyles) => ({
        imageWidth: "95px",
        height: "30%",
        titleCount: 20,
        searchBarWidth: 80,
      }));
    } else if (screenWidth < 320 && screenWidth > 250) {
      setDynamicStyles((prevStyles) => ({
        imageWidth: "120px",
        height: "30%",
        titleCount: 25,
        searchBarWidth: 100,
      }));
    } else if (screenWidth < 500 && screenWidth > 320) {
      setDynamicStyles((prevStyles) => ({
        ...prevStyles,
        imageWidth: "150px",
        height: "40%",
        searchBarWidth: 200,
      }));
    } else if (screenWidth < 900 && screenWidth > 500) {
      setDynamicStyles((prevStyles) => ({ ...prevStyles, height: "60%" }));
      console.log("inside useEffect");
    } else {
      setDynamicStyles((prevStyles) => ({
        ...prevStyles,
        imageWidth: "200px",
        height: "90vh",
        searchBarWidth: 200,
      }));
    }
  }, [screenWidth]);
  return (
    <Grid
      container
      sx={{ height: "80vh", backgroundColor: "info.main" }}
      spacing={1}
    >
      <Grid
        item
        lg={8}
        md={12}
        sm={12}
        xs={12}
        sx={{ height: `${dynamicStyles.height}`, marginBottom: "1em" }}
      >
        {searchList.length !== 0 && <VideoEmbed video={selectedVideo} />}
      </Grid>
      <Grid
        container
        item
        lg={4}
        md={12}
        sm={12}
        xs={12}
        sx={{
          // height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "3em",
        }}
      >
        {searchList.length !== 0 && showOtherVideo()}
      </Grid>
    </Grid>
  );
};

export default Content;
