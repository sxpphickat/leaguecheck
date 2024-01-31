
export default async function Home() {
    return (
      <div className="bg-neutral-950 h-screen w-screen flex flex-1 flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl">League Check</h1>
        <form action="" className="flex justify-center">
          <input className="border-none rounded-l-full px-4 py-1 w-4/5 bg-neutral-800 text-2xl outline-none" type="text" placeholder="Game Name + #BR1" />
          <button className="border-l-black border-l-2 rounded-r-full px-4 py-1 bg-neutral-800 text-xl">CK</button>
        </form>
      </div>
    );
}