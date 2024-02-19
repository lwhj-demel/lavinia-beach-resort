import styles from "./navbar.module.css";

export default function NavButton({
    text
}: {
    text: string;
}) {
    return (
        <div className={styles.navButton}>
            <button>{text}</button>
        </div>
    );
}