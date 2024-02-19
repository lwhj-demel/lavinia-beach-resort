import styles from "./navbar.module.css";

export default function NavItem({
    text
}: {
    text: string;
}) {
    return (
        <div className={styles.navItem}>
            <a href="">{text}</a>
        </div>
    );
}