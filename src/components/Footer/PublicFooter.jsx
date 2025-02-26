import styles from "./Footer.module.css"; // Importing CSS module

const PublicFooter = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default PublicFooter;
