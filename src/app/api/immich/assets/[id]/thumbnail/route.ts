import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.IMMICH_SERVER_URL}/assets/${id}/thumbnail`,
      {
        headers: {
          'x-api-key': process.env.IMMICH_API_KEY!,
        },
      }
    );

    if (!res.ok) {
      console.error('❌ Thumbnail error:', await res.text());
      return new NextResponse('Thumbnail not found', { status: 404 });
    }

    return new NextResponse(res.body, {
      headers: {
        'Content-Type': res.headers.get('content-type') ?? 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('🔥 Thumbnail fetch failed:', err);
    return new NextResponse('Server error', { status: 500 });
  }
}
