import { NextResponse } from 'next/server';

const BASE = process.env.IMMICH_SERVER_URL!;
const API_KEY = process.env.IMMICH_API_KEY!;

export async function immichFetch(
  path: string,
  init?: RequestInit
) {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      'x-api-key': API_KEY,
      ...(init?.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res;
}
