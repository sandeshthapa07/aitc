import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

import Footer from '../../components/common/layout/Footer';
import Header from '../../components/common/layout/Header';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});
export const metadata: Metadata = {
  title: 'AITC website',
  description: 'Website of aitc international private limited',
};

const lato500 = localFont({
  src: './../fonts/Lato-Medium.ttf',
  variable: '--font-lato500',
  weight: '500',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${lato.className}  ${lato500.className} antialiased`}
    >
      <body>
        <div className='flex min-h-screen flex-col justify-between bg-white  text-gray-900 '>
          <Header />
          <main className='mx-auto w-full max-w-[60ch] space-y-6'>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
