import { Outlet } from "react-router-dom";
import PublicHeader from '../components/Header';
import PublicFooter from '../components/Footer';

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
