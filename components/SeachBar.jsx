import { useEffect, useState } from "react";
import servers from '../public/riot_endpoints.json'

export default function SearchBar() {
  const [ myPlaceholder, setMyPlaceholder ] = useState('Search');
  const [ focused, setFocused ] = useState(false);
  const [ playerSearch, setPlayerSearch ] = useState('');

  useEffect(() => {
    document.title = playerSearch ? playerSearch : 'league check';
  }, [playerSearch]);

  const handleChange = (e) => {
    setPlayerSearch(e.target.value);
    console.log(playerSearch);
  }

  const handleClick = (e) => {
    e.preventDefault();

  }

  function generateServerList() {
    const servArr = [];
    for (const key in servers['server']) {
      servArr.push(
        <option key={key} value={key}>{key}</option>
      )
    }
    return servArr;
  }

	return (
		<div className="">
          <form action="" className="flex dark:text-white justify-center rounded-xl text-black shadow-lg dark:shadow-neutral-800 border-2 dark:border-neutral-700 border-neutral-200 bg-neutral-200 dark:bg-neutral-700 transition-all"
              onMouseOver={() => setMyPlaceholder('Game Name + #Tag')}
              onMouseLeave={() => focused ? null : setMyPlaceholder('Search')}
              onFocus={() => setFocused(true)}
              onBlur={() => {
              setMyPlaceholder('Search');
              setFocused(false)
              }}
          >
            <select className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-serif rounded-l-xl px-4 py-1 transition-all"
                    name="server" id="server">
                      {generateServerList()}
            </select>
            <input className="dark:text-white px-4 py-1 dark:bg-neutral-800 text-2xl sm:w-96 w-52 outline-none transition-all"
                    type="text"
                    onChange={handleChange}
                    placeholder={myPlaceholder}
                  />
            <button className=" dark:text-neutral-100 font-serif border-l dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-neutral-50 rounded-r-xl px-4 py-1 bg-neutral-100 dark:bg-neutral-900 text-2xl transition-all ">ck</button>
          </form>
        </div>
	)
}