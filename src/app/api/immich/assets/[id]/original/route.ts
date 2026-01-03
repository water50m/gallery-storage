import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.IMMICH_SERVER_URL}/assets/${id}/original`,
      {
        headers: {
          'x-api-key': process.env.IMMICH_API_KEY!,
        },
      }
    );

    if (!res.ok) {
      console.error('❌ Original error:', await res.text());
      return new NextResponse('Asset not found', { status: 404 });
    }

    return new NextResponse(res.body, {
      headers: {
        'Content-Type': res.headers.get('content-type') ?? 'application/octet-stream',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (err) {
    console.error('🔥 Original fetch failed:', err);
    return new NextResponse('Server error', { status: 500 });
  }
}
