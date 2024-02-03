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
          <form action="" className="group flex flex-1 justify-center w-auto"
              onMouseOver={() => setMyPlaceholder('Game Name + #BR1')}
              onMouseLeave={() => focused ? null : setMyPlaceholder('Search')}
              onFocus={() => setFocused(true)}
              onBlur={() => {
              setMyPlaceholder('Search');
              setFocused(false)
              }}
          >
            <input className="border-2 border-r-0 border-red-800 rounded-l-full px-4 py-1 w-2/5 group-hover:w-4/5 group-focus-within:w-4/5 bg-neutral-800 text-2xl outline-none transition-all"
                    type="text"
                    onChange={handleChange}
                    placeholder={myPlaceholder}
                  />
            <button className=" border-red-900 text-neutral-100 font-serif border-2 rounded-r-full px-4 py-1 bg-neutral-900 text-2xl">ck</button>
            <h1>{playerSearch}</h1>
          </form>
        </div>
	)
}