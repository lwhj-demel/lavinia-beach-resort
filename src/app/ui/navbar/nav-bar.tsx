import NavItem from "./nav-item";
import NavButton from "./nav-button";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.subContainerStart}>
        <NavItem text="Location" />
        <NavItem text="Explore" />
        <NavItem text="Events" />
        <NavItem text="Gallery" />
      </div>
      <div className={styles.subContainerEnd}>
        <NavButton text="Button" />
        <NavButton text="Contact Management" />
      </div>
    </nav>
  );
}