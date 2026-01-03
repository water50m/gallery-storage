import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    `${process.env.IMMICH_SERVER_URL}/search/metadata`,
    {
      method: 'POST',
      headers: {
        'x-api-key': process.env.IMMICH_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }
  );

  const data = await res.json();

  // ส่งเฉพาะที่ client ต้องใช้
  return NextResponse.json(data.assets.items);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // ส่งต่อไป Immich ตรง ๆ
    const res = await fetch(
      `${process.env.IMMICH_SERVER_URL}/assets`,
      {
        method: 'POST',
        headers: {
          'x-api-key': process.env.IMMICH_API_KEY!,
          // ❌ ห้ามใส่ Content-Type เอง
        },
        body: formData,
        // @ts-ignore (จำเป็นสำหรับ stream)
        duplex: 'half',
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error('❌ Upload failed:', errorText);
      return new NextResponse(errorText, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (err) {
    console.error('🔥 Upload error:', err);
    return new NextResponse(
      JSON.stringify({ error: 'Upload failed' }),
      { status: 500 }
    );
  }
}
