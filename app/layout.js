import './globals.css';
import Image from 'next/image';
import MainHeader from './components/main-header';
import ImageBanner from './components/main-header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader></MainHeader>
        <ImageBanner></ImageBanner>

        <main>{children}</main>
      </body>
    </html>
  );
}