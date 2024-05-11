import {useEffect, useState} from 'react'
import {GifState} from "../Context/gifContext"
import Gif from '../Components/Gif'
import FilterGif from '../Components/FilterGif'
function Home() {
  const {gf,gifs,setGifs,filter} = GifState()

  const fetchTrendingGIFs = async () => {
    const {data} = await gf.trending({
      limit:20,
      type:filter,
      rating:"g"
    })

    setGifs(data)
  }

  useEffect(()=>{
    fetchTrendingGIFs()
  },[filter])

  return (
    <div className='flex flex-col gap-4'>
      <img
        src='/banner.gif'
        alt='earth_banner'
        className='mt-2 rounded w-full'
      />

      {/* <FilterGif /> */}
      <FilterGif showTrending={true}/>

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {
          gifs.map(gif=>(
            <Gif gif={gif} key={gif?.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home