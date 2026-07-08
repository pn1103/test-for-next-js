import { Inter, Lusitana } from 'next/font/google';

// เพิ่ม fonts จาก google มาใช้เพื่อความสวยงาม

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400','700']
})