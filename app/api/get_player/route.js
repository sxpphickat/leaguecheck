import { NextResponse } from 'next/server';
import { getPlayer, getSummoner, getEntries } from '../calls';

function apiRequestFail() {
  return NextResponse.json({
    status: 500,
    message: 'riot api error'
  })
}
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const gameName =  searchParams.get('gameName')?.slice(0, 100);
  const tagLine = searchParams.get('tagLine')?.slice(0, 100);
  const server = searchParams.get('server')?.slice(0, 100);

  const player = await getPlayer(gameName, tagLine);

  if (!player) {
     return apiRequestFail();
  }
  const summoner = await getSummoner(player, server);

  if (!summoner) {
     return apiRequestFail();
  }

  const entries = await getEntries(summoner, server);

  const data = {
    summoner: summoner,
    entries: entries
  }

  return NextResponse.json(
    {
      body: data,
      status: 200,
      query: request.query,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
  );
}