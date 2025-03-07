import { Outlet } from "react-router-dom";
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

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
