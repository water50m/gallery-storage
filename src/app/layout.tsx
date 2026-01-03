import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immich Private Gallery",
  description: "High-end personal photo management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} bg-[#080808] antialiased`}>
        {/* ย้าย Comment มาไว้ตรงนี้แทนครับ ปลอดภัยแน่นอน */}
        {/* บังคับเป็น dark mode เสมอ */}
        
        {/* เลเยอร์ตกแต่งพื้นหลังให้ดูมีมิติ (Glow Effect) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px]" />
        </div>
        
        {/* เนื้อหาหลักของแอป */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}