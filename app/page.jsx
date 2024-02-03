'use client';
import SearchBar from "@/components/SeachBar";

export default function Home() {

    return (
      <div className="flex flex-1 flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl">LEAGUE CHECK</h1>
        <SearchBar />
      </div>
    );
}