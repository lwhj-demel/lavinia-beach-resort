import styles from "./navbar.module.css";
import { MouseEventHandler } from 'react';

export default function NavItem({
    text, clickFunc
}: {
    text: string;
    clickFunc: MouseEventHandler;
}) {
    return (
        <div className={styles.navItem}>
            <a onClick={clickFunc}>{text}</a>
        </div>
    );
}