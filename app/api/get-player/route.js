import { NextResponse } from 'next/server';
import { getPlayer } from '../calls';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hasGameName = searchParams.has('gameName');
  const gameName = hasGameName 
    ? searchParams.get('gameName')?.slice(0, 100)
    : 'Sapphic Kat';
  
  const hasTagLine = searchParams.has('tagLine');
  const tagLine = hasTagLine
    ? searchParams.get('tagLine')?.slice(0, 100)
    : 'BR1';

  const data = await getPlayer(gameName, tagLine);

  if (data === undefined) {
    return NextResponse.json(
      {  },
      {
        status: 500
      }
    )
  }
  return NextResponse.json(
    {
      body: data,
      query: request.query,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}