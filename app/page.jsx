'use client';
import Head from "next/head";
import SearchBar from "@/components/SeachBar";

export default function Home() {

    return (
      <>
        <div className="flex flex-1 flex-col gap-8 justify-start items-center h-full">
          <h1 className="text-4xl mt-72">LEAGUE CHECK</h1>
          <SearchBar />
        </div>
      </>
    );
}