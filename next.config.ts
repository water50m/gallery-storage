import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ตัวอย่าง (ไม่แนะนำถ้าต้องใช้ API Key)
  // async rewrites() {
  //     return [
  //       {
  //         // ถ้าเรียก image ให้แปลงไป assets/original
  //         source: '/api/image/:id',
  //         destination: 'http://192.168.137.204:2283/api/assets/:id/original',
  //       },
  //       {
  //         // อันอื่นให้ส่งไปตามปกติ
  //         source: '/api/:path*',
  //         destination: 'http://192.168.137.204:2283/api/:path*',
  //       },
  //     ];
  // },
};

export default nextConfig;