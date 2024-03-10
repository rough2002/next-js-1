import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
