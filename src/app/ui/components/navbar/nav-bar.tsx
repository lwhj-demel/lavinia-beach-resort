"use client";
import NavItem from "./nav-item";
import NavButton from "./nav-button";
import styles from "./navbar.module.css";

export default function NavBar() {
  const scrollToHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div className={styles.parentDiv} style={{ zIndex: "100", display: "flex", justifyContent: "center" }}>
      <nav className={styles.navbarContainer}>
        <div className={styles.subContainerStart}>
          <div className={styles.navLogoContainer}>
            <img className={styles.navLogo} src="./Images/lbr-logo.png" onClick={() => scrollToHash("hero-section")} />
          </div>
          <NavItem text="Events" clickFunc={() => scrollToHash("explore-section")} />
          <NavItem text="Enquire" clickFunc={() => scrollToHash("enquire-section")} />
          <NavItem text="Location" clickFunc={() => scrollToHash("location-section")} />
          <NavItem text="Gallery" clickFunc={() => scrollToHash("gallery-section")} />
        </div>
        <div className={styles.subContainerEnd}>
          <NavButton text="Event Enquiry" clickFunc={() => scrollToHash("enquire-section")} />
          <NavButton text="Contact Management" clickFunc={() => window.open('tel:94777267872', '_self')} />
        </div>
      </nav>
    </div>
  );
}