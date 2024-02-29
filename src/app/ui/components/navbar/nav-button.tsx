import styles from "./navbar.module.css";
import { MouseEventHandler } from 'react';

export default function NavButton({
    text, clickFunc
}: {
    text: string;
    clickFunc: MouseEventHandler;
}) {
    return (
        <div className={styles.navButton}>
            <button onClick={clickFunc}>{text}</button>
        </div>
    );
}