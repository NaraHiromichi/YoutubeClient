import { createContext, useState, useEffect } from "react";
import api from "./data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchList, setSearchList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [searchDataToFind, setSearchDataToFind] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dynamicStyles, setDynamicStyles] = useState({
    height: "90vh",
    imageWidth: "200px",
    titleCount: 35,
    searchBarWidth: 200,
  });
  const getWindowWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getWindowWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyDo2wnrdqAZ1orU2Bs-4nepgOF179KTe7k",
            q: `${searchDataToFind}`,
          },
        });
        setSearchList(response.data.items);
        setSelectedVideo(response.data.items[0]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchData();
  }, [searchDataToFind]);
  const cutText = (text, count) => {
    let modifiedText = text;
    if (text.length > count) {
      return text.substring(0, count) + "...";
    }
    return modifiedText;
  };
  return (
    <DataContext.Provider
      value={{
        searchList,
        selectedVideo,
        setSelectedVideo,
        setSearchList,
        cutText,
        searchDataToFind,
        setSearchDataToFind,
        screenWidth,
        dynamicStyles,
        setDynamicStyles,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
