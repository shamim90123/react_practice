// Common layouts used across multiple pages (e.g., Admin, Dashboard, User).
import PublicHeader from '../components/Header/PublicHeader';
import PublicFooter from '../components/Header/PublicHeader';

function MainLayout({ children }) {
    return (
      <div>
        {/* <header>Main Header</header> */}
        <PublicHeader />
        <main>{children}</main>
        <PublicFooter />
        {/* <header>Main Footer</header> */}
      </div>
    );
  }
  export default MainLayout;
  