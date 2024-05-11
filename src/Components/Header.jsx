import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuAnchor } from "react-icons/lu";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../Context/gifContext";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setFilter, fav } = GifState();

  async function fetchGifCategories() {
    const { data } = await gf.categories();
    setCategories(data);
  }

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h1 className="text-5xl font-bold cursor-pointer tracking-tight">
            GIPHY
          </h1>
        </Link>

        <div className="flex gap-2 text-md font-bold items-center">
          {/* Render Category */}

          {categories.slice(0, 5).map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <LuAnchor
              size={35}
              className={`py-1 hover:gradient border-b-4 ${
                showCategories ? "gradient" : ""
              } hidden lg:block`}
            />
          </button>

          {fav.length > 0 && (
            <div className="h-9 bg-gray-700 px-6 cursor-pointer rounded flex items-center">
              <Link to="/fav">Favorite GIFs</Link>
            </div>
          )}

          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={35}
            />
          </button>
        </div>
        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-200 opacity-50 my-5"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name_encoded}`}
                  className="font-bold"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* search */}
    </nav>
  );
}

export default Header;
