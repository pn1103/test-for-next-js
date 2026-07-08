import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased เป็นคลาสที่ทำให้ตัวอักษรดูเรียบขึ้น ขอบเนียนขึ้น */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
