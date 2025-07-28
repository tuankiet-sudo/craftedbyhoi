import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      <main style={{ flex: '1' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;