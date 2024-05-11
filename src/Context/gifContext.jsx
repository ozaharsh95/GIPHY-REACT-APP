import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [fav, setFav] = useState([]);
  
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

  useEffect(()=>{
    const fav = JSON.parse(localStorage.getItem("favoriteGIFs")) || []
    setFav(fav)
  },[])

  const addToFavorites = (id) => {
    if(fav.includes(id)){
      // If the item is already in favorites, remove it
      const updatedFav = fav.filter((itemId) => itemId !==id)
      localStorage.setItem("favoriteGIFs",JSON.stringify(updatedFav))
      setFav(updatedFav)
    }else{
       // If the item is not in favorites, add it
      const updatedFav = [...fav]
      updatedFav.push(id)
      localStorage.setItem("favoriteGIFs",JSON.stringify(updatedFav))
      setFav(updatedFav)
    }
  }

  return (
    <GifContext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, fav, addToFavorites}}
    >
      {children}
    </GifContext.Provider>
  );
};
export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
