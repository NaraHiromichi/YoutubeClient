import { createContext, useState, useEffect } from "react";
import api from "./data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchList, setSearchList] = useState([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyBEmyEqezo7k_pZj7NqCZNtK0nZTj7FSkg",
            q: "styxhelix",
          },
        });
        setSearchList(response.data.items);
        console.log(searchList);
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
  }, []);
  const cutText = (text) => {
    let modifiedText = text;
    if (text.length > 30) {
      return text.substring(0, 30) + "...";
    }
    return modifiedText;
  };
  return (
    <DataContext.Provider
      value={{ searchList, isReady, setIsReady, setSearchList, cutText }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
