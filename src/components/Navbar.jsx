import React, { useState } from "react";

const Navbar = ({
  searchValue,
  setSearchValue,
  handleSearch,
  isLoggedIn,
  handleLogout,
  clearSearchValue,
}) => {
  return (
    <div>
      <nav className="bg-zinc-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between ms-40 py-4">
          <a className="cursor-pointer" href="/">
            <h2 className="text-3xl">LIBRARIES & FRAMEWORKS</h2>
          </a>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <div className="flex gap-4">
                <div className="flex gap-2 bg-zinc-800 p-1 rounded-2xl">
                  <span className="material-symbols-outlined">search</span>
                  <input
                    id="search"
                    className="bg-zinc-800 focus:outline-none max-w-40"
                    placeholder="Search"
                    value={searchValue}
                    onKeyDown={(e) => {
                      e.key === "Enter" && handleSearch();
                    }}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      console.log(searchValue);
                    }}
                  />
                  {searchValue && <button onClick={clearSearchValue}>X</button>}

                  <button
                    id="search"
                    onClick={handleSearch}
                    className="bg-blue-600 rounded-2xl text-sm px-3 py-1 hover:bg-orange-600"
                  >
                    Search
                  </button>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-900 rounded-xl py-1 px-4 hover:bg-red-950"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button className="bg-red-900 rounded-xl py-1 px-4 hover:bg-red-950">
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
