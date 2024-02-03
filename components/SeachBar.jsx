import { useEffect, useState } from "react";

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

	return (
		<div className="">
          <form action="" className="flex  justify-center rounded-xl text-black shadow-md dark:shadow-neutral-800 border-2 dark:border-neutral-700 border-neutral-200 bg-neutral-200 dark:bg-neutral-700 transition-all"
              onMouseOver={() => setMyPlaceholder('Game Name + #BR1')}
              onMouseLeave={() => focused ? null : setMyPlaceholder('Search')}
              onFocus={() => setFocused(true)}
              onBlur={() => {
              setMyPlaceholder('Search');
              setFocused(false)
              }}
          >
            <input className="dark:text-white rounded-l-xl px-4 py-1 dark:bg-neutral-800 text-2xl outline-none transition-all"
                    type="text"
                    onChange={handleChange}
                    placeholder={myPlaceholder}
                  />
            <button className=" dark:text-neutral-100 font-serif border-l dark:border-neutral-700 border-neutral-50 rounded-r-xl px-4 py-1 bg-neutral-100 dark:bg-neutral-900 text-2xl transition-all ">ck</button>
{/*             <h1>{playerSearch}</h1> */}
          </form>
        </div>
	)
}