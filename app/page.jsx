'use client';
import Head from "next/head";
import SearchBar from "@/components/SeachBar";
import { useEffect, useState } from "react";
import Profile from "@/components/Profile";


export default function Home() {
    const [ searchQuery, setSearchQuery ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ cardHeight, setCardHeight ] = useState('h-32');

    return (
      <>
        <div className="flex flex-1 flex-col gap-8 justify-center items-center h-full transition-all">
          <h1 className="text-4xl ">LEAGUE CHECK</h1>
          <SearchBar setSearchQuery={setSearchQuery}
                     setIsLoaded={setIsLoaded}
          />
          <div className={`w-56 ${cardHeight} transition-all duration-1000 flex justify-center items-center`}>
            {searchQuery && (
              <Profile searchQuery={searchQuery}
                      isLoaded={isLoaded}
                      setIsLoaded={setIsLoaded}
                      setCardHeight={setCardHeight}
              />)}

          </div>
        </div>
      </>
    );
}