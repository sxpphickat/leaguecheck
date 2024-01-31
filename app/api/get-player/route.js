import { NextResponse } from 'next/server';
import { getPlayer } from '../calls';
 
export async function GET(request) {
  const data = await getPlayer('Sapphic Kat', 'BR1');
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