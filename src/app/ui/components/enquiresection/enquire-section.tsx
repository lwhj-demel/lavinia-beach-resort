"use client";
import styles from "./enquiresection.module.css"
import { useRef, useEffect, useState } from 'react';

export default function EnquireSection() {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const delayedToggleFunc = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 4000);
    }

    useEffect(() => {
        if (formRef.current) {
            // Select the form element using appropriate methods for your framework (e.g., useRef, document.getElementById)
            const form = document.getElementById('gform');

            if (!form) {
                console.error('Form element with ID "gform" not found.');
                return;
            }

        }
    }, [formRef]);

    return (
        <>
            <div className={styles.sectionContainer}>
                <h3 className={styles.smallTopLabel}>Enquire</h3>
                <h2 className={styles.headingOne}>Contact Us</h2>
                {submitted ? (
                    <p>We have received your message and will get back to you promptly.</p>
                ) : (
                    <>
                        <p>Send us a message and we will get back to you asap.</p>
                        <form ref={formRef} className={styles.enquireForm} name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSfvrTUGA6SuE44U4OxA8WtJ734qxJleqLmUyg3SnA2dysZhtg/formResponse?" target="hidden_iframe" onSubmit={() => delayedToggleFunc()}>
                            <fieldset className={styles.formFieldSet}>
                                <label className={styles.inputLabel}>Name</label>
                                <input className={styles.inputElement} id="entry.2005620554" name="entry.2005620554" type="text" required />
                                <label className={styles.inputLabel}>Phone number</label>
                                <input className={styles.inputElement} id="entry.1045781291" name="entry.1045781291" type="tel" required />
                                <label className={styles.inputLabel}>Email</label>
                                <input className={styles.inputElement} id="entry.1065046570" name="entry.1065046570" type="email" required />
                                <label className={styles.inputLabel}>Message</label>
                                <textarea className={styles.inputTextArea} id="entry.1166974658" name="entry.1166974658" rows={8} cols={30} placeholder="Add a message here..."></textarea>
                            </fieldset>
                            <input className={styles.submitButton} type="submit" value="Submit" />
                        </form>
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} onLoad={() => { if (submitted) { } }}></iframe>
                    </>
                )}
            </div>
        </>
    );
}