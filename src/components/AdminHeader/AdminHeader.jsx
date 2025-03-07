import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Importing CSS module

const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
