

import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {

  return (
    <div >
      <NavBar />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
