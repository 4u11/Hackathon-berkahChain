'use client'
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDonationPage = pathname === '/donation';

  return (
    <div>
      <nav className={`navbar ${isDonationPage ? 'donation' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        <ul>
          <li><a href="/donations">Donation</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/market">Market</a></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;