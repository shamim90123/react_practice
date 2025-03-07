import { Outlet } from "react-router-dom";
import PublicHeader from '../components/layouts/PublicHeader';
import PublicFooter from '../components/layouts/PublicFooter';

const MainLayout = () => {
  return (
    <div>
        <PublicHeader />
            <main> <Outlet /> </main>
        <PublicFooter />
    </div>
  );
};

export default MainLayout;
