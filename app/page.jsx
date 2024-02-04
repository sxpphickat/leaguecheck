'use client';
import Head from "next/head";
import SearchBar from "@/components/SeachBar";
import { useEffect, useState } from "react";
import Profile from "@/components/Profile";


export default function Home() {
    const [ searchQuery, setSearchQuery ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    return (
      <>
        <div className="flex flex-1 flex-col gap-8 justify-center items-center h-full -mt-12 ">
          <h1 className="text-4xl ">LEAGUE CHECK</h1>
          <SearchBar setSearchQuery={setSearchQuery}
                     setIsLoaded={setIsLoaded}
          />
          {searchQuery && (
            <Profile searchQuery={searchQuery}
                     isLoaded={isLoaded}
                     setIsLoaded={setIsLoaded}
            />)}
        </div>
      </>
    );
}