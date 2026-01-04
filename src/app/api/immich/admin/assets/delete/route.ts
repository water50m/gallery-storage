// import { immichFetch } from '@/app/api/immich/utils/immichFetch';
// import { requireAuth } from '@/app/api/immich/utils/requireAuth';
// import { requireRole } from '@/app/api/immich/utils/requireRole';
// import { NextResponse } from 'next/server';

export async function DELETE() {}
// export async function DELETE(req: Request) {
//   const user = await requireAuth(req);
//   requireRole(user, 'admin');

//   const { id } = await req.json();

//   await immichFetch(`/assets/${id}`, {
//     method: 'DELETE',
//   });

//   return NextResponse.json({ success: true });
// }
