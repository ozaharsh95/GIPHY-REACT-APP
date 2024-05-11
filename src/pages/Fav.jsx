import { GifState } from "../Context/gifContext";
import Gif from "../Components/Gif";
import { useState,useEffect } from "react";


function Fav() {
  const { gf , fav } = GifState();
  const [favGIFs,setFavGIFs] = useState([])

  const fetchFavoriteGIFs = async () => {
    const {data:gifs} = await gf.gifs(fav)
    setFavGIFs(gifs)
  }

  useEffect(()=>{
    fetchFavoriteGIFs()
  },[])

  return (
    <div className="mt-2">
      <span className="faded-text ">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  )
}

export default Fav