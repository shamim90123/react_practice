// Common layouts used across multiple pages (e.g., Admin, Dashboard, User).


function MainLayout({ children }) {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
  export default MainLayout;
  