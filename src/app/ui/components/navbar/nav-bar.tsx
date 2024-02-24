import NavItem from "./nav-item";
import NavButton from "./nav-button";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.parentDiv} style={{ zIndex: "100", display: "flex", justifyContent: "center" }}>
      <nav className={styles.navbarContainer}>
        <div className={styles.subContainerStart}>
          <NavItem text="Events" />
          <NavItem text="Enquire" />
          <NavItem text="Location" />
          <NavItem text="Gallery" />
          {/* <NavItem text="Enquire" /> for events */}
        </div>
        <div className={styles.subContainerEnd}>
          <NavButton text="Event Enquiry" />
          <NavButton text="Contact Management" />
        </div>
      </nav>
    </div>
  );
}