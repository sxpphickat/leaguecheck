import { useEffect, useState } from "react";
import servers from '../public/riot_endpoints.json'

export default function SearchBar({ setSearchQuery, setIsLoaded }) {
  function generateServerList() {
    const servArr = [];
    for (const key in servers['server']) {
      servArr.push(
        <option key={key} value={key}>{key}</option>
      )
    }
    return servArr;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoaded(false);
    setSearchQuery({
      "gameName": e.target.gameName.value,
      "tagLine": e.target.tagLine.value,
      "server": e.target.server.value,
    });
  }

	return (
		<div className="">
          <form action="" className="flex  dark:text-white justify-center rounded-xl text-black shadow-lg dark:shadow-neutral-800 border-2 dark:border-neutral-700 border-neutral-200 bg-neutral-200 dark:bg-neutral-700 transition-all"
                          onSubmit={handleSubmit}
          >
            <select className="bg-neutral-100 dark:bg-neutral-900 w-20 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-serif rounded-l-xl px-4 py-1 transition-all"
                    name="server" id="server">
              {generateServerList()}
            </select>
            <input  className="dark:text-white placeholder:text-neutral-400 placeholder-inherit px-4 py-1 dark:bg-neutral-800 text-lg sm:w-60 w-36 outline-none transition-all"
                    type="text"
                    placeholder="Game Name"
                    id="gameName"
            />
            <label htmlFor="tagLine" className="text-neutral-400 self-center py-1 bg-white dark:bg-neutral-800 text-lg transition-all">#
            </label>
              <input  className="dark:text-white placeholder:text-neutral-400 py-1 dark:bg-neutral-800 text-lg sm:w-24 w-16 outline-none transition-all"
                      type="text"
                      placeholder='Tag'
                      id="tagLine"
            />
            <button type="submit" className="dark:text-neutral-100 font-serif border-l dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-neutral-50 rounded-r-xl px-4 py-1 bg-neutral-100 dark:bg-neutral-900 text-lg transition-all">ck</button>
          </form>
        </div>
	)
}