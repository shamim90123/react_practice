// Common layouts used across multiple pages (e.g., Admin, Dashboard, User).
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';

function MainLayout({ children }) {
    return (
      <div>
        {/* <header>Main Header</header> */}
        <AdminHeader />
        <main>{children}</main>
        <AdminFooter />
        {/* <header>Main Footer</header> */}
      </div>
    );
  }
  export default MainLayout;
  