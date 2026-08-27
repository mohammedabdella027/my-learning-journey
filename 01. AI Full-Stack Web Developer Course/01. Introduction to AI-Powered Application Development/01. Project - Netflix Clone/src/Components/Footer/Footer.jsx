import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";


import styles from "./Footer.module.css";

const footerLinks = [
    [
        "Audio Description",
        "Investor Relations",
        "Legal Notices",
    ],
    [
        "Help Centre",
        "Jobs",
        "Cookie Preferences",
    ],
    [
        "Gift Cards",
        "Terms of Use",
        "Corporate Information",
    ],
    [
        "Media Centre",
        "Privacy",
        "Contact Us",
    ],
];

const socialLinks = [
    {
        name: "Facebook",
        icon: <FaFacebookF />,
        url: "#",
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        url: "#",
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        url: "#",
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        url: "#",
    },
];

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Social Media */}
                <div className={styles.socials}>
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            aria-label={social.name}
                            className={styles.socialLink}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Footer Links */}
                <div className={styles.linksGrid}>
                    {footerLinks.map((column, columnIndex) => (
                        <ul key={columnIndex} className={styles.linkColumn}>
                            {column.map((link) => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                {/* Copyright */}
                <p className={styles.copyright}>
                    © 1997-2026 Netflix, Inc.
                </p>
            </div>
        </footer>
    );
}

export default Footer;