'use client';
import Head from "next/head";
import SearchBar from "@/components/SeachBar";
import { useEffect } from "react";

export default function Home() {
    return (
      <>
        <div className="flex flex-1 flex-col gap-8 justify-center items-center h-full -mt-12">
          <h1 className="text-4xl">LEAGUE CHECK</h1>
          <SearchBar />
        </div>
      </>
    );
}